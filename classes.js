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
        
        this.enterTile = function () {
            tileArray[this.onTile].occupiedBy = "";
            this.onTile = this.pathToTravel[0];
            this.pathToTravel.shift();
            tileArray[this.onTile].occupiedBy = "figure";
            if (tileArray[this.onTile].state == "0t1") {
                console.log("trap1");
                trap1(this);
                this.moveNow;
            }
        };
        
        this.mapPosition = function (tileX, tileY) {
            this.x = tileX;
            this.y = tileY;
        };
        
        this.health;
        this.movement = 6;
        this.moved = 0;
        this.pathToTravel = [];
        this.def = 4;
        this.dieSize;
        
        this.attack = function (enemy) {
            if (this.stealth == true) { // hinterhältiger Angriff
                let attackroll = getRandomInt(this.dieSize, false) + getRandomInt(this.dieSize, false);
                if (attackroll >= enemy.def) {
                    enemy.health -= attackroll;
                }
            } else if (this == mage) { // Magieangriff
                let attackroll = getRandomInt(this.dieSize, true);
                tileArray[this.onTile].checkForNeighbors();
                let adjacentEnemies = false;
                for (var i = 0; i < tileArray.neighbors; i++) {
                    if (tileArray.neighbors[i].occupiedBy == "enemy") {
                        adjacentEnemies = true;
                    }
                }
                if (adjacentEnemies == true && attackroll >= enemy.def) {
                    enemy.health -= attackroll;
                } else if (adjacentEnemies == false) {
                    console.log("implement aoe Damage");
                }
                tileArray[this.onTile].checkForNeighbors.length = 0;
            } else { // standard Attacke für Barb und Schurke im Nahkampf
                let attackroll = getRandomInt(this.dieSize, false);
                if (attackroll >= enemy.def) {
                    enemy.health -= attackroll;
                }
            }
        }
        
        this.moveNow = function () {
            if (this.pathToTravel.length > 0 && this == barb) {
                movementTweenBarb.data[0].start = this.x;
                movementTweenBarb.data[1].start = this.y;
                console.log("start next Tween");
                movementTweenBarb.restart();
            } else if (this.pathToTravel.length > 0 && this == rogue) {
                movementTweenRogue.data[0].start = this.x;
                movementTweenRogue.data[1].start = this.y;
                console.log("start next Tween");
                movementTweenRogue.restart();
            } else if (this.pathToTravel.length > 0 && this == mage) {
                movementTweenMage.data[0].start = this.x;
                movementTweenMage.data[1].start = this.y;
                console.log("start next Tween");
                movementTweenMage.restart();
            } else {
                figureMoveState = "none";
                console.log("stop moving");
                this.activateFigure();
            }
        }
        
    }
    
    activateFigure() {
        
        if (figureMoveState == "none") {
            deactivateFigures();

            this.active = true;
            this.setFrame(1);

            hideActions();

            let buttonXpos = 60;

            faceButton.x = this.x-60;
            faceButton.y = this.y;
            faceButton.setAlpha(1);

            // bietet den "laufen-Button" an, wenn ein benachbartes Feld begehbar ist
            tileArray[this.onTile].checkForNeighbors(); // Listet Nachbarn auf
            if (tileArray[this.onTile].neighbors.length != 0) {
                moveButton.x = this.x+buttonXpos;
                moveButton.y = this.y;
                moveButton.setAlpha(1);
                buttonXpos += 85;
            }

            // bietet den "Angriffs-Button" an, wenn ein Gegner in Reichweite ist.
            let adjacentEnemies = false;
            for (var i = 0; i < tileArray.neighbors; i++) {
                if (tileArray.neighbors[i].occupiedBy == "enemy") {
                    adjacentEnemies = true;
                }
            }
            if ((this == mage) || adjacentEnemies == true) {
                console.log("magier LOS implementieren");
                attackButton.x = this.x+buttonXpos;
                attackButton.y = this.y;
                attackButton.setAlpha(1);
                buttonXpos += 85;
            }
            tileArray[this.onTile].neighbors.length = 0;  // Setzt Nachbarliste wieder auf Null

            searchButton.x = this.x+buttonXpos;
            searchButton.y = this.y;
            searchButton.setAlpha(1);
            buttonXpos += 85;
            
            // bietet den "Tür-Button" an, wenn eine Tür in Reichweite ist.
            if (tileArray[this.onTile].state == "0dc" || tileArray[this.onTile].state == "0do") {
                doorButton.x = this.x+buttonXpos;
                doorButton.y = this.y;
                doorButton.setAlpha(1);
                buttonXpos += 85;
            }

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
        }
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