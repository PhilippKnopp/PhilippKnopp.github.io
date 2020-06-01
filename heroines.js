class Figure extends Phaser.GameObjects.Sprite {
    constructor (config, key) {
        super(config.scene, config.x, config.y, key);
        config.scene.add.existing(this);
        this.setAlpha(0);
        this.onTile;
        this.active = false;
        this.hasActed = false;
        this.dieSize;
        this.explodes = false;
        this.health;
        this.fullHealth;
        this.movement = 6;
        this.movementCounter = 6;
        this.actions = 1;
        this.actionsCounter = 1;
        this.actionStack =[];
        this.pathToTravel = [];
        this.def = 4;
        this.description;
        this.skills = {stealth: { trained: false, active: false },
                       swim:    false
                      };
        
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
        
        this.moveNow = function () {
            if (this.pathToTravel.length > 0) {
                if (fightmode == true) {
                    let path = calculatePath (this.onTile, this.pathToTravel[0]);
                    this.movementCounter -= path.second;
                    updateGUI();
                }
                movementMarker.x = this.x;
                movementMarker.y = this.y;
                movementTween.data[0].start = this.x;
                movementTween.data[1].start = this.y;
                movementTween.restart();
            } else {
                moveButton.state = 0;
                if (this.skills.stealth.active == true) {
                    this.checkStealth();
                }
                showActions(this);
            }
        }
        
        this.enterTile = function () {
            let changeTileOccupation = true;
            for (var i = 0; i < charsStillAlive; i++) {
                if (figuresOnMap[i].onTile == this.onTile && figuresOnMap[i] != this) {
                    changeTileOccupation = false;
                }
            }
            if (changeTileOccupation == true) {
                tileArray[this.onTile].occupiedBy = "";
            }
            this.onTile = this.pathToTravel[0];
            this.pathToTravel.shift();
            tileArray[this.onTile].occupiedBy = "figure";
            enemyVisibility();
            checkFightmode();
            // tileVisibility();
            if (typeof tileArray[this.onTile].state === 'string') {
                eventDispatch(tileArray[this.onTile].state);
            }
        }
        
        this.rangedAttack = function (enemy) {
            if (this.actionsCounter > 0) {
                this.actionsCounter--;
            } else if (this.actionsCounter == 0 && this.movementCounter >= 6 && rangedDamage[0] == 0) {
                this.movementCounter -= 6;
            }
            
            updateGUI();
            
            if (rangedDamage[0] == 0) {
                rangedDamage[0] = getRandomInt(this.dieSize, this.explodes);
                mPortraitIcon.anims.play('rollDie');
                mRollText.setText(attackroll);
            } else {
                mPortraitIcon.setFrame(3);
                mRollText.setText(rangedDamage[0]);
            }
            
            let distantEnemies = [];
            for (var i = 2; i < figuresOnMap.length; i++) {
                if (lineOfSight(this.onTile, figuresOnMap[i].onTile) == true && figuresOnMap[i] instanceof Enemy) {
                    distantEnemies.push(figuresOnMap[i].onTile);
                }
            }
            
            showSpellFX(this, enemy);
            
            // Schaden Verteilen:
            if (distantEnemies.length == 1) {
                while (rangedDamage[0] > 0) {
                    rangedDamage[0]--;
                    enemy.health--;
                }
            } else if (Phaser.Input.Keyboard.JustDown(AKey)) {
                while (rangedDamage[0] > 0 && enemy.health > 0) {
                    rangedDamage[0]--;
                    enemy.health--;
                }
            } else {
                rangedDamage[0]--;
                enemy.health--;
            }
            mRollText.setText(rangedDamage[0]);
            
            // Aktion je nach Zustand des Gegners ist jetzt erst wenn Animation den Gegner schon getroffen hat.
        }
        
        this.attack = function (enemy) {
            
            showAttackFX(this, enemy);
            
            if (this.actionsCounter > 0 && fightmode == true) {
                this.actionsCounter--;
            } else if (this.actionsCounter == 0 && this.movementCounter >= 6) {
                this.movementCounter -= 6;
            }
            
            updateGUI();
            
            let attackroll = 0;
            if (this.skills.stealth.active == true) {
                attackroll += getRandomInt(this.dieSize, this.explodes, 2);
            } else {
                attackroll += getRandomInt(this.dieSize, this.explodes);
            }
            
            // Startet Animatin im Porträt in der UI und zeigt dort auch das Würfelergebnis
            if (this == barb) {
                bPortraitIcon.anims.play('rollDie');
                bRollText.setText(attackroll);
            } else if (this == rogue) {
                rPortraitIcon.anims.play('rollDie');
                rRollText.setText(attackroll);
            } else if (this == mage) {
                mPortraitIcon.anims.play('rollDie');
                mRollText.setText(attackroll);
            }
            
            if (attackroll >= enemy.def) {
                enemy.health -= attackroll;
                melee_hits[getRandomInt(melee_hits.length, false)-1].play();
            } else {
                melee_misses[getRandomInt(melee_misses.length, false)-1].play();
            }
            
            if (this.skills.stealth.active == true) {
                this.skills.stealth.active = false;
                this.setAlpha(1);
                enemyVisibility();
                checkFightmode();
            }
            
            enemy.checkHealth();
            returnCursorToNormal();
            showActions(this);
        }
        
        this.checkHealth = function () {
            if (this.health <= 0) {
                this.setAlpha(0.2);
                this.movement = 3;
                this.actions = 0;
                this.health = 0;
                enemyVisibility();
                updateGUI();
            }
        }
        
    }
    
    activateFigure() {
        
        if (moveButton.state == 0 && searchButton.state == 0 && attackButton.state == 0 && (fightmode == false || (this.actionsCounter > 0 || (this.movementCounter) >= 1 ))) {
            deactivateFigures();

            this.active = true;
            this.setFrame(1);
            activeChar = this;
            
            if (this.skills.stealth.trained && this.checkIfHidden()) {
                this.skills.stealth.active = true;
                this.setAlpha(0.5);
            }
            
            showActions(this);
            
        } else if (searchButton.state == 1) {
            if (lineOfSight (activeChar.onTile, this.onTile) == true) {
                showText("", activeChar, textL1Chars[this.description]);
            } else {
                showText("", activeChar, textL1[1]);
            }
            returnCursorToNormal();
            showActions(activeChar);
        } else if (moveButton.state == 1) {
            moveButton.state = 0;
            returnCursorToNormal();
            if (this != activeChar) {
                showText ("", activeChar, textL1[16]);
            }
            showActions(activeChar);
        } else if (attackButton.state == 1 || attackButton.state == 2) {
            returnCursorToNormal();
            if (this != activeChar) {
                showText ("", activeChar, textL1[19]);
            }
            showActions(activeChar);
        }
    }
    
    checkStealth() {
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
            if (lineOfSight (this.onTile, enemyIndexes[k].onTile)) {
                enemyDefs.push(enemyIndexes[k].def);
            }
        }
        let stealthRoll = getRandomInt(this.dieSize, false);
        let highestEnemyDef = Math.max(...enemyDefs);
        if (stealthRoll < highestEnemyDef) {
            this.skills.stealth.active = false;
            this.setAlpha(1);
        }
        enemyVisibility();
        checkFightmode();
    }
    
    checkIfHidden() {
        // Schaut ob ein Feind Sichtlinie zum Rogue hat
        for (var i = 0; i < figuresOnMap.length; i++) {
            if (figuresOnMap[i] instanceof Enemy && lineOfSight(this.onTile, figuresOnMap[i].onTile) == true) {
                return false;
            }
        }
        return true;
    }
    
    hideFace() {
        if (activeChar == null || searchButton.state == 1 || attackButton.state == 2 || attackButton.state == 1 || moveButton.state == 1) {
            faceButton.setAlpha(0);
            updateGUI();
        }
    }
    
    showFace() {
        if (activeChar == null || searchButton.state == 1 || attackButton.state == 2 || attackButton.state == 1 || moveButton.state == 1) {
            faceButton.x = this.x-60;
            faceButton.y = this.y;
            faceButton.setAlpha(1);
            
            switch(this) {
                case mage:
                    faceButton.setFrame(0);
                    if (mage.health > 0) {
                        mRollText.setVisible(false);
                        mPortraitIcon.setFrame(1);
                    }
                    break;
                case rogue:
                    faceButton.setFrame(1);
                    if (rogue.health > 0) {
                        rRollText.setVisible(false);
                        rPortraitIcon.setFrame(1);
                    }
                    break;
                case barb:
                    faceButton.setFrame(2);
                    if (barb.health > 0) {
                        bRollText.setVisible(false);
                        bPortraitIcon.setFrame(1);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    
}

function showActions(_this) {
    
    // beendet Zug für diese Heldin und checkt ob dadurch der Zug für alle beendet ist
    if (fightmode == true && (_this.actionsCounter == 0 && (_this.movementCounter) < 1 )) {
        _this.hasActed = true;
        returnCursorToNormal();
        deactivateFigures();
        completeTurn();
        return;
    }
    
    hideActions();
    let buttonXpos = 60;
    tileArray[_this.onTile].checkForNeighbors();
    
    faceButton.x = _this.x-buttonXpos;
    faceButton.y = _this.y;
    faceButton.setAlpha(1);
    
    // bietet den "laufen-Button" an, wenn ein benachbartes Feld begehbar ist
    if (tileArray[_this.onTile].neighbors.length != 0 && (fightmode == false || _this.movementCounter >= 1)) {
        moveButton.x = _this.x+buttonXpos;
        moveButton.y = _this.y;
        moveButton.setAlpha(1);
        buttonXpos += 85;
    }
    
    // bietet den "Angriffs-Button" an, wenn ein Gegner in Reichweite ist.
    if (fightmode == false || _this.actionsCounter > 0 || (_this.movementCounter >= 6 && _this.actionsCounter == 0) ) {
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
                if (lineOfSight(_this.onTile, i) == true && (tileArray[i].occupiedBy == "enemy" || tileArray[i].occupiedBy == "idol")) {
                    distantEnemies = true;
                }
            }
            if (distantEnemies == true) {
                attackButton.x = _this.x+buttonXpos;
                attackButton.y = _this.y;
                attackButton.setAlpha(1);
                attackButton.state = 3; // possible Ranged Combat
                buttonXpos += 85;
            }
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
    if (fightmode == false || _this.actionsCounter >= 0 || (_this.movementCounter) >= 6 ) {
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
            specialButton.state = 1;
        }
    }
    
    // bietet den "Cancel-Button" an.
    cancelButton.x = _this.x+buttonXpos;
    cancelButton.y = _this.y;
    cancelButton.setAlpha(1);
    buttonXpos += 85;
    
    updateGUI();
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
            if (_this.skills.stealth.active == true) {
                moveButton.setFrame(3);
            } else {
                moveButton.setFrame(1);
            }
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
    
    if (doorButton.alpha == 0 && moveButton.alpha == 0 && attackButton.alpha == 0 && (specialButton.alpha == 0 || _this != rogue) ) {
        returnCursorToNormal();
        deactivateFigures();
        _this.hasActed = true;
        completeTurn();
    }
    
}

function hideActions() {
    updateGUI();
    faceButton.setAlpha(0);
    doorButton.setAlpha(0);
    moveButton.setAlpha(0);
    attackButton.setAlpha(0);
    searchButton.setAlpha(0);
    specialButton.setAlpha(0);
    cancelButton.setAlpha(0);
    enemyHealthBase.setAlpha(0);
    enemyHealthBar.clear();
}

function deactivateFigures() {
    for (var i = 0; i < figuresOnMap.length; i++) {
        figuresOnMap[i].active = false;
        figuresOnMap[i].setFrame(0);
        activeChar = null;
    }
    updateGUI();
    attackButton.state = 0;
    moveButton.state = 0;
    searchButton.state = 0;
}

function replenishActions() {
    mage.actionsCounter = mage.actions;
    mage.movementCounter = mage.movement;
    rogue.actionsCounter = rogue.actions;
    rogue.movementCounter = rogue.movement;
    barb.actionsCounter = barb.actions;
    barb.movementCounter = barb.movement;
    updateGUI();
}