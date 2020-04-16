// JS Document

////////// Bewegt die Gegner in Kampfsituationen //////////////////////////////////////////////////////////

function enemyTurn() {
    
    for (let i = 1; i < figuresOnMap.length; i++) {
        if (figuresOnMap[i].color == "#878787" && figuresOnMap[i].alarmed == true) {
            let actionStack = enemyPlanMove(figuresOnMap[i]);
            for (let j = 0; j < actionStack.length; j += 2) {
                enemyDo(figuresOnMap[i], actionStack[j], actionStack[j+1]);
            }
        }
    }
    
}


function enemyPlanMove (enemy) {
    let victimOfChoice;
    let victimRanking = [];
    let placeOfChoice = 207;
    let placeRanking = 207;
    let actionStack = [];
    
    for (let i = 1; i < figuresOnMap.length; i++) {
        if (figuresOnMap[i].colour != "#878787") {
            
            tileArray[figuresOnMap[i].onTile].checkForNeighbors();
            victimRanking.push(0);
            
            
            // Priorisiere Helden mit wenig Health (Faktor 1).
            if (figuresOnMap[i].health <= 4) {
                victimRanking[i] += 2;
            } else if (figuresOnMap[i].health <= 8) {
                victimRanking[i] += 1;
            }
            
            if (victimOfChoice == undefined || Math.max(...victimRanking) == victimRanking[i]) {
                victimOfChoice = figuresOnMap[i];
            }
        }
    }
    clearNodes();
    
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