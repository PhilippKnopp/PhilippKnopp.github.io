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
        console.log(this.health);
        if (attackButton.mode == "planning cc") {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            tileArray[activeChar.onTile].checkForNeighbors();
            if (tileArray[activeChar.onTile].neighbors.includes(this.ontile)) {
                activeChar.attack(this);
            } else {
                showText ("", activeChar, textL1[20]);
                returnCursorToNormal();
                activeChar.activateFigure();
            }
            tileArray[activeChar.onTile].neighbors.length = 0;
            if (this.health <= 0) {
                tileArray[this.onTile].occupiedBy = "";
                this.setAlpha(0);
                figuresOnMap.splice(figuresOnMap.findIndex(findDeadChar),1);
            }
        } else if (attackButton.mode == "planning rc") {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            activeChar.attack(this);
        }
        console.log(this.health);
    }
    
    hideFace () {
        if (figuresOnMap.findIndex(findActiveChar) == -1) {
            hideActions();
        }
    }
    
    showFace () {
        if (figuresOnMap.findIndex(findActiveChar) == -1) {
            faceButton.x = this.x-60;
            faceButton.y = this.y;
            faceButton.setAlpha(1);
            
            switch(this) {
                case paleAcolyte:
                    faceButton.setFrame(3);
                    break;
                default:
                    break;
            }
        }
    }
}