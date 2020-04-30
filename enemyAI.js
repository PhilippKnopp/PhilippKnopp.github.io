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
            
            // Schaut ob die Heldin überhaupt angegriffen werden kann.
            tileArray[figuresOnMap[i].onTile].checkForNeighbors();
            let heroinIsViable = false;
            for (let j = 0; j < tileArray[figuresOnMap[i].onTile].neighbors.length; j++) {
                if (tileArray[figuresOnMap[i].onTile].neighbors[j].occupiedBy == "figure" || tileArray[figuresOnMap[i].onTile].neighbors[j].occupiedBy == "enemy"){
                    console.log(j + "ist schon besetzt");
                    continue; // Platz ist schon besetzt => nächsten freien Patz anschauen
                }
                let path = calculatePath (enemy.onTile, tileArray[figuresOnMap[i].onTile].neighbors[j]);
                if (tileArray[figuresOnMap[i].onTile].neighbors[j] == enemy.onTile) {  // die Distanz ist 0 weil dieser Gegner schon auf dem richtigen Feld steht
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
                clearNodes();
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
            if (tileArray[figuresOnMap[i].onTile].neighbors.includes(enemy.onTile)) {
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
            for (let j = 0; j < tileArray[figuresOnMap[i].onTile].neighbors.length; j++) {
                if (tileArray[figuresOnMap[i].onTile].neighbors[j].occupiedBy == "enemy" && tileArray[figuresOnMap[i].onTile].neighbors[j] != enemy.onTile) {
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
            clearNodes();
        }
    }
    
    console.log(victimRanking);
    console.log(victimOfChoice.name);
    if (victimOfChoice != undefined) {
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
            break;
        default:
            break;
    }
}