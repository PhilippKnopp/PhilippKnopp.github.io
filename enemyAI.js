// JS Document

////////// Bewegt die Gegner in Kampfsituationen //////////////////////////////////////////////////////////


// Geht alarmierte Gegner durch und startet die Zugplanung für diese.
// Danach wird der geplante Zug für den Gegner durchgeführt und es wird mit dem nächsten Gegner weitergemacht.
function enemyTurn() {
    
    for (var i = 1; i < figuresOnMap.length; i++) {
        if (figuresOnMap[i].color == "#878787" && figuresOnMap[i].alarmed == true) {
            figuresOnMap[i].active = true;
            let actionStack = enemyPlanMove(figuresOnMap[i]);
            for (let j = 0; j < actionStack.length; j += 2) {
                enemyDo(figuresOnMap[i], actionStack[j], actionStack[j+1]);
            }
            figuresOnMap[i].active = false;
            console.log("figuresOnMap "+figuresOnMap);
        }
    }
    
}


function enemyPlanMove (enemy) {
    let victimOfChoice;
    let victimRanking = [];
    let placeOfChoice = 207;
    let placeRanking = 207;
    let actionStack = [];
    
    // das Opfer der Wahl wird definiert
    for (var i = 0; i < figuresOnMap.length; i++) {
        if (figuresOnMap[i].color != "#878787" && figuresOnMap[i].health > 0) {
            
            tileArray[figuresOnMap[i].onTile].checkForNeighbors();
            victimRanking.push(0);
            
            // Priorisiere Helden mit wenig Health (Faktor 1)
            if (figuresOnMap[i].health <= 4) {
                victimRanking[i] += 2;
            } else if (figuresOnMap[i].health <= 8) {
                victimRanking[i] += 1;
            }
            
            // Priorisiere Helden die näher stehen (Faktor 1)
            let path = calculatePath(enemy.onTile, figuresOnMap[i].onTile);
            if (tileArray[figuresOnMap[i].onTile].neighbors.includes(enemy.onTile)) {
                victimRanking[i] += 2;
            } else if (path.second > 0 && path.second <= enemy.movementCounter) {
                victimRanking[i] += 1;
            }
            
            // ersetzt das aktuelle Opfer durch ein potenziell besseres
            if (victimOfChoice == undefined || Math.max(...victimRanking) == victimRanking[i]) {
                victimOfChoice = figuresOnMap[i];
            }
            clearNodes();
        }
    }
    
    //actionStack.push("move", placeOfChoice);
    actionStack.push("attack", victimOfChoice);
    return actionStack;
}


function enemyDo (enemy, action, target) {
    switch(action) {
        case "attack":
            enemy.attack(target);
            console.log("attack");
            break;
        default:
            break;
    }
}