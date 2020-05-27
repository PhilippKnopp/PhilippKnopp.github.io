// JS Document

////////// Bewegt die Gegner in Kampfsituationen //////////////////////////////////////////////////////////

// Steuert nacheinander jeden alarmierten Gegner und beendet den Gegnerischen Zug
function enemyTurn () {
    
    for (let i = 3; i < figuresOnMap.length; i++) {
        
        if (figuresOnMap[i] instanceof Enemy && figuresOnMap[i].alarmed == true && figuresOnMap[i].actionStack.length == 0 && figuresOnMap[i].state == 0) {
            figuresOnMap[i].active = true;
            figuresOnMap[i].setFrame(1);
            figuresOnMap[i].state = 1;
            activeChar = figuresOnMap[i];
            figuresOnMap[i].actionStack = enemyPlanMove(figuresOnMap[i]);
            moveButton.state = 2;
            return;
        }
        
        if (figuresOnMap[i].actionStack.length > 0) {
            enemyDo(figuresOnMap[i], figuresOnMap[i].actionStack[0], figuresOnMap[i].actionStack[1]);
            figuresOnMap[i].active = false;
            figuresOnMap[i].setFrame(0);
            activeChar = null;
            //return;
        }
    }
    
    for (let i = 3; i < figuresOnMap.length; i++) {
        figuresOnMap[i].state = 0;
    }
    
    // Beendet den Gegnerischen Zug und füllt Aktionen und Bewegung der Heldinnen wieder auf
    replenishActions();
    enemyTurnActive = false;
    
    // Wenn keine der Heldinnen mehr am Leben ist springt das Spiel zur Game-Over-Scene
    if (barb.health <= 0 && rogue.health <= 0 && mage.health <= 0) {
        game.scene.keys.sceneGame.scene.start('sceneGameOver');
    }
    
}

// Plant Zug für einen Gegner
function enemyPlanMove (enemy) {
    let victimOfChoice;
    let victimRanking = [];
    let placeOfChoice;
    let placeRanking = [];
    let actionStack = [];
    
    // Spezielle Aktionen für bestimmte Level
    if (level == 1) {
        if ( enemy.name == "Pale Priest" && (enemy.onTile == 703 || enemy.onTile == 707 || enemy.onTile == 778 || enemy.onTile == 782 || enemy.onTile == 830) && eventReminder.ritualProgress > 0) {
            actionStack.push("ritual", null);
            return actionStack;
        } else if (enemy.name == "Ordrak" && eventReminder.e7 == true && enemy.health < enemy.fullHealth) {
            enemy.health += 1;
        }
    }
    
    // das Opfer der Wahl wird definiert
    for (var i = 0; i < figuresOnMap.length; i++) {
        if (figuresOnMap[i] instanceof Figure && figuresOnMap[i].health > 0 && figuresOnMap[i].skills.stealth.active == false) {
            
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
            if (victimOfChoice == undefined || Math.max(...victimRanking) == victimRanking[victimRanking.length-1]) {
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
            if (placeOfChoice == undefined || Math.min(...placeRanking) == placeRanking[placeRanking.length-1]) {
                placeOfChoice = neighborsCopy[i].name;
            }
        }
        
        // Bewegung wird festgelegt
        let finalPath = calculatePath(enemy.onTile, placeOfChoice);
        enemy.pathToTravel = [...finalPath.first];
        console.log(finalPath.first);
        
    } else {
        console.log("implementiere Route wenn kein Held erreichbar ist");
    }
    
    // Der Entschluss was getan wird, wird erneut gefasst, nachdem die Bewegung vorbei ist
    let neighborIndexes = [];
    if (enemy.pathToTravel.length > 0) {    // Gegner hat sich bewegt, was kann er auf dem letzten Feld seiner Bewegung tun?
        tileArray[enemy.pathToTravel[enemy.pathToTravel.length-1]].checkForNeighbors();
        for (let i = 0; i < tileArray[enemy.pathToTravel[enemy.pathToTravel.length-1]].neighbors.length; i++) {
            neighborIndexes.push(tileArray[enemy.pathToTravel[enemy.pathToTravel.length-1]].neighbors[i].name);
        }
    } else {    // Gegner hat sich nicht bewegt, was kann er auf seinem Feld tun?
        tileArray[enemy.onTile].checkForNeighbors();
        for (let i = 0; i < tileArray[enemy.onTile].neighbors.length; i++) {
            neighborIndexes.push(tileArray[enemy.onTile].neighbors[i].name);
        }
    }
    clearNodes();
    if (victimOfChoice != undefined && neighborIndexes.includes(victimOfChoice.onTile)) {
        actionStack.push("attack", victimOfChoice);
    } else if (neighborIndexes.includes(barb.onTile) && barb.health > 0) {
        actionStack.push("attack", barb);
    } else if (neighborIndexes.includes(rogue.onTile) && rogue.health > 0) {
        rogue.checkStealth();
        if (rogue.skills.stealth.active == false) {
            actionStack.push("attack", rogue);
        } else if (neighborIndexes.includes(mage.onTile) && mage.health > 0) {
            actionStack.push("attack", mage);
        } else {
            actionStack.push("wait", null);
        }
    } else if (neighborIndexes.includes(mage.onTile) && mage.health > 0) {
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
        case "ritual":
            enemy.actionStack.length = 0;
            console.log("ritual");
            let attackroll = getRandomInt(enemy.dieSize, enemy.explodes);
            if (enemy.specialAttack.roll.includes(attackroll)) {
                specialAttack(enemy, enemy.specialAttack.name[enemy.specialAttack.roll.findIndex((element) => element == attackroll)]);
                ritual(2);
            } else {
                ritual(1);
            }
            break;
        default:
            break;
    }
}