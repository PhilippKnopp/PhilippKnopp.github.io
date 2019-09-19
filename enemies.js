class Enemy extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        this.onTile;
        this.active = false;
        this.dieSize;
        this.explodes = false;
        this.health = this.dieSize;
        this.movement = 6;
        this.moved = 0;
        this.pathToTravel = [];
        this.def = this.dieSize/2;
        this.description = 0;
        
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
            activeChar.attack(this);
        }
        console.log(this.health);
    }
    
    hideFace () {
        
    }
    
    showFace () {
        
    }
}