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
                if (neighborsCopy[j].occupiedBy == "figure" || neighborsCopy[j].occupiedBy == "enemy"){
                    console.log(j + "ist schon besetzt");
                    continue; // Platz ist schon besetzt => nächsten freien Patz anschauen
                }
                let path = calculatePath (enemy.onTile, neighborsCopy[j].name);
                if (neighborsCopy[j] == enemy.onTile) {  // die Distanz ist 0 weil dieser Gegner schon auf dem richtigen Feld steht
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
            
            // Priorisiere Helden die näher stehen (Faktor 2)
            let path = calculatePath(enemy.onTile, figuresOnMap[i].onTile);
            if (neighborsCopy.includes(enemy.onTile)) {
                console.log("Benachbart +4");
                victimRanking[i] += 4;
            } else if (path.second > 0 && path.second <= enemy.movementCounter) {
                console.log("Benachbart +2");
                victimRanking[i] += 2;
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
            victimRanking[i] += Math.floor(Math.random() * 2.99); // +0, +1 oder +2
            
            // ersetzt das aktuelle Opfer durch ein potenziell besseres
            if (victimOfChoice == undefined || Math.max(...victimRanking) == victimRanking[i]) {
                victimOfChoice = figuresOnMap[i];
            }
        }
    }
    
    // Das Bewegungsziel der Wahl wird definiert
    if (victimOfChoice != undefined) {
        tileArray[victimOfChoice.onTile].checkForNeighbors();
        let neighborsCopy2 = [...tileArray[victimOfChoice.onTile].neighbors];
        clearNodes();
        
        // Geht alle 8 Plätze neben dem Opfer der Wahl durch
        for (let i = 0; i < neighborsCopy2.length; i++) {
            
            // Sortiere Platz aus wenn er von jemand anderem besetzt ist
            if ((neighborsCopy2[i].occupiedBy == "figure" || neighborsCopy2[i].occupiedBy == "enemy") && neighborsCopy2[i].name != enemy.onTile) {
                continue;
            }
            
            let path = calculatePath(enemy.onTile, neighborsCopy2[i].name);
            
            // Sortiere Platz aus wenn es für diesen Gegner keinen Weg dorthin gibt
            if (path.first.length == 0 && neighborsCopy2[i].name != enemy.onTile) {
                continue;
            }
            
            // Distanz zum möglichen Platz der Wahl wird als Basis-Auswahlkriterium genommen
            placeRanking.push(path.second);
            
            // ersetzt den aktuellen Wunschort durch einen potenziell besseren
            if (placeOfChoice == undefined || Math.min(...placeRanking) == placeRanking[i]) {
                placeOfChoice = neighborsCopy2[i].name;
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
    if (victimOfChoice != undefined && tileArray[enemy.pathToTravel[enemy.pathToTravel.length-1]].neighbors.includes(victimOfChoice.onTile)) {
        actionStack.push("attack", victimOfChoice);
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
            break;
        case "wait":
            enemy.actionStack.length = 0;
            break;
        default:
            break;
    }
}