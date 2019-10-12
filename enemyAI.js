// JS Document
function enemyTurn() {
    
    for (let i = 1; i < figuresOnMap.length; i++) {
        if (figuresOnMap[i].color = "#878787" && figuresOnMap[i].alarmed == true) {
            let actionStack = enemyPlanMove(figuresOnMap[i]);
            for (let j = 0; j < actionStack.length; j += 2) {
                enemyDo(figuresOnMap[i], actionStack[j], actionStack[j+1]);
            }
        }
    }
    
    replenishActions();
}

function enemyPlanMove (enemy) {
    let victimOfChoice = barb;
    let placeOfChoice = 207;
    let actionStack = [];
    
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