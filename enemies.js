class Enemies extends Phaser.GameObjects.Sprite {
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
    }
    
    activateFigure () {
        
    }
    
    hideFace () {
        
    }
    
    showFace () {
        
    }
}