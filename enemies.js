class Enemy extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        this.onTile;
        this.active = false;
        this.dieSize;
        this.explodes = false;
        this.health;
        this.movement = 6;
        this.moved = 0;
        this.pathToTravel = [];
        this.def;
        this.alarmed = false;
        this.description = 0;
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
        }
    }
    
    showFace () {
        if (figuresOnMap.findIndex(findActiveChar) == -1 || searchButton.mode == "planning" || attackButton.mode == "planning rc" || attackButton.mode == "planning cc" || moveButton.mode == "planning") {
            faceButton.x = this.x-60;
            faceButton.y = this.y;
            faceButton.setAlpha(1);
            
            switch(this.name) {
                case "Pale Acolyte":
                    faceButton.setFrame(3);
                    break;
                default:
                    break;
            }
        }
    }
}