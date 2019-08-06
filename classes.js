class Figure extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        
        this.onTile;
        this.active = false;
        
        this.setInteractive();
        this.on("pointerup", this.activateFigure, this);
        /*this.on("pointerover", this.showActions, this);
        if (this.active == false) {
            this.on("pointerout", this.hideActions, this);
        }*/
        
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
        
        faceButton.setAlpha(0);
        doorButton.setAlpha(0);
        moveButton.setAlpha(0);
        attackButton.setAlpha(0);
        searchButton.setAlpha(0);
        
        let buttonXpos = 60;
        
        faceButton.x = this.x-70;
        faceButton.y = this.y;
        faceButton.setAlpha(1);
        
        moveButton.x = this.x+buttonXpos;
        moveButton.y = this.y;
        moveButton.setAlpha(1);
        buttonXpos += 85;
        
        attackButton.x = this.x+buttonXpos;
        attackButton.y = this.y;
        attackButton.setAlpha(1);
        buttonXpos += 85;
        
        searchButton.x = this.x+buttonXpos;
        searchButton.y = this.y;
        searchButton.setAlpha(1);
        buttonXpos += 85;
        
        doorButton.x = this.x+buttonXpos;
        doorButton.y = this.y;
        doorButton.setAlpha(1);
        buttonXpos += 85;
        
        switch(this) {
            case mage:
                faceButton.setFrame(0);
                doorButton.setFrame(0);
                moveButton.setFrame(0);
                attackButton.setFrame(0);
                searchButton.setFrame(0);
                break;
            case rogue:
                faceButton.setFrame(1);
                doorButton.setFrame(1);
                moveButton.setFrame(1);
                attackButton.setFrame(1);
                searchButton.setFrame(1);
                break;
            case barb:
                faceButton.setFrame(2);
                doorButton.setFrame(2);
                moveButton.setFrame(2);
                attackButton.setFrame(2);
                searchButton.setFrame(2);
                break;
            default:
                break;
        }
        
    }
    
    /*showActions() {
        
        let buttonXpos = 50;
        
        faceButton.x = this.x-60;
        faceButton.y = this.y;
        faceButton.setAlpha(1);
        
        moveButton.x = this.x+buttonXpos;
        moveButton.y = this.y;
        moveButton.setAlpha(1);
        buttonXpos += 75;
        
        attackButton.x = this.x+buttonXpos;
        attackButton.y = this.y;
        attackButton.setAlpha(1);
        buttonXpos += 75;
        
        searchButton.x = this.x+buttonXpos;
        searchButton.y = this.y;
        searchButton.setAlpha(1);
        buttonXpos += 75;
        
        doorButton.x = this.x+buttonXpos;
        doorButton.y = this.y;
        doorButton.setAlpha(1);
        buttonXpos += 75;
        
        switch(this) {
            case mage:
                faceButton.setFrame(0);
                doorButton.setFrame(0);
                moveButton.setFrame(0);
                attackButton.setFrame(0);
                searchButton.setFrame(0);
                break;
            case rogue:
                faceButton.setFrame(1);
                doorButton.setFrame(1);
                moveButton.setFrame(1);
                attackButton.setFrame(1);
                searchButton.setFrame(1);
                break;
            case barb:
                faceButton.setFrame(2);
                doorButton.setFrame(2);
                moveButton.setFrame(2);
                attackButton.setFrame(2);
                searchButton.setFrame(2);
                break;
            default:
                break;
        }
    }
    
    hideActions() {
        faceButton.setAlpha(0);
        doorButton.setAlpha(0);
        moveButton.setAlpha(0);
        attackButton.setAlpha(0);
        searchButton.setAlpha(0);
    }*/

    
}