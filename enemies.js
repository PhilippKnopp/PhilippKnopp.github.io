class Enemy extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        this.onTile;
        this.active = false;
        this.dieSize;
        this.explodes = false;
        this.fullHealth;
        this.health;
        this.movement = 6;
        this.moved = 0;
        this.pathToTravel = [];
        this.def;
        this.alarmed = false;
        this.description = 0;
        this.color = "#878787";
        this.loot;
        
        this.setInteractive();
        this.on("pointerup", this.activateFigure, this);
        this.on("pointerout", this.hideFace, this);
        this.on("pointerover", this.showFace, this);
        
        this.setOnMap = function () {
            tileArray[this.onTile].occupiedBy = "enemy";
            this.setAlpha(1);
            this.x = tileArray[this.onTile].x;
            this.y = tileArray[this.onTile].y;
        };
        
    }
    
    activateFigure () {
        if (attackButton.mode == "planning cc") {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            tileArray[activeChar.onTile].checkForNeighbors();
            if (tileArray[activeChar.onTile].neighbors.includes(tileArray[this.onTile])) {
                activeChar.attack(this);
            } else {
                showText ("", activeChar, textL1[20]);
                returnCursorToNormal();
                showActions(activeChar);
            }
            tileArray[activeChar.onTile].neighbors.length = 0;
        } else if (attackButton.mode == "planning rc") {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            activeChar.attack(this);
        } else if (searchButton.mode == "planning") {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            if (lineOfSight (activeChar, this.onTile) == true) {
                showText(textL1Chars[this.description]);
            } else {
                showText("", activeChar, textL1[1]);
            }
            returnCursorToNormal();
            showActions(activeChar);
        } else if (moveButton.mode == "planning") {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            moveButton.mode = "none";
            returnCursorToNormal();
            if (this != activeChar) {
                showText ("", activeChar, textL1[16]);
            }
            showActions(activeChar);
        }
    }
    
    hideFace () {
        if (figuresOnMap.findIndex(findActiveChar) == -1 || searchButton.mode == "planning" || attackButton.mode == "planning rc" || attackButton.mode == "planning cc" || moveButton.mode == "planning") {
            faceButton.setAlpha(0);
            enemyHealthBar.setAlpha(0);
            enemyHealthBase.setAlpha(0);
            enemyHealthBarMask.clear();
        }
    }
    
    showFace () {
        if (figuresOnMap.findIndex(findActiveChar) == -1 || searchButton.mode == "planning" || attackButton.mode == "planning rc" || attackButton.mode == "planning cc" || moveButton.mode == "planning") {
            faceButton.x = this.x-60;
            faceButton.y = this.y;
            faceButton.setAlpha(1);
            
            //enemyHealthBar.x = faceButton.x-1;
            //enemyHealthBar.y = faceButton.y;
            //enemyHealthBar.setAlpha(1);
            enemyHealthBase.x = faceButton.x-1;
            enemyHealthBase.y = faceButton.y;
            enemyHealthBase.setAlpha(1);
            enemyHealthBarMask.beginPath();
            enemyHealthBarMask.lineStyle(8, 0x878787, 1);
            enemyHealthBarMask.arc(faceButton.x-1, faceButton.y, 47, Phaser.Math.DegToRad(270-((75/this.fullHealth)*this.health)), Phaser.Math.DegToRad(270+((75/this.fullHealth)*this.health)));
            enemyHealthBarMask.strokePath();
            enemyHealthBarMask.closePath();
            
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

////////////// Gegner werden auf der Karte platziert   //////////////////////////////////////////////////////////////////////////////////////////

function createEnemies (_this) {
    
    // Cave Crawler
    for (var k = 0; k < caveCrawlerStartingPosition[level].length; k++ ) {
        var caveCrawler = new Enemy ({scene:_this, x:20, y:20}, 'e1Sprite');
        caveCrawler.onTile = caveCrawlerStartingPosition[level][k];
        caveCrawler.pathToTravel.push(caveCrawlerStartingPosition[level][k]);
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
    for (var j = 0; j < paleAcolyteStartingPosition[level].length; j++ ) {
        var paleAcolyte = new Enemy ({scene:_this, x:20, y:20}, 'e2Sprite');
        paleAcolyte.onTile = paleAcolyteStartingPosition[level][j];
        paleAcolyte.pathToTravel.push(paleAcolyteStartingPosition[level][j]);
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
    for (var i = 0; i < palePriestStartingPosition[level].length; i++ ) {
        var palePriest = new Enemy ({scene:_this, x:20, y:20}, 'e3Sprite');
        palePriest.onTile = palePriestStartingPosition[level][i];
        palePriest.pathToTravel.push(palePriestStartingPosition[level][i]);
        palePriest.dieSize = 8;
        palePriest.fullHealth = 8;
        palePriest.health = 8;
        palePriest.def = 4;
        palePriest.name = "Pale Priest";
        palePriest.description = 5;
        palePriest.loot = 4;
        figuresOnMap.push(palePriest);
    }
    
    // Schatten Abwehr Effekt für Ordrak
    swirl1 = _this.add.sprite(230, 813, 'swirSprite').setAlpha(0.2);
    swirl2 = _this.add.sprite(230, 813, 'swirSprite').setAlpha(0.2).setFrame(1);
    // Ordrak
    for (var l = 0; l < ordrakStartingPosition[level].length; l++ ) {
        var ordrak = new Enemy ({scene:_this, x:20, y:20}, 'e4Sprite');
        ordrak.onTile = ordrakStartingPosition[level][l];
        ordrak.pathToTravel.push(ordrakStartingPosition[level][l]);
        ordrak.dieSize = 8;
        ordrak.fullHealth = 12;
        ordrak.health = 12;
        ordrak.def = 4;
        ordrak.name = "Ordrak";
        ordrak.description = 6;
        ordrak.loot = 20;
        figuresOnMap.push(ordrak);
    }

}
