// JS Document

////////// Bewegt die Gegner in Kampfsituationen //////////////////////////////////////////////////////////

// Steuert nacheinander jeden alarmierten Gegner und beendet dann den gegnerischen Zug
function enemyTurn () {
    
    for (let i = 3; i < figuresOnMap.length; i++) {
        
        if (figuresOnMap[i] instanceof Enemy && figuresOnMap[i].alarmed == true && figuresOnMap[i].actionStack.length == 0 && figuresOnMap[i].state == 0) {
            activeChar = figuresOnMap[i];
            figuresOnMap[i].active = true;
            figuresOnMap[i].setFrame(1);
            figuresOnMap[i].state = 1;
            figuresOnMap[i].actionStack = enemyPlanMove();
            moveButton.state = 2;
            return;
        }
        
        if (figuresOnMap[i].actionStack.length > 0) {
            enemyDo(figuresOnMap[i], figuresOnMap[i].actionStack[0], figuresOnMap[i].actionStack[1]);
            figuresOnMap[i].active = false;
            figuresOnMap[i].setFrame(0);
            activeChar = null;
        }
    }
    
    for (let i = 3; i < figuresOnMap.length; i++) {
        figuresOnMap[i].state = 0;
    }
    
    // Wenn keine der Heldinnen mehr am Leben ist springt das Spiel zur Game-Over-Scene
    if (barb.health <= 0 && rogue.health <= 0 && mage.health <= 0) {
        game.scene.keys.sceneGame.cameras.main.fadeOut(1500, 12, 14, 17);
        game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
            game.scene.keys.sceneGame.scene.start('sceneGameOver');
        }, game.scene.keys.sceneGame);
    }
    
    // Beendet den Gegnerischen Zug und füllt Aktionen und Bewegung der Heldinnen wieder auf
    enemyTurnActive = false;
    replenishActions();
    
}

// Plant Zug für einen Gegner
function enemyPlanMove () {
    let victimOfChoice;
    let victimRanking = [];
    let placeOfChoice;
    let placeRanking = [];
    let actionStack = [];
    
    // Spezielle Aktionen für bestimmte Level
    if (level == 1) {
        if ( activeChar.name == "Pale Priest" && (activeChar.onTile == 703 || activeChar.onTile == 707 || activeChar.onTile == 778 || activeChar.onTile == 782 || activeChar.onTile == 830) && ritual.progress > 0) {
            actionStack.push("ritual", null);
            return actionStack;
        } else if (activeChar.name == "Ordrak" && eventReminder.e7 == true && activeChar.health < activeChar.fullHealth) {
            activeChar.health += 1;
        }
    }
    
    // das Opfer der Wahl wird definiert
    for (let i = 0; i < figuresOnMap.length; i++) {
        if (figuresOnMap[i] instanceof Figure && figuresOnMap[i].health > 0 && figuresOnMap[i].skills.stealth.active == false) {
            
            tileArray[figuresOnMap[i].onTile].checkForNeighbors();
            let neighborsCopy = [...tileArray[figuresOnMap[i].onTile].neighbors];
            clearNodes();
            
            let isAlreadyThere = false;
            let isAlreadyFlanked = false;
            let heroineIsViable = false;
            let distancesToThisHeroine = [];
            
            // Schaut ob die Heldin überhaupt angegriffen werden kann und sortiert unbrauchbare Felder aus.
            for (let j = 0; j < neighborsCopy.length; j++) {
                if (activeChar.onTile == neighborsCopy[j].name) {
                    // die Distanz ist 0 weil dieser Gegner schon auf dem richtigen Feld steht
                    console.log("Gegner steht schon daneben");
                    isAlreadyThere = true;
                    heroineIsViable = true;
                    neighborsCopy.splice(j, 1);
                    j--;
                    continue;
                } else if ( checkFor(neighborsCopy[j].occupiedBy, Enemy) ){
                    // Platz ist schon besetzt => nächsten freien Patz anschauen
                    console.log(j + "ist schon besetzt");
                    isAlreadyFlanked = true;
                    neighborsCopy.splice(j, 1);
                    j--;
                    continue;
                }
                
                let path = calculatePath(activeChar.onTile, neighborsCopy[j].name, true);
                if (path.second != 0) {
                    // eine Distanz wird zurückgegeben => Man kann auf das Feld laufen!
                    console.log("Gegner kann da hinlaufen");
                    heroineIsViable = true;
                    distancesToThisHeroine.push(path.second);
                }
            }
            
            // Wenn die Heldin nicht angegriffen werden kann gehe zur nächsten
            if (heroineIsViable == false) {
                continue;
            }
            
            // Heldin wird mit 0 Punkten in das Ranking aufgenommen ob dieser Gegner sie angreifen möchte
            victimRanking.push(0);
            
            // Priorisiere Helden mit wenig Health wenn der gegner Verletzt ist (Faktor 1)
            if (activeChar.fullHealth > activeChar.health) {
                if (figuresOnMap[i].health <= 4) {
                    console.log("Verletzt +2");
                    victimRanking[i] += 2;
                } else if (figuresOnMap[i].health <= 8) {
                    console.log("Verletzt +1");
                    victimRanking[i] += 1;
                }
            }
            
            // Priorisiere Helden die günstig stehen (Faktor 2)
            let distanceToThisHeroine = Math.min(...distancesToThisHeroine);
            if (isAlreadyThere) {
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
            if (lineOfSight (activeChar.onTile, figuresOnMap[i].onTile)) {
                console.log("Sichtbar +4");
                victimRanking[i] += 4;
            }
            
            // Priorisiert Helden die bereits mit einem Gegner kämpfen (Faktor 1)
            if (isAlreadyFlanked) {
                console.log("Flankiert +1");
                victimRanking[i] += 1;
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
        
        
        // Geht alle Plätze neben dem Opfer der Wahl durch
        for (let i = 0; i < neighborsCopy.length; i++) {
            
            // Sortiere Platz aus wenn er von jemand anderem besetzt ist
            if (checkFor(neighborsCopy[i].occupiedBy, Enemy) && activeChar.onTile != neighborsCopy[i].name) {
                continue;
            }
            
            let path = calculatePath(activeChar.onTile, neighborsCopy[i].name);
            
            // Sortiere Platz aus wenn es für diesen Gegner keinen Weg dorthin gibt
            if (path.first.length == 0 && neighborsCopy[i].name != activeChar.onTile) {
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
        let finalPath = calculatePath(activeChar.onTile, placeOfChoice);
        activeChar.pathToTravel = [...finalPath.first];
        console.log(finalPath.first);
        
    } else {
        let pathToCathedral1 = calculatePath(activeChar.onTile, 641);
        let pathToCathedral2 = calculatePath(activeChar.onTile, 541);
        let pathToCathedral3 = calculatePath(activeChar.onTile, 291);
        
        if (pathToCathedral1.second != 0 && activeChar.onTile != 641) {
        // Laufe in Kathedrale um sich dort zu sammeln
            activeChar.pathToTravel = [...pathToCathedral1.first];
        } else if (pathToCathedral2.second != 0 && door2.open == false) {
        // Gehe zu Türe in die Kathedrale
            activeChar.pathToTravel = [...pathToCathedral2.first];
        } else if (pathToCathedral3.second != 0 && door1.open == false) {
        // Gehe zu Türe in die Kathedrale
            activeChar.pathToTravel = [...pathToCathedral3.first];
        }
        
    }
    
    // Entschluss, was getan wird, wird erneut gefasst, nachdem die Bewegung vorbei ist
    let neighborIndexes = [];
    
    if (activeChar.pathToTravel.length > 0) {
        // Gegner hat sich bald bewegt, was kann er auf dem letzten Feld seiner Bewegung tun?
        tileArray[activeChar.pathToTravel[activeChar.pathToTravel.length-1]].checkForNeighbors(true);
        for (let i = 0; i < tileArray[activeChar.pathToTravel[activeChar.pathToTravel.length-1]].neighbors.length; i++) {
            neighborIndexes.push(tileArray[activeChar.pathToTravel[activeChar.pathToTravel.length-1]].neighbors[i].name);
        }
    } else {
        // Gegner wird sich nicht bewegen, was kann er auf seinem Feld tun?
        tileArray[activeChar.onTile].checkForNeighbors(true);
        for (let i = 0; i < tileArray[activeChar.onTile].neighbors.length; i++) {
            neighborIndexes.push(tileArray[activeChar.onTile].neighbors[i].name);
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
    } else if ((neighborIndexes.includes(542) || (neighborIndexes.includes(541)) && door2.open == false) {
        actionStack.push("open", null);
    } else if ((neighborIndexes.includes(292) || (neighborIndexes.includes(291)) && door1.open == false) {
        actionStack.push("open", null);
    } else {
        actionStack.push("wait", null);
    }
    
    return actionStack;
}

function enemyDo (activeChar, action, target) {
    switch(action) {
        case "attack":
            activeChar.actionStack.length = 0;
            activeChar.attack(target);
            console.log("attack");
            break;
        case "wait":
            activeChar.actionStack.length = 0;
            console.log("wait");
            break;
        case "ritual":
            activeChar.actionStack.length = 0;
            console.log("ritual");
            let attackroll = getRandomInt(activeChar.dieSize, activeChar.explodes);
            if (activeChar.specialAttack.roll.includes(attackroll)) {
                specialAttack(activeChar, activeChar.specialAttack.name[activeChar.specialAttack.roll.findIndex((element) => element == attackroll)]);
                ritual.incantate(2);
            } else {
                ritual.incantate(1);
            }
            break;
        case "open":
            activeChar.actionStack.length = 0;
            console.log("open");
            for (let i = 0; i < tileArray[activeChar.onTile].occupiedBy.length-1; i++) {
                if (typeof tileArray[activeChar.onTile].occupiedBy[i].useDoor !== "undefined") {
                    tileArray[activeChar.onTile].occupiedBy[i].useDoor();
                }
            }
            break;
        default:
            break;
    }
}