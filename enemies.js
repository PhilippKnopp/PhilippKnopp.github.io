class Enemy extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        this.onTile;
        this.active = false;
        this.dieSize;
        this.explodes = false;
        this.specialAttack = {roll: [], name: []};
        this.fullHealth;
        this.health;
        this.movement = 6;
        this.movementCounter = 6;
        this.actionStack =[];
        this.pathToTravel = [];
        this.def;
        this.alarmed = false;
        this.description = 0;
        this.color = "#878787";
        this.loot;
        this.skills = {stealth: { trained: false, active: false },
                       swim:    false
                      };
        this.stepOnThisObject = function () {};
        
        this.setInteractive();
        this.on("pointerup", this.activateFigure, this);
        this.on("pointerout", this.hideFace, this);
        this.on("pointerover", this.showFace, this);
        
        this.setOnMap = function () {
            if (this.name != "Ordrak" || eventReminder.ritualState == "succesful") {
                tileArray[this.onTile].occupiedBy.push(this);
                this.setAlpha(1);
                this.x = tileArray[this.onTile].x;
                this.y = tileArray[this.onTile].y;
            }
        };
        
        this.enterTile = function () {
            // findet die aktuelle Position dieser Figur auf dieser Tile (Z-Wert) und löscht sie aus dieser Ebene
            tileArray[this.onTile].occupiedBy.splice(tileArray[this.onTile].occupiedBy.indexOf(this), 1);
            
            this.onTile = this.pathToTravel.shift(); // onTile wird zu em ersten Pfadschritt und dieser wird dann entfernt
            tileArray[this.onTile].occupiedBy.push(this);
            enemyVisibility();
            checkFightmode();
            /*if (typeof tileArray[this.onTile].state === 'string') {
                eventDispatch(this, tileArray[this.onTile].state);
            };*/
        };
        
        this.moveNow = function () {
            if (this.pathToTravel.length > 0) {
                movementMarker.x = this.x;
                movementMarker.y = this.y;
                movementTween.data[0].start = this.x;
                movementTween.data[1].start = this.y;
                movementTween.restart();
            } else {
                moveButton.state = 0;
                enemyTurn();
            }
        }
        
        this.attack = function (heroine) {
            
            showAttackFX(this, heroine);
            
            let attackroll = getRandomInt(this.dieSize, this.explodes);
            let damageroll = Math.min(attackroll, getRandomInt(this.dieSize, this.explodes));
            
            if (this.specialAttack.roll.includes(attackroll)) {
                if (attackroll == 7) {
                    showText(textL1[49], barb, textL1[50]);
                }
                specialAttack(this, this.specialAttack.name[this.specialAttack.roll.findIndex((element) => element == attackroll)]);
            } else if (attackroll >= heroine.def) {
                heroine.health -= damageroll;
            }
            
            heroine.checkHealth();
        }
        
        this.checkHealth = function () {
            if (this.health <= 0) {
                this.setAlpha(0);
                tileArray[this.onTile].occupiedBy.splice(tileArray[this.onTile].occupiedBy.indexOf(this), 1);
                figuresOnMap.splice(figuresOnMap.findIndex(findDeadChar),1);
                addXP(this.loot);
                if (this.name == "Ordrak") {
                    circle1Img.setAlpha(0);
                    swirl1.setAlpha(0);
                    swirl2.setAlpha(0);
                } else if (this.onTile == 703 || this.onTile == 707 || this.onTile == 778 || this.onTile == 782 || this.onTile == 830) {
                    ritual(0, true);
                }
                if (figuresOnMap.length == 3) {
                    event8.endLevel();
                }
                checkFightmode();
            }
        }
        
        this.modifyWalkability = function (baseWalkability, lookForTargets) {
            for (let i = 0; i < baseWalkability.length; i++) {
                if (baseWalkability[i] != 0 && activeChar instanceof Figure && lookForTargets == false) {
                    baseWalkability[i] = 0;
                } else if (baseWalkability[i] != 0) {
                    baseWalkability[i] += 1;
                }
            }
            return baseWalkability;
        }
        
    }
    
    activateFigure () {
        if (attackButton.state == 1) {
            tileArray[activeChar.onTile].checkForNeighbors(true);
            if (tileArray[activeChar.onTile].neighbors.includes(tileArray[this.onTile])) {
                clearNodes();
                activeChar.attack(this);
            } else {
                clearNodes();
                showText ("", activeChar, textL1[20]);
                returnCursorToNormal();
                showActions(activeChar);
            }
        } else if (attackButton.state == 2) {
            if (lineOfSight (activeChar.onTile, this.onTile)) { // Line of sight to enemy: Ranged Attack
                activeChar.rangedAttack(this);
            } else { // No Line of sight to enemy: I Can Not See That
                showText("", activeChar, textL1[1]);
            }
        } else if (searchButton.state == 1) {
            if (lineOfSight (activeChar.onTile, this.onTile)) {
                showText(textL1Chars[this.description]);
            } else {
                showText("", activeChar, textL1[1]);
            }
            returnCursorToNormal();
            showActions(activeChar);
        } else if (moveButton.state == 1) {
            moveButton.state = 0;
            returnCursorToNormal();
            showText ("", activeChar, textL1[16]);
            showActions(activeChar);
        }
    }
    
    hideFace () {
        if (activeChar == null || searchButton.state == 1 || attackButton.state == 2 || attackButton.state == 1 || moveButton.state == 1) {
            faceButton.setAlpha(0);
            enemyHealthBase.setAlpha(0);
            enemyHealthBar.clear();
        }
    }
    
    showFace () {
        if (activeChar == null || searchButton.state == 1 || attackButton.state == 2 || attackButton.state == 1 || moveButton.state == 1) {
            faceButton.x = this.x-60;
            faceButton.y = this.y;
            faceButton.setAlpha(1);
            
            // Planning Ranged Attack
            if (attackButton.state == 2) {
                enemyHealthBase.x = faceButton.x-2;
                enemyHealthBase.y = faceButton.y;
                enemyHealthBase.setAlpha(1);
                enemyHealthBar.beginPath();
                enemyHealthBar.lineStyle(5, 0xababab, 1);
                enemyHealthBar.arc(faceButton.x-2, faceButton.y, 48, Phaser.Math.DegToRad(270-((75/this.fullHealth)*this.health)), Phaser.Math.DegToRad(270+((75/this.fullHealth)*this.health)));
                enemyHealthBar.strokePath();
                enemyHealthBar.closePath();
            }
            
            switch(this.name) {
                case "Cave Crawler":
                    faceButton.setFrame(3);
                    break;
                case "Pale Acolyte":
                    faceButton.setFrame(4);
                    break;
                case "Pale Priest":
                    faceButton.setFrame(5);
                    break;
                case "Ordrak":
                    faceButton.setFrame(6);
                    break;
                default:
                    break;
            }
        }
    }
}

