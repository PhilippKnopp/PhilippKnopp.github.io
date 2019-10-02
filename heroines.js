class Figure extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        this.onTile;
        this.active = false;
        this.dieSize;
        this.explodes = false;
        this.stealth = false;
        this.health;
        this.movement = 6;
        this.moved = 0;
        this.actions = 2;
        this.pathToTravel = [];
        this.def = 4;
        this.description;
        
        this.setInteractive();
        this.on("pointerup", this.activateFigure, this);
        this.on("pointerout", this.hideFace, this);
        this.on("pointerover", this.showFace, this);
        
        this.setOnMap = function () {
            console.log("Figur setOnMap()");  // <––––––––––––––––––––––––––––––––––
            tileArray[this.onTile].occupiedBy = "figure";
            this.setAlpha(1);
            this.x = tileArray[this.onTile].x;
            this.y = tileArray[this.onTile].y;
        };
        
        this.enterTile = function () {
            console.log("Figur enterTile()");  // <––––––––––––––––––––––––––––––––––
            tileArray[this.onTile].occupiedBy = "";
            this.onTile = this.pathToTravel[0];
            this.pathToTravel.shift();
            tileArray[this.onTile].occupiedBy = "figure";
            enemyVisibility();
            if (typeof tileArray[this.onTile].state === 'string') {
                eventDispatch(this, tileArray[this.onTile].state);
            };
        };
        
        this.attack = function (enemy) {
            console.log("Figur attack()");  // <––––––––––––––––––––––––––––––––––
            if (attackButton.mode == "planning cc" && this.stealth == true) { // hinterhältiger Angriff
                let attackroll = getRandomInt(this.dieSize, this.explodes) + getRandomInt(this.dieSize, this.explodes);
                if (attackroll >= enemy.def) {
                    enemy.health -= attackroll;
                }
                this.stealth = false;
            } else if (attackButton.mode == "planning rc") { // Magieangriff
                let attackroll = getRandomInt(this.dieSize, this.explodes);
                console.log("implement aoe Damage");
            } else if (attackButton.mode == "planning cc") { // standard Attacke für Barb und Schurke im Nahkampf
                let attackroll = getRandomInt(this.dieSize, this.explodes);
                if (attackroll >= enemy.def) {
                    enemy.health -= attackroll;
                }
            }
            if (enemy.health <= 0) {
                tileArray[enemy.onTile].occupiedBy = "";
                enemy.setAlpha(0);
                figuresOnMap.splice(figuresOnMap.findIndex(findDeadChar),1);
                addXP(enemy.loot);
                checkFightmode();
            }
            returnCursorToNormal();
            this.activateFigure();
        }
        
        this.moveNow = function () {
            console.log("moveNow()");  // <––––––––––––––––––––––––––––––––––
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
                moveButton.mode = "none";
                if (this == rogue && this.stealth == true) {
                    this.checkStealth();
                }
                showActions(this);
            }
        }
        
    }
    
    activateFigure() {
        console.log("activateFigure()");  // <––––––––––––––––––––––––––––––––––
        if (moveButton.mode == "none" && searchButton.mode == "none" && attackButton.mode == "none") {
            deactivateFigures();

            this.active = true;
            this.setFrame(1);
            
            if (this == rogue && this.stealth == false && this.checkIfHidden() == true) {
                this.stealth == true;
                this.setAlpha(0.5);
            }

            showActions(this);
            
        } else if (searchButton.mode == "planning") {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            if (lineOfSight (activeChar, this.onTile) == true) {
                showText(textL1Chars[this.description]);
            } else {
                showText(textL1[1]);
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
        } else if (attackButton.mode == "planning cc" || attackButton.mode == "planning rc") {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            returnCursorToNormal();
            if (this != activeChar) {
                showText ("", activeChar, textL1[19]);
            }
            showActions(activeChar);
        }
    }
    
    checkStealth() {
        console.log("checkStealth()");  // <––––––––––––––––––––––––––––––––––
        let enemyIndexes = [];
        let enemyDefs = [];
        // Alle Feinde auflisten
        for (var i = 0; i < figuresOnMap.length; i++) {
            if (tileArray[figuresOnMap[i].onTile].occupiedBy == "enemy") {
                enemyIndexes.push(figuresOnMap[i]);
            }
        }
        // Sucht alle Gegner Verteidigungen und sammelt sie in enemyDefs
        for (var k = 0; k < enemyIndexes.length; k++) {
            if (lineOfSight (this, enemyIndexes[k].onTile)) {
                enemyDefs.push(enemyIndexes[k].def);
            }
        }
        let stealthRoll = getRandomInt(this.dieSize, false);
        let highestEnemyDef = Math.max(...enemyDefs);
        if (stealthRoll < highestEnemyDef) {
            this.stealth == false;
        }
        enemyVisibility();
        checkFightmode();
    }
    
    checkIfHidden() {
        console.log("checkIfHidden()");  // <––––––––––––––––––––––––––––––––––
        let enemyIndexes = [];
        // Alle Feinde auflisten
        for (var i = 0; i < figuresOnMap.length; i++) {
            if (tileArray[figuresOnMap[i].onTile].occupiedBy == "enemy" && lineOfSight (this, figuresOnMap[i].onTile)) {
                return false;
            }
        }
        return true;
    }
    
    hideFace() {
        console.log("hideFace()");  // <––––––––––––––––––––––––––––––––––
        if (figuresOnMap.findIndex(findActiveChar) == -1) {
            hideActions();
        }
    }
    
    showFace() {
        console.log("showFace()");  // <––––––––––––––––––––––––––––––––––
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

function showActions(_this) {
    console.log("showActions()");  // <––––––––––––––––––––––––––––––––––
    hideActions();
    let buttonXpos = 60;
    tileArray[_this.onTile].checkForNeighbors();
    
    faceButton.x = _this.x-buttonXpos;
    faceButton.y = _this.y;
    faceButton.setAlpha(1);
    
    // bietet den "laufen-Button" an, wenn ein benachbartes Feld begehbar ist
    if (tileArray[_this.onTile].neighbors.length != 0) {
        moveButton.x = _this.x+buttonXpos;
        moveButton.y = _this.y;
        moveButton.setAlpha(1);
        buttonXpos += 85;
    }
    
    // bietet den "Angriffs-Button" an, wenn ein Gegner in Reichweite ist.
    let adjacentEnemies = false;
    for (var i = 0; i < tileArray[_this.onTile].neighbors.length; i++) {
        if (tileArray[_this.onTile].neighbors[i].occupiedBy == "enemy" || tileArray[_this.onTile].neighbors[i].occupiedBy == "idol") {
            adjacentEnemies = true;
        }
    }
    if (adjacentEnemies == true) {
        attackButton.x = _this.x+buttonXpos;
        attackButton.y = _this.y;
        attackButton.setAlpha(1);
        buttonXpos += 85;
    } else if (_this == mage) {
        let distantEnemies = false;
        for (var i = 0; i < tileArray.length; i++) {
            if (lineOfSight(_this, i) == true && (tileArray[i].occupiedBy == "enemy" || tileArray[i].occupiedBy == "idol")) {
                distantEnemies = true;
            }
        }
        if (distantEnemies == true) {
            attackButton.x = _this.x+buttonXpos;
            attackButton.y = _this.y;
            attackButton.setAlpha(1);
            attackButton.mode = "possible rc";
            buttonXpos += 85;
        }
    }
    
    // bietet den "Suchen-Button" an.
    searchButton.x = _this.x+buttonXpos;
    searchButton.y = _this.y;
    searchButton.setAlpha(1);
    buttonXpos += 85;
    
    // bietet den "Tür-Button" an, wenn eine Tür in Reichweite ist.
    if (tileArray[_this.onTile].state == "0dc" || tileArray[_this.onTile].state == "0do") {
        doorButton.x = _this.x+buttonXpos;
        doorButton.y = _this.y;
        doorButton.setAlpha(1);
        buttonXpos += 85;
    }
    
    // bietet den "special-Button" an, wenn eine Falle auf einem benachbartem Feld ist
    let adjacentTrap = false;
    for (var i = 0; i < tileArray[_this.onTile].neighbors.length; i++) {
        if (tileArray[_this.onTile].neighbors[i].state == "0t1" && trap1Sprt.alpha !=0 && trap1Sprt.frame != 1) {
            adjacentTrap = true;
        }
    }
    if ((_this == mage || _this == rogue) && adjacentTrap == true ) {
        specialButton.x = _this.x+buttonXpos;
        specialButton.y = _this.y;
        specialButton.setAlpha(1);
        buttonXpos += 85;
        specialButton.mode = "disableTrap";
    }
    
    // bietet den "Cancel-Button" an.
    cancelButton.x = _this.x+buttonXpos;
    cancelButton.y = _this.y;
    cancelButton.setAlpha(1);
    buttonXpos += 85;
    
    switch(_this) {
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
    
    tileArray[_this.onTile].neighbors.length = 0;
}

function hideActions() {
    console.log("hideActions()");  // <––––––––––––––––––––––––––––––––––
    faceButton.setAlpha(0);
    doorButton.setAlpha(0);
    moveButton.setAlpha(0);
    attackButton.setAlpha(0);
    searchButton.setAlpha(0);
    specialButton.setAlpha(0);
    cancelButton.setAlpha(0);
}

function deactivateFigures() {
    console.log("deactivateFigures()");  // <––––––––––––––––––––––––––––––––––
    for (var i = 0; i < figuresOnMap.length; i++) {
        figuresOnMap[i].active = false;
        figuresOnMap[i].setFrame(0);
    }
}