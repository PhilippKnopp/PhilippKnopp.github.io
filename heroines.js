class Figure extends Phaser.GameObjects.Sprite {
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
        this.def = 4;
        
        this.setInteractive();
        this.on("pointerup", this.activateFigure, this);
        this.on("pointerout", this.hideFace, this);
        this.on("pointerover", this.showFace, this);
        
        this.setOnMap = function () {
            tileArray[this.onTile].occupiedBy = "figure";
            this.setAlpha(1);
            this.x = tileArray[this.onTile].x;
            this.y = tileArray[this.onTile].y;
        };
        
        this.enterTile = function () {
            tileArray[this.onTile].occupiedBy = "";
            this.onTile = this.pathToTravel[0];
            this.pathToTravel.shift();
            tileArray[this.onTile].occupiedBy = "figure";
            if (tileArray[this.onTile].state == "0t1") {
                trap1(this);
                this.moveNow;
            }
        };
        
        this.attack = function (enemy) {
            if (this.stealth == true) { // hinterhältiger Angriff
                let attackroll = getRandomInt(this.dieSize, this.explodes) + getRandomInt(this.dieSize, this.explodes);
                if (attackroll >= enemy.def) {
                    enemy.health -= attackroll;
                }
            } else if (this == mage) { // Magieangriff
                let attackroll = getRandomInt(this.dieSize, this.explodes);
                tileArray[this.onTile].checkForNeighbors();
                let adjacentEnemies = false;
                for (var i = 0; i < tileArray[this.onTile].neighbors.length; i++) {
                    if (tileArray[this.onTile].neighbors[i].occupiedBy == "enemy") {
                        adjacentEnemies = true;
                    }
                }
                if (adjacentEnemies == true && attackroll >= enemy.def) {
                    enemy.health -= attackroll;
                } else if (adjacentEnemies == false) {
                    console.log("implement aoe Damage");
                }
                tileArray[this.onTile].neighbors.length = 0;
            } else { // standard Attacke für Barb und Schurke im Nahkampf
                let attackroll = getRandomInt(this.dieSize, this.explodes);
                if (attackroll >= enemy.def) {
                    enemy.health -= attackroll;
                }
            }
        }
        
        this.moveNow = function () {
            if (this.pathToTravel.length > 0 && this == barb) {
                movementTweenBarb.data[0].start = this.x;
                movementTweenBarb.data[1].start = this.y;
                movementTweenBarb.restart();
            } else if (this.pathToTravel.length > 0 && this == rogue) {
                movementTweenRogue.data[0].start = this.x;
                movementTweenRogue.data[1].start = this.y;
                movementTweenRogue.restart();
            } else if (this.pathToTravel.length > 0 && this == mage) {
                movementTweenMage.data[0].start = this.x;
                movementTweenMage.data[1].start = this.y;
                movementTweenMage.restart();
            } else {
                figureMoveState = "none";
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
            tileArray[this.onTile].checkForNeighbors();
            
            faceButton.x = this.x-buttonXpos;
            faceButton.y = this.y;
            faceButton.setAlpha(1);

            // bietet den "laufen-Button" an, wenn ein benachbartes Feld begehbar ist
            if (tileArray[this.onTile].neighbors.length != 0) {
                moveButton.x = this.x+buttonXpos;
                moveButton.y = this.y;
                moveButton.setAlpha(1);
                buttonXpos += 85;
            }

            // bietet den "Angriffs-Button" an, wenn ein Gegner in Reichweite ist.
            let adjacentEnemies = false;
            for (var i = 0; i < tileArray[this.onTile].neighbors.length; i++) {
                if (tileArray[this.onTile].neighbors[i].occupiedBy == "enemy" || tileArray[this.onTile].neighbors[i].occupiedBy == "idol") {
                    adjacentEnemies = true;
                }
            }
            if (adjacentEnemies == true) {
                attackButton.x = this.x+buttonXpos;
                attackButton.y = this.y;
                attackButton.setAlpha(1);
                buttonXpos += 85;
            } else if (this == mage) {
                let distantEnemies = false;
                for (var i = 0; i < tileArray.length; i++) {
                    if (lineOfSight(this, i) == true && (tileArray[i].occupiedBy == "enemy" || tileArray[i].occupiedBy == "idol")) {
                        distantEnemies = true;
                    }
                }
                if (distantEnemies == true) {
                    attackButton.x = this.x+buttonXpos;
                    attackButton.y = this.y;
                    attackButton.setAlpha(1);
                    buttonXpos += 85;
                }
            }

            // bietet den "Suchen-Button" an.
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
            
            // bietet den "special-Button" an, wenn eine Falle auf einem benachbartem Feld ist
            let adjacentTrap = false;
            for (var i = 0; i < tileArray[this.onTile].neighbors.length; i++) {
                if (tileArray[this.onTile].neighbors[i].state == "0t1" && trap1Sprt.alpha !=0 && trap1Sprt.frame != 1) {
                    adjacentTrap = true;
                }
            }
            if ((this == mage || this == rogue) && adjacentTrap == true ) {
                specialButton.x = this.x+buttonXpos;
                specialButton.y = this.y;
                specialButton.setAlpha(1);
                buttonXpos += 85;
                specialButton.mode = "disableTrap";
            }

            // bietet den "Cancel-Button" an.
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
                    specialButton.setFrame(0);
                    cancelButton.setFrame(0);
                    break;
                case rogue:
                    faceButton.setFrame(1);
                    doorButton.setFrame(1);
                    moveButton.setFrame(1);
                    attackButton.setFrame(1);
                    searchButton.setFrame(1);
                    specialButton.setFrame(1);
                    cancelButton.setFrame(1);
                    break;
                case barb:
                    faceButton.setFrame(2);
                    doorButton.setFrame(2);
                    moveButton.setFrame(2);
                    attackButton.setFrame(2);
                    searchButton.setFrame(2);
                    //specialButton.setFrame(2);
                    cancelButton.setFrame(2);
                    break;
                default:
                    break;
            }
            
            tileArray[this.onTile].neighbors.length = 0;
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
    specialButton.setAlpha(0);
    cancelButton.setAlpha(0);
}

function deactivateFigures() {
    for (var i = 0; i < figuresOnMap.length; i++) {
        figuresOnMap[i].active = false;
        figuresOnMap[i].setFrame(0);
    }
}