class Figure extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        
        this.onTile;
        this.active = false;
        
        this.setInteractive();
        this.on("pointerup", this.activateFigure, this);
        
        this.setOnMap = function () {
            tileArray[this.onTile].occupiedBy = "figure";
            tileArray[this.onTile].updateState();
            this.setAlpha(1);
        };
        this.mapPosition = function (tileX, tileY) {
            this.x = tileX;
            this.y = tileY;
        };
        
        this.movement = 6;
        this.armor = 4;
        this.dieSize;
    }
    
    activateFigure() {
        for (var i = 0; i < figuresOnMap.length; i++) {
            figuresOnMap[i].active = false;
            figuresOnMap[i].setFrame(0);
        }
        this.active = true;
        this.setFrame(1);
    }
    
}