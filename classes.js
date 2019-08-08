class Figure extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        
        this.onTile;
        this.active = false;
        
        this.setInteractive();
        this.on("pointerup", this.activateFigure, this);
        this.on("pointerout", this.hideFace, this);
        this.on("pointerover", this.showFace, this);
        
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
        this.moved = 0;
        this.pathToTravel = [];
        this.armor = 4;
        this.dieSize;
        
        this.moveNow = function () {
            
            if (this.pathToTravel.length > 0) {
                movementTween.updateTo(x, tileArray[this.pathToTravel[0]].x, true);
                movementTween.updateTo(y, tileArray[this.pathToTravel[0]].y, true);
                movementTween.restart();
                console.log("1");
                this.pathToTravel.shift();
            }
        }
        
    }
    
    activateFigure() {
        
        deactivateFigures();
        
        this.active = true;
        this.setFrame(1);
        
        hideActions();
        
        let buttonXpos = 60;
        
        faceButton.x = this.x-60;
        faceButton.y = this.y;
        faceButton.setAlpha(1);
        
        // bietet den "laufen-Button" an, wenn ein benachbartes Feld begehbar ist
        tileArray[this.onTile].checkForNeighbors();
        if (tileArray[this.onTile].neighbors.length != 0) {
            moveButton.x = this.x+buttonXpos;
            moveButton.y = this.y;
            moveButton.setAlpha(1);
            buttonXpos += 85;
        }
        tileArray[this.onTile].neighbors.length = 0;
        
        // bietet den "Angriffs-Button" an, wenn ein Gegner in Reichweite ist.
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
        
        cancelButton.x = this.x+buttonXpos;
        cancelButton.y = this.y;
        cancelButton.setAlpha(1);
        buttonXpos += 85;
        
        switch(this) {
            case mage:
                faceButton.setFrame(0);
                doorButton.setFrame(0);
                moveButton.setFrame(0);
                attackButton.setFrame(0);
                searchButton.setFrame(0);
                cancelButton.setFrame(0);
                break;
            case rogue:
                faceButton.setFrame(1);
                doorButton.setFrame(1);
                moveButton.setFrame(1);
                attackButton.setFrame(1);
                searchButton.setFrame(1);
                cancelButton.setFrame(1);
                break;
            case barb:
                faceButton.setFrame(2);
                doorButton.setFrame(2);
                moveButton.setFrame(2);
                attackButton.setFrame(2);
                searchButton.setFrame(2);
                cancelButton.setFrame(2);
                break;
            default:
                break;
        }
        
        movementTween.data[0].target = this;
        
    }
    
    hideFace() {
        if (figuresOnMap.findIndex(findActiveChar) == -1) {
            hideActions();
        }
    }
    
    showFace() {
        if (figuresOnMap.findIndex(findActiveChar) == -1) {
            faceButton.x = this.x-60;
            faceButton.y = this.y;
            faceButton.setAlpha(1);

            switch(this) {
                case mage:
                    faceButton.setFrame(0);
                    break;
                case rogue:
                    faceButton.setFrame(1);
                    break;
                case barb:
                    faceButton.setFrame(2);
                    break;
                default:
                    break;
            }
        }
    }
    
}

function hideActions() {
    faceButton.setAlpha(0);
    doorButton.setAlpha(0);
    moveButton.setAlpha(0);
    attackButton.setAlpha(0);
    searchButton.setAlpha(0);
    cancelButton.setAlpha(0);
}

function deactivateFigures() {
    for (var i = 0; i < figuresOnMap.length; i++) {
        figuresOnMap[i].active = false;
        figuresOnMap[i].setFrame(0);
    }
}