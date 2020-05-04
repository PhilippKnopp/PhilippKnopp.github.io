// JS Document

////////// Bewegt die Gegner in Kampfsituationen //////////////////////////////////////////////////////////


// Geht alarmierte Gegner durch und startet die Zugplanung für diese.
// Danach wird der geplante Zug für den Gegner durchgeführt und es wird mit dem nächsten Gegner weitergemacht.

function enemyPlanMove (enemy) {
    let victimOfChoice;
    let victimRanking = [];
    let placeOfChoice;
    let placeRanking = [];
    let actionStack = [];
    
    // das Opfer der Wahl wird definiert
    for (var i = 0; i < figuresOnMap.length; i++) {
        if (figuresOnMap[i] instanceof Figure && figuresOnMap[i].health > 0 && figuresOnMap[i].stealth == false) {
            
            tileArray[figuresOnMap[i].onTile].checkForNeighbors();
            let neighborsCopy = [...tileArray[figuresOnMap[i].onTile].neighbors];
            clearNodes();
            
            // Schaut ob die Heldin überhaupt angegriffen werden kann.
            let heroinIsViable = false;
            for (let j = 0; j < neighborsCopy.length; j++) {
                if (neighborsCopy[j].occupiedBy != ""){
                    console.log(j + "ist schon besetzt");
                    continue; // Platz ist schon besetzt => nächsten freien Patz anschauen
                }
                let path = calculatePath (enemy.onTile, neighborsCopy[j].name, true);
                if (neighborsCopy[j].name == enemy.onTile) {  // die Distanz ist 0 weil dieser Gegner schon auf dem richtigen Feld steht
                    console.log("Gegner steht schon daneben");
                    heroinIsViable = true;
                    break;
                } else if (path.second != 0) {  // eine Distanz wird zurückgegeben => Man kann auf das Feld laufen!
                    console.log("Gegner kann da hinlaufen");
                    heroinIsViable = true;
                    break;
                }
            }
            
            // Wenn die Heldin nicht angegriffen werden kann gehe zur nächsten
            if (heroinIsViable == false) {
                continue;
            }
            
            // Heldin wird mit 0 Punkten in das Ranking aufgenommen ob dieser Gegner sie angreifen möchte
            victimRanking.push(0);
            
            // Priorisiere Helden mit wenig Health wenn der gegner Verlett ist (Faktor 1)
            if (enemy.fullHealth > enemy.health) {
                if (figuresOnMap[i].health <= 4) {
                    console.log("Verletzt +2");
                    victimRanking[i] += 2;
                } else if (figuresOnMap[i].health <= 8) {
                    console.log("Verletzt +1");
                    victimRanking[i] += 1;
                }
            }
            
            // Priorisiere Helden die günstig stehen (Faktor 2)
            let distancesToThisHeroine = [];
            for (let j = 0; j < neighborsCopy.length; j++) {
                if (neighborsCopy[j].occupiedBy != "" && neighborsCopy[j].name != enemy.onTile){
                    continue;
                }
                let path = calculatePath(enemy.onTile, neighborsCopy[j].name, true);
                if (neighborsCopy[j].name == enemy.onTile) {  // die Distanz ist 0 weil dieser Gegner schon auf dem richtigen Feld steht
                    distancesToThisHeroine.push(path.second);
                } else if (path.second != 0) {  // eine Distanz wird zurückgegeben => Man kann auf das Feld laufen!
                    distancesToThisHeroine.push(path.second);
                }
            }
            let distanceToThisHeroine = Math.min(...distancesToThisHeroine);
            if (distanceToThisHeroine == 0) {
                console.log("Distanz +4");
                victimRanking[i] += 4;
            } else if (distanceToThisHeroine <= 2) {
                console.log("Distanz +3");
                victimRanking[i] += 3;
            } else if (distanceToThisHeroine <= 6) {
                console.log("Distanz +2");
                victimRanking[i] += 2;
            } else if (distanceToThisHeroine <= 10) {
                console.log("Distanz +1");
                victimRanking[i] += 1;
            }
            
            // Priorisiere Helden zu denen Line Of Sight besteht (Faktor 4)
            if (lineOfSight (enemy.onTile, figuresOnMap[i].onTile)) {
                console.log("Sichtbar +4");
                victimRanking[i] += 4;
            }
            
            // Priorisiert Helden die bereits mit einem Gegner kämpfen (Faktor 1)
            for (let j = 0; j < neighborsCopy.length; j++) {
                if (neighborsCopy[j].occupiedBy == "enemy" && neighborsCopy[j] != enemy.onTile) {
                    console.log("Flankiert +1");
                    victimRanking[i] += 1;
                    break;  // Bonus wird nur einmal vergeben.
                }
            }
            
            // Zufall wird in das Verhalten einbezogen (Faktor 1)
            victimRanking[i] += Math.floor(Math.random() * 1.99); // +0 oder +1
            
            // ersetzt das aktuelle Opfer durch ein potenziell besseres
            if (victimOfChoice == undefined || Math.max(...victimRanking) == victimRanking[i]) {
                victimOfChoice = figuresOnMap[i];
            }
        }
    }
    
    // Das Bewegungsziel der Wahl wird definiert
    if (victimOfChoice != undefined) {
        tileArray[victimOfChoice.onTile].checkForNeighbors();
        let neighborsCopy = [...tileArray[victimOfChoice.onTile].neighbors];
        clearNodes();
        
        // Geht alle 8 Plätze neben dem Opfer der Wahl durch
        for (let i = 0; i < neighborsCopy.length; i++) {
            
            // Sortiere Platz aus wenn er von jemand anderem besetzt ist
            if (neighborsCopy[i].occupiedBy != "" && neighborsCopy[i].name != enemy.onTile) {
                continue;
            }
            
            let path = calculatePath(enemy.onTile, neighborsCopy[i].name);
            
            // Sortiere Platz aus wenn es für diesen Gegner keinen Weg dorthin gibt
            if (path.first.length == 0 && neighborsCopy[i].name != enemy.onTile) {
                continue;
            }
            
            // Distanz zum möglichen Platz der Wahl wird als Basis-Auswahlkriterium genommen
            placeRanking.push(path.second);
            
            // ersetzt den aktuellen Wunschort durch einen potenziell besseren
            if (placeOfChoice == undefined || Math.min(...placeRanking) == placeRanking[i]) {
                placeOfChoice = neighborsCopy[i].name;
            }
        }
        
        // Bewegung wird festgelegt
        let finalPath = calculatePath(enemy.onTile, placeOfChoice);
        enemy.pathToTravel = [...finalPath.first];
        
    } else {
        console.log("implementiere Route wenn kein Held erreichbar ist");
    }
    
    // Der Entschluss was getan wird, wird gefasst
    tileArray[enemy.pathToTravel[enemy.pathToTravel.length-1]].checkForNeighbors();
    let neighborIndexes = [];
    for (let i = 0; i < tileArray[enemy.pathToTravel[enemy.pathToTravel.length-1]].neighbors.length; i++) {
        neighborIndexes.push(tileArray[enemy.pathToTravel[enemy.pathToTravel.length-1]].neighbors[i].name);
    }
    clearNodes();
    if (victimOfChoice != undefined && neighborIndexes.includes(victimOfChoice.onTile)) {
        actionStack.push("attack", victimOfChoice);
    } else if (neighborIndexes.includes(barb.onTile)) {
        actionStack.push("attack", barb);
    } else if (neighborIndexes.includes(rogue.onTile)) {
        actionStack.push("attack", rogue);
    } else if (neighborIndexes.includes(mage.onTile)) {
        actionStack.push("attack", mage);
    } else {
        actionStack.push("wait", null);
    }
    
    return actionStack;
}

function enemyDo (enemy, action, target) {
    switch(action) {
        case "attack":
            enemy.actionStack.length = 0;
            enemy.attack(target);
            console.log("attack");
            break;
        case "wait":
            enemy.actionStack.length = 0;
            console.log("wait");
            break;
        default:
            break;
    }
}