////////////// Gegner werden auf der Karte platziert   ////////////////////////////////////////////////////////////////////////

function createEnemies (_this) {
    
    // Cave Crawler
    for (let k = 0; k < caveCrawlerStartingPosition[level].length; k++ ) {
        var caveCrawler = new Enemy ({scene:_this, x:20, y:20}, 'e1Sprite');
        caveCrawler.onTile = caveCrawlerStartingPosition[level][k];
        caveCrawler.dieSize = 4;
        caveCrawler.fullHealth = 2;
        caveCrawler.health = 2;
        caveCrawler.def = 2;
        caveCrawler.name = "Cave Crawler";
        caveCrawler.description = 3;
        caveCrawler.loot = 1;
        figuresOnMap.push(caveCrawler);
    }
    
    // Pale Acolyte
    for (let j = 0; j < paleAcolyteStartingPosition[level].length; j++ ) {
        var paleAcolyte = new Enemy ({scene:_this, x:20, y:20}, 'e2Sprite');
        paleAcolyte.onTile = paleAcolyteStartingPosition[level][j];
        paleAcolyte.dieSize = 6;
        paleAcolyte.fullHealth = 6;
        paleAcolyte.health = 6;
        paleAcolyte.def = 3;
        paleAcolyte.name = "Pale Acolyte";
        paleAcolyte.description = 4;
        paleAcolyte.loot = 3;
        figuresOnMap.push(paleAcolyte);
    }
    
    // Pale Priest
    for (let i = 0; i < palePriestStartingPosition[level].length; i++ ) {
        var palePriest = new Enemy ({scene:_this, x:20, y:20}, 'e3Sprite');
        palePriest.onTile = palePriestStartingPosition[level][i];
        palePriest.dieSize = 8;
        palePriest.specialAttack.roll.push(8);
        palePriest.specialAttack.name.push("unholy energy");
        palePriest.fullHealth = 8;
        palePriest.health = 8;
        palePriest.def = 4;
        palePriest.name = "Pale Priest";
        palePriest.description = 5;
        palePriest.loot = 4;
        figuresOnMap.push(palePriest);
    }
    
    // Schatten Abwehr Effekt für Ordrak
    swirl1 = _this.add.sprite(tileArray[755].x, tileArray[755].y, 'swirSprite').setAlpha(0.1);
    swirl2 = _this.add.sprite(tileArray[755].x, tileArray[755].y, 'swirSprite').setAlpha(0.1).setFrame(1);
    // Ordrak
    for (let l = 0; l < ordrakStartingPosition[level].length; l++) {
        var ordrak = new Enemy ({scene:_this, x:20, y:20}, 'e4Sprite');
        ordrak.onTile = ordrakStartingPosition[level][l];
        ordrak.dieSize = 8;
        ordrak.specialAttack.roll.push(8);
        ordrak.specialAttack.name.push("darkness");
        ordrak.fullHealth = 12;
        ordrak.health = 12;
        ordrak.def = 4;
        ordrak.name = "Ordrak";
        ordrak.description = 6;
        ordrak.loot = 20;
        figuresOnMap.push(ordrak);
    }

}

////////////// Gegner spezial Attacken   ////////////////////////////////////////////////////////////////////////

function specialAttack(enemy, attackName) {
    switch(attackName) {
        case "darkness":
            swirl1.setAlpha(swirl1.alpha + 0.2);
            swirl2.setAlpha(swirl1.alpha + 0.2);
            enemy.def += 1;
            break;
        case "unholy energy":
            for (let i = 0; i < figuresOnMap.length; i++) {
                if (figuresOnMap[i] instanceof Figure && lineOfSight(enemy.onTile, figuresOnMap[i].onTile)) {
                    figuresOnMap[i].health -= 1;
                    figuresOnMap[i].checkHealth();
                } else if (figuresOnMap[i] instanceof Enemy && lineOfSight(enemy.onTile, figuresOnMap[i].onTile) && figuresOnMap[i].health < figuresOnMap[i].fullHealth) {
                    figuresOnMap[i].health += 1;
                }
            }
            break;
        default:
            break;
    }
}