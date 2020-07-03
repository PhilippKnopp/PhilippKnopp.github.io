// this in Szene ist game.scene.keys.XXX wobei XXX z.B. 'sceneTitle' ohne Anführungszeichen ist

class SceneTitle extends Phaser.Scene {
    
    constructor () {
        super({
            key: 'sceneTitle',
            pack: { files: [{ type: 'image', key: 'preload', url: 'img/Screen_Preload.png' }]}
        });
    }
    
    // Funktion die alle Bilder lädt
    preload () {
        
        let progressBar = this.add.graphics();
        let progressScreen = this.add.image(960, 540, 'preload');
        
        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0x003F5E, 1);
            progressBar.fillRect(660, 537, 600 * value, 6);
        });
        
        this.load.on('complete', function () {
            progressBar.destroy();
            progressScreen.destroy();
        });
        
        // sceneTitle
        this.load.image('title', 'img/Screen_Title.jpg');
        
        // sceneTravel_1
        this.load.image('screen_travel_1', 'img/Screen_Travel_1.png');
        
        // sceneTravel_2
        this.load.image('screen_travel_2', 'img/Screen_Travel_2.png');
        
        // sceneGameOver
        this.load.image('gameOver', 'img/Screen_GameOver.png');
        
        // sceneGame
        this.load.image('map-lvl-1', 'img/map-lvl-1.png');
        this.load.image('crystal1', 'img/crystal1.png');
        this.load.image('door1', 'img/door1.png');
        this.load.image('door2', 'img/door2.png');
        this.load.image('door4', 'img/door4.png');
        this.load.image('door5', 'img/door5.png');
        this.load.image('door6', 'img/door6.png');
        this.load.image('circle1', 'img/circle1.png');
        this.load.image('idol1', 'img/idol1.png');
        this.load.image('gui', 'img/GUI.png');
        this.load.image('gui_bg', 'img/GUI_Background.png');
        this.load.image('bAction', 'img/bAction.png');
        this.load.image('rAction', 'img/rAction.png');
        this.load.image('mAction', 'img/mAction.png');
        this.load.image('barHealth', 'img/Bar_HP.png');
        this.load.image('barMovement', 'img/Bar_Movement.png');
        this.load.spritesheet('trap1Sprite', 'img/trap1.png', { frameWidth: 79, frameHeight: 78 });
        
        this.load.spritesheet('tileSprite', 'img/tileSprite.png', { frameWidth: 26, frameHeight: 26 });
        
        this.load.spritesheet('mageSprite', 'img/mToken.png', { frameWidth: 26, frameHeight: 26 });
        this.load.spritesheet('rogueSprite', 'img/rToken.png', { frameWidth: 26, frameHeight: 26 });
        this.load.spritesheet('barbSprite', 'img/bToken.png', { frameWidth: 26, frameHeight: 26 });
        this.load.spritesheet('e1Sprite', 'img/e1Token.png', { frameWidth: 26, frameHeight: 26 });
        this.load.spritesheet('e2Sprite', 'img/e2Token.png', { frameWidth: 26, frameHeight: 26 });
        this.load.spritesheet('e3Sprite', 'img/e3Token.png', { frameWidth: 26, frameHeight: 26 });
        this.load.spritesheet('e4Sprite', 'img/e4Token.png', { frameWidth: 26, frameHeight: 26 });
        this.load.spritesheet('swirSprite', 'img/swirl.png', { frameWidth: 52, frameHeight: 52 });
        
        this.load.spritesheet('barDamage', 'img/Bar_Damage.png', { frameWidth: 320, frameHeight: 44 });
        this.load.spritesheet('doorSprite', 'img/door.png', { frameWidth: 65, frameHeight: 65 });
        this.load.spritesheet('moveSprite', 'img/move.png', { frameWidth: 65, frameHeight: 65 });
        this.load.spritesheet('attackSprite', 'img/attack.png', { frameWidth: 65, frameHeight: 65 });
        this.load.spritesheet('searchSprite', 'img/search.png', { frameWidth: 65, frameHeight: 65 });
        this.load.spritesheet('cancelSprite', 'img/cancel.png', { frameWidth: 65, frameHeight: 65 });
        this.load.spritesheet('specialSprite', 'img/special.png', { frameWidth: 65, frameHeight: 65 });
        this.load.spritesheet('faceSprite', 'img/face.png', { frameWidth: 86, frameHeight: 85 });
        this.load.spritesheet('enemyHealthSprite', 'img/enemyHealthBar.png', { frameWidth: 101, frameHeight: 101 });
        
        this.load.spritesheet('textBackSprite', 'img/textBack.png', { frameWidth: 84, frameHeight: 46 });
        this.load.spritesheet('textForwardSprite', 'img/textForward.png', { frameWidth: 84, frameHeight: 46 });
        this.load.spritesheet('textNewSprite', 'img/textNew.png', { frameWidth: 84, frameHeight: 46 });
        this.load.spritesheet('tutorialSprite', 'img/tutorial.png', { frameWidth: 84, frameHeight: 46 });
        this.load.spritesheet('settingsSprite', 'img/settings.png', { frameWidth: 84, frameHeight: 46 });
        this.load.spritesheet('menuSprite', 'img/menu.png', { frameWidth: 84, frameHeight: 46 });
        
        this.load.spritesheet('gameModeSprite', 'img/mode.png', { frameWidth: 84, frameHeight: 84 });
        this.load.spritesheet('xpSprite', 'img/xp.png', { frameWidth: 84, frameHeight: 84 });
        this.load.spritesheet('skipSprite', 'img/skip.png', { frameWidth: 84, frameHeight: 84 });
        this.load.spritesheet('skillUISprite', 'img/UI_Skill.png', { frameWidth: 70, frameHeight: 70 });
        this.load.spritesheet('bPortraitUISprite', 'img/UI_B.png', { frameWidth: 84, frameHeight: 84 });
        this.load.spritesheet('rPortraitUISprite', 'img/UI_R.png', { frameWidth: 84, frameHeight: 84 });
        this.load.spritesheet('mPortraitUISprite', 'img/UI_M.png', { frameWidth: 84, frameHeight: 84 });
        
        this.load.spritesheet('attackFX1', 'img/strike1.png', { frameWidth: 78, frameHeight: 78});
        this.load.spritesheet('attackFX10', 'img/spell1.png', { frameWidth: 150, frameHeight: 50});
        
        this.load.audio("lvl_1_BG_Music", ["sound/lvl1_BG.mp3","sound/lvl1_BG.ogg"]);
        this.load.audio("melee_hit_1_sound", ["sound/sword_1_sound.mp3","sound/sword_1_sound.ogg"]);
        this.load.audio("melee_hit_2_sound", ["sound/sword_2_sound.mp3","sound/sword_2_sound.ogg"]);
        this.load.audio("melee_hit_3_sound", ["sound/sword_3_sound.mp3","sound/sword_3_sound.ogg"]);
        this.load.audio("melee_hit_4_sound", ["sound/sword_4_sound.mp3","sound/sword_4_sound.ogg"]);
        this.load.audio("melee_miss_1_sound", ["sound/sword_5_sound.mp3","sound/sword_5_sound.ogg"]);
        this.load.audio("melee_miss_2_sound", ["sound/sword_6_sound.mp3","sound/sword_6_sound.ogg"]);
        this.load.audio("magic_1_sound", ["sound/magic_1_sound.mp3","sound/magic_1_sound.ogg"]);
        this.load.audio("magic_2_sound", ["sound/magic_2_sound.mp3","sound/magic_2_sound.ogg"]);
        
        // sceneGame Cammping
        this.load.image('restShort', 'img/restShort.png');
        this.load.image('restLong', 'img/restLong.png');
        this.load.image('alchemy', 'img/alchemy.png');
        
        // sceneB
        this.load.image('screenB_BG', 'img/charScreenRiva.png');
        
        // sceneR
        this.load.image('screenR_BG', 'img/charScreenLeng.png');
        
        // sceneM
        this.load.image('screenM_BG', 'img/charScreenCaelith.png');
    }

    create () {
        
        let title = this.add.image(960, 540, 'title');
        
        let VersionText = this.add.text(960, 1020, gameVersion, { fontFamily: "Verdana" , color: '#999999', lineSpacing: 12, align: 'center' }).setOrigin( 0.5).setX(960).setAlpha(0.5);
        
        this.cameras.main.fadeIn(500, 12, 14, 17);
        this.cameras.main.once('camerafadeincomplete', function (camera) {
            this.input.manager.enabled = true;
            this.input.once('pointerdown', function () {
                this.scene.start('sceneTravel_1');
            }, this);
        }, this);
        
    }

}

class SceneTravel_1 extends Phaser.Scene {

    constructor () {
        super({ key: 'sceneTravel_1' });
    }

    create () {
        
        let screen_travel_1 = this.add.image(960, 540, 'screen_travel_1');
        
        let Info_Travel = this.add.text(960, 950, textTravelL1[0], { fontFamily: "Verdana" , color: '#999999', lineSpacing: 12, wordWrap: { width: 900, useAdvancedWrap: true }, align: 'center' }).setOrigin( 0.5).setX(960);
        
        this.input.manager.enabled = true;
        this.input.once('pointerdown', function () {
            // geht sicher, dass alle Spielübergreifenden Variablen auch bei einem Neustart einen sinnvollen Wert haben
            restartLevel();
            this.scene.start('sceneGame');
        }, this);
        
    }

}

class SceneTravel_2 extends Phaser.Scene {

    constructor () {
        super({ key: 'sceneTravel_2' });
    }

    create () {
        
        let screen_travel_2 = this.add.image(960, 540, 'screen_travel_2');
        
        let Info_Travel = this.add.text(960, 950, textTravelL2[0], { fontFamily: "Verdana" , color: '#999999', lineSpacing: 12, wordWrap: { width: 900, useAdvancedWrap: true }, align: 'center' }).setOrigin( 0.5).setX(960);
        
        this.cameras.main.fadeIn(200, 12, 14, 17);
        this.cameras.main.once('camerafadeincomplete', function (camera) {
            /*
            this.input.manager.enabled = true;
            this.input.once('pointerdown', function () {
                level = 2;
                this.scene.start('sceneGame');
            }, this);
            */
        }, this);
        
    }

}

class SceneGameOver extends Phaser.Scene {

    constructor () {
        super({ key: 'sceneGameOver' });
    }

    create () {
        let gameOver = this.add.image(960, 540, 'gameOver');
        
        this.cameras.main.fadeIn(500, 12, 14, 17);
        this.cameras.main.once('camerafadeincomplete', function (camera) {
            this.input.manager.enabled = true;
            this.input.once('pointerdown', function () {
                this.scene.start('sceneTitle');
            }, this);
        }, this);
    }

}

class SceneGame extends Phaser.Scene {

    constructor () {
        super({ key: 'sceneGame' });
    }
    
    // Funktion die alle Sachen erstellt
	create() {
        
        // Greift auf gui.js zu und erstellt viele der User Interface Elemente
        guiBuilder(this);
        
		mapImg = this.add.image(412, 540, 'map-lvl-1').setAlpha(1);
        crystal1Img = this.add.image(620, 137, 'crystal1').setAlpha(0.1);
        door1Img = this.add.image(516, 358, 'door1').setAlpha(0);
        door2Img = this.add.image(516, 618, 'door2').setAlpha(0);
        door4Img = this.add.image(607, 540, 'door4').setAlpha(0);
        door5Img = this.add.image(451, 410, 'door5').setAlpha(0);
        door6Img = this.add.image(581, 410, 'door6').setAlpha(1);
        idol1Img = this.add.image(516, 995, 'idol1').setAlpha(0);
        trap1Sprt = this.add.sprite(438, 501, 'trap1Sprite').setAlpha(0);
        circle1Img = this.add.image(230, 800, 'circle1').setAlpha(0);
		
        AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        spaceKey.on('down', function (key, event) {
            if (figuresOnMap.length == 3 && enemyTurnActive == false && moveButton.state == 0) {
                game.scene.keys.sceneGame.cameras.main.fadeOut(500, 12, 14, 17);
                game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    game.scene.keys.sceneGame.scene.start('sceneTravel_2');
                }, game.scene.keys.sceneGame);
            } else if (enemyTurnActive == false && moveButton.state == 0) {
                event.stopPropagation();
                for (let i = 0; i < 3; i++) {
                    figuresOnMap[i].hasActed = true;
                }
                hideActions();
                deactivateFigures();
                completeTurn();
            }
        });
        
		let index = 0;
		for (var yPos = 0; yPos < matrixHeight; yPos++ ) {
            for (var xPos = 0; xPos < matrixWidth; xPos++ ) {
                let tile = this.add.sprite(xPos*26+100, yPos*26+33, 'tileSprite');
                tileArray.push(tile);
                tile.state = 0;
                /*  States:
                    state = 0      Wand                    [0,0,0,0,0,0,0,0]
                    
                    state = 1      Boden (normal)          [1,1,1,1,1,1,1,1]
                    state = 2      Boden (schwierig)       [2,2,2,2,2,2,2,2]
                    state = 3      Boden (extrem)          [3,3,3,3,3,3,3,3]
                    
                    state = 5      Wasser (niedrig)        [2,2,2,2,2,2,2,2]
                    state = 6      Wasser (tief)           [3,3,3,3,3,3,3,3]
                */
                tile.name = index++;
                tile.info = 1;
                tile.walkable = [1,1,1,1,1,1,1,1];
                tile.cWalkable = [];
                tile.distanceTravelled;
                tile.wayPointUsefulness;
                tile.difDegree;
                tile.entryPoint;
                tile.occupiedBy = [];
                tile.neighbors = [];            // Alle Nachbarn, die erreichbar sind
                tile.neighborsDistance = [];    // Distanzen, in der Reihenfolge von tile.neighbors
                
                tile.setInteractive();
                tile.on("pointerup", function pointerUp () {
                    this.updateWalkable();
                    
					if (moveButton.state == 1 && (this.cWalkable.indexOf(1) > -1 || this.cWalkable.indexOf(2) > -1 || this.cWalkable.indexOf(3) > -1)) {
                    // Bewegung soll starten, nichts ist auf der Tile und diese ist von einer Seite aus begehbar
                        let path = calculatePath(activeChar.onTile, this.name);
                        if (path.first.length == 0) {
                            showText("", activeChar, textL1[18]);
                        }
                        activeChar.pathToTravel = path.first;
                        returnCursorToNormal();
                        moveButton.state = 3;
                        for (var i = 0; i < tileArray.length; i++) {
                            tileArray[i].setFrame(0);
                        }
                        activeChar.moveNow();
                    } else if (moveButton.state == 1) {
                    // Bewegung soll starten, aber hierher geht es nicht
                        showText("", activeChar, textL1[17]);
                        for (var i = 0; i < tileArray.length; i++) {
                            tileArray[i].setFrame(0);
                        }
                    }
                    
                    if (searchButton.state == 1) {
                        if (lineOfSight (activeChar.onTile, this.name)) {
                            let searchWasSuccesful = false;
                            for (let i = this.occupiedBy.length-1; i >= 0; i--) {
                                if (typeof this.occupiedBy[i].lookAtThis !== "undefined") {
                                    searchWasSuccesful = true;
                                    this.occupiedBy[i].lookAtThis();
                                    break;
                                }
                            }
                            if (searchWasSuccesful == false) {
                                if (this.info == 3 && crystal1Img.alpha != 0) {
                                    crystal1Img.setAlpha(1);
                                    showText(textL1[this.info], activeChar, textL1[4]);
                                } else if (this.info == 3 && crystal1Img.alpha == 0) {
                                    showText(textL1[30], activeChar, textL1[31]);
                                } else {
                                    showText(textL1[this.info]);
                                }
                            }
                        } else {
                            showText("", activeChar, textL1[1]);
                        }
                        returnCursorToNormal();
                        showActions(activeChar);
                    }
                    
                    if (attackButton.state == 1 && this.occupiedBy.indexOf(idol) != -1) {
                    // Das Relikt steht benachbart und man möchte es angreifen
                        this.checkForNeighbors(true);
                        for (let i = 0; i < this.neighbors.length; i++) {
                            if (this.neighbors[i].name == activeChar.onTile) {
                                idol.destroy();
                            }
                        }
                        returnCursorToNormal();
                        showActions(activeChar);
                    } else if (attackButton.state == 2 && this.occupiedBy.indexOf(idol) != -1) {
                    // Das Relikt soll im Fernkampf angegriffen werden
                        if (lineOfSight (activeChar.onTile, this.name)) {
                            idol.destroy();
                        }
                        returnCursorToNormal();
                        showActions(activeChar);
                    }
                    clearNodes();
				});
                tile.on("pointerover", function pointerOver () {
                    this.updateWalkable();
                    // Soll beim Hovern über einer Tile in der Bewegungs-Planung der Pfad dorthin gezeigt werden?
                    if (moveButton.state == 1 && (this.cWalkable.indexOf(1) > -1 || this.cWalkable.indexOf(2) > -1 || this.cWalkable.indexOf(3) > -1)) {
                        // Berechnet Pfad den die Heldin hier her laufen würde
                        let path = calculatePath(activeChar.onTile, this.name);
                        // Färbt Pfad entsprechend der Schwierigkeit des Terrains ein
                        for (let i = 0; i < path.first.length; i++) {
                            
                            let startOfStep;
                            if (i == 0) {
                                startOfStep = activeChar.onTile;
                            } else {
                                startOfStep = path.first[i-1];
                            }
                            
                            let step = calculatePath(startOfStep, path.first[i], true);
                            if (startOfStep == path.first[i]-matrixWidth-1 || startOfStep == path.first[i]-matrixWidth+1 ||
                               startOfStep == path.first[i]+matrixWidth+1 || startOfStep == path.first[i]+matrixWidth-1) {
                                step.second = step.second/1.5;
                            }
                            
                            // Tile-Frame wird entsprechend der Schwierigkeit des Geländes eingestellt
                            if (step.second <= 1) {
                                tileArray[path.first[i]].setFrame(1);
                            } else if (step.second <= 2) {
                                tileArray[path.first[i]].setFrame(2);
                            } else {
                                tileArray[path.first[i]].setFrame(3);
                            }
                        }
                    }
                    clearNodes();
                });
                tile.on("pointerout", function pointerOut () {
                    if (moveButton.state == 1) {
                        for (let i = 0; i < tileArray.length; i++) {
                            tileArray[i].setFrame(0);
                        }
                    }
                });
                
                // Passt die Daten an, wie schwer das Betreten dieser Tile aktuell ist
                tile.updateWalkable = function (lookForTargets = false) {
                    this.cWalkable = [...this.walkable];
                    // Felder mit tiefem Wasser werden leicht begehbar für gute Schwimmer
                    if (activeChar != null) {
                        if (this.state == 6 && activeChar.skills.swim == true) {
                            for (let i = 0; i < this.cWalkable.length; i++) {
                                this.cWalkable[i] = this.cWalkable[i]/3;
                            }
                        }
                    }
                    // Geht Objecte durch die auf der Tile liegen und modifiziert aktuelle Begehbarkeit
                    for (let i = 0; i < this.occupiedBy.length; i++) {
                        if (typeof this.occupiedBy[i].modifyWalkability !== "undefined") {
                            this.occupiedBy[i].modifyWalkability(this.cWalkable, lookForTargets);
                        }
                    }
                }
                
                // Sammelt Informationen über alle Nachbarfelder
				tile.checkForNeighbors = function (lookForTargets) {
                    
                    //  B   -   -
                    //  -   A   -
                    //  -   -   -
					if (this.name-matrixWidth >= 0 && this.name%matrixWidth != 0 && tileArray[this.name-1-matrixWidth].walkable[4] != 0) {
                        tileArray[this.name-1-matrixWidth].updateWalkable(lookForTargets);
                        
                        if (tileArray[this.name-1-matrixWidth].cWalkable[4] != 0) {
                            this.neighbors.push(tileArray[this.name-1-matrixWidth]);
                            this.neighborsDistance.push(1.5*tileArray[this.name-1-matrixWidth].cWalkable[4]);
                        }
					}
                    //  -   B   -
                    //  -   A   -
                    //  -   -   -
					if (this.name-matrixWidth >= 0 && tileArray[this.name-matrixWidth].walkable[5] != 0) {
                        tileArray[this.name-matrixWidth].updateWalkable(lookForTargets);
                        
                        if (tileArray[this.name-matrixWidth].cWalkable[5] != 0) {
                            this.neighbors.push(tileArray[this.name-matrixWidth]);
                            this.neighborsDistance.push(1*tileArray[this.name-matrixWidth].cWalkable[5]);
                        }
					}
                    //  -   -   B
                    //  -   A   -
                    //  -   -   -
					if (this.name-matrixWidth >= 0 && this.name%matrixWidth != (matrixWidth-1) && tileArray[this.name-matrixWidth+1].walkable[6] != 0) {
                        tileArray[this.name-matrixWidth+1].updateWalkable(lookForTargets);
                        
                        if (tileArray[this.name-matrixWidth+1].cWalkable[6] != 0) {
                            this.neighbors.push(tileArray[this.name-matrixWidth+1]);
                            this.neighborsDistance.push(1.5*tileArray[this.name-matrixWidth+1].cWalkable[6]);
                        }
					}
                    //  -   -   -
                    //  -   A   B
                    //  -   -   -
					if (this.name%matrixWidth != (matrixWidth-1) && tileArray[this.name+1].walkable[7] != 0) {
                        tileArray[this.name+1].updateWalkable(lookForTargets);
                        
                        if (tileArray[this.name+1].cWalkable[7] != 0) {
                            this.neighbors.push(tileArray[this.name+1]);
                            this.neighborsDistance.push(1*tileArray[this.name+1].cWalkable[7]);
                        }
					}
                    //  -   -   -
                    //  -   A   -
                    //  -   -   B
					if (this.name+matrixWidth < (matrixWidth*matrixHeight) && this.name%matrixWidth != (matrixWidth-1) && tileArray[this.name+1+matrixWidth].walkable[0] != 0) {
                        tileArray[this.name+1+matrixWidth].updateWalkable(lookForTargets);
                        
                        if (tileArray[this.name+1+matrixWidth].cWalkable[0] != 0) {
                            this.neighbors.push(tileArray[this.name+1+matrixWidth]);
                            this.neighborsDistance.push(1.5*tileArray[this.name+1+matrixWidth].cWalkable[0]);
                        }
					}
                    //  -   -   -
                    //  -   A   -
                    //  -   B   -
					if (this.name+matrixWidth < (matrixWidth*matrixHeight) && tileArray[this.name+matrixWidth].walkable[1] != 0) {
                        tileArray[this.name+matrixWidth].updateWalkable(lookForTargets);
                        
                        if (tileArray[this.name+matrixWidth].cWalkable[1] != 0) {
                            this.neighbors.push(tileArray[this.name+matrixWidth]);
                            this.neighborsDistance.push(1*tileArray[this.name+matrixWidth].cWalkable[1]);
                        }
					}
                    //  -   -   -
                    //  -   A   -
                    //  B   -   -
					if (this.name+matrixWidth < (matrixWidth*matrixHeight) && this.name%matrixWidth != 0 && tileArray[this.name-1+matrixWidth].walkable[2] != 0) {
                        tileArray[this.name-1+matrixWidth].updateWalkable(lookForTargets);
                        
                        if (tileArray[this.name-1+matrixWidth].cWalkable[2] != 0) {
                            this.neighbors.push(tileArray[this.name-1+matrixWidth]);
                            this.neighborsDistance.push(1.5*tileArray[this.name-1+matrixWidth].cWalkable[2]);
                        }
					}
                    //  -   -   -
                    //  B   A   -
                    //  -   -   -
					if (this.name%matrixWidth != 0 && tileArray[this.name-1].walkable[3] != 0) {
                        tileArray[this.name-1].updateWalkable(lookForTargets);
                        
                        if (tileArray[this.name-1].cWalkable[3] != 0) {
                            this.neighbors.push(tileArray[this.name-1]);
                            this.neighborsDistance.push(1*tileArray[this.name-1].cWalkable[3]);
                        }
					}
				}
                
                // Berechnet die Distanz-Luftlinie zum Ziel während des Pfadfindens
				tile.estimatedWayToB = function (b) {
                    let a = this.name;
					
					let xDistance = Math.abs(b%matrixWidth-a%matrixWidth);
					let yDistance = Math.abs(Math.floor(b/matrixWidth)-Math.floor(a/matrixWidth));
					let diagonals = Math.min(xDistance, yDistance);
					return xDistance + yDistance - diagonals/2;
				}
			}
		}
        
        doorButton = this.add.sprite(400, 400, 'doorSprite').setAlpha(0);
        doorButton.setInteractive();
		doorButton.on("pointerup", function pointerUp() {
            if (fightmode == true) {
                if (activeChar.movementCounter >= 1) {
                    activeChar.movementCounter--;
                } else {
                    activeChar.actionsCounter--;
                }
                updateGUI();
            }
            for (let i = 0; i < tileArray[activeChar.onTile].occupiedBy.length; i++) {
                if (typeof tileArray[activeChar.onTile].occupiedBy[i].useDoor !== "undefined") {
                    tileArray[activeChar.onTile].occupiedBy[i].useDoor();
                }
            }
            clearNodes();
            
            // Ist durch das öffnen der Tür ein Feind in Alarmbereitschaft versetzt worden?
            enemyVisibility();
            // Sind jetzt Feinde in Alarmbereitschaft, die es vorher nicht waren wird in den Kampfmodus gewechselt
            checkFightmode();
            showActions(activeChar);
		});
        doorButton.setDepth(1);
        
        moveButton = this.add.sprite(400, 400, 'moveSprite').setAlpha(0);
        // state: 0 nothing
        // state: 1 planning
        // state: 2 enemy moving
        // state: 3 chars moving
        moveButton.setInteractive();
		moveButton.on("pointerup", function pointerUp() {
            moveButton.state = 1;
            hideActions();
            moveButton.setAlpha(1);
            moveButton.setScale(0.5);
		});
        moveButton.setDepth(1);
        
        attackButton = this.add.sprite(400, 400, 'attackSprite').setAlpha(0);
        // state: 0 nothing
        // state: 1 planning Close Combat
        // state: 2 planning Ranged Combat
        // state: 3 possible Ranged Combat
        attackButton.setInteractive();
		attackButton.on("pointerup", function pointerUp() {
            if (attackButton.state == 3) {
                attackButton.state = 2;
            } else {
                attackButton.state = 1;
            }
            hideActions();
            attackButton.setAlpha(1);
            attackButton.setScale(0.5);
        });
        attackButton.setDepth(1);
        
        searchButton = this.add.sprite(400, 400, 'searchSprite').setAlpha(0);
        // state: 0 nothing
        // state: 1 planning
        searchButton.setInteractive();
		searchButton.on("pointerup", function pointerUp() {
            searchButton.state = 1;
            hideActions();
            searchButton.setAlpha(1);
            searchButton.setScale(0.5);
		});
        searchButton.setDepth(1);
        
        specialButton = this.add.sprite(400, 400, 'specialSprite').setAlpha(0);
        specialButton.setInteractive();
        // state: 0 nothing
        // state: 1 disableTrap
        // state: 2 setUpCamp
        // state: 3 goCamping
		specialButton.on("pointerup", function pointerUp() {
            if (specialButton.state == 1) {
                specialButton.state = 0;
                trap1.disableTrap();
            } else if (specialButton.state == 2) {
                specialButton.state = 0;
                camp.setUp();
            } else if (specialButton.state == 3) {
                specialButton.state = 0;
                camp.use();
            }
		});
        specialButton.setDepth(1);
        
        restShortButton = this.add.sprite(400, 400, 'restShort').setAlpha(0);
        restShortButton.setInteractive();
		restShortButton.on("pointerup", function pointerUp() {
            
		});
        restShortButton.setDepth(1);
        
        restLongButton = this.add.sprite(400, 400, 'restLong').setAlpha(0);
        restLongButton.setInteractive();
		restLongButton.on("pointerup", function pointerUp() {
            
		});
        restLongButton.setDepth(1);
        
        alchemyButton = this.add.sprite(400, 400, 'alchemy').setAlpha(0);
        alchemyButton.setInteractive();
		alchemyButton.on("pointerup", function pointerUp() {
            
		});
        alchemyButton.setDepth(1);
        
        faceButton = this.add.sprite(400, 400, 'faceSprite').setAlpha(0);
        faceButton.setDepth(1);
        enemyHealthBase = this.add.sprite(400, 400, 'enemyHealthSprite').setAlpha(0).setFrame(1);
        enemyHealthBar = this.add.graphics();
        enemyHealthBar.x = 0;
        enemyHealthBar.y = 0;
        enemyHealthBase.setDepth(1);
        enemyHealthBar.setDepth(1);
        
        cancelButton = this.add.sprite(400, 400, 'cancelSprite').setAlpha(0);
        cancelButton.setInteractive();
        cancelButton.on("pointerup", function pointerUp() {
            hideActions();
            deactivateFigures();
		});
        cancelButton.setDepth(1);
        
        
        // Erstellt die drei Spielfiguren
        barb = new Figure ({scene:this, x:20, y:20}, 'barbSprite');
        barb.onTile = barbStartingPosition[level];
        barb.dieSize = 12;
        barb.health = 12;
        barb.fullHealth = 12;
        barb.name = "Rhiva";
        barb.color = "#914A23";
        barb.description = 1;
        figuresOnMap.push(barb);
        
        rogue = new Figure ({scene:this, x:20, y:20}, 'rogueSprite');
        rogue.onTile = rogueStartingPosition[level];
        rogue.dieSize = 8;
        rogue.health = 8;
        rogue.fullHealth = 8;
        rogue.name = "Leng";
        rogue.color = "#003F5E";
        rogue.description = 2;
        rogue.skills.stealth.trained = true;
        rogue.skills.swim = true;
        figuresOnMap.push(rogue);
        
        mage = new Figure ({scene:this, x:20, y:20}, 'mageSprite');
        mage.onTile = mageStartingPosition[level];
        mage.dieSize = 4;
        mage.explodes = true;
        mage.health = 4;
        mage.fullHealth = 4;
        mage.name = "Caelith";
        mage.color = "#455059";
        mage.description = 0;
        figuresOnMap.push(mage);
        
        createEnemies(this);
        buildLevel();
        createFrameAnimations(this);
        enemyVisibility();
        checkFightmode();
        
        bgmusic = game.sound.add(bgMusic[level]);
        bgmusic.volume = 0.3;
        bgmusic.loop = true;
        bgmusic.play();
        melee_hits[0] = game.sound.add("melee_hit_1_sound");
        melee_hits[1] = game.sound.add("melee_hit_2_sound");
        melee_hits[2] = game.sound.add("melee_hit_3_sound");
        melee_hits[3] = game.sound.add("melee_hit_4_sound");
        melee_misses[0] = game.sound.add("melee_miss_1_sound");
        melee_misses[1] = game.sound.add("melee_miss_2_sound");
        spells[0] = game.sound.add("magic_1_sound");
        spells[1] = game.sound.add("magic_2_sound");
        
	}
    
    update () {
        
        if (moveButton.state == 1) {
        // Plane Bewegung
            moveButton.x = this.game.input.activePointer.x + 50;
            moveButton.y = this.game.input.activePointer.y + 50;
        } else if (moveButton.state == 2 && strikeFX1.anims.isPlaying == false) {
        // Starte Bewegung
            activeChar.moveNow();
        }
        
        if (searchButton.state == 1) {
        // Plane etwas anzusehen
            searchButton.x = this.game.input.activePointer.x + 50;
            searchButton.y = this.game.input.activePointer.y + 50;
        }
            
        if (attackButton.state == 1 || attackButton.state == 2) {
        // Plane etwas anzugreifen
            attackButton.x = this.game.input.activePointer.x + 50;
            attackButton.y = this.game.input.activePointer.y + 50;
        }
        
        swirl1.rotation += 0.01;
        swirl2.rotation -= 0.02;
        
    }
    
}

class SceneB extends Phaser.Scene {

    constructor () {
        super({ key: 'sceneB' });
    }

    create () {
        
        let screenB_BG = this.add.image(960, 540, 'screenB_BG');
        
        this.input.manager.enabled = true;
        this.input.on('pointerdown', function () {
            this.scene.switch('sceneGame');
        }, this);
        
    }

}

class SceneR extends Phaser.Scene {

    constructor () {
        super({ key: 'sceneR' });
    }

    create () {
        
        let screenR_BG = this.add.image(960, 540, 'screenR_BG');
        
        this.input.manager.enabled = true;
        this.input.on('pointerdown', function () {
            this.scene.switch('sceneGame');
        }, this);
        
    }

}

class SceneM extends Phaser.Scene {

    constructor () {
        super({ key: 'sceneM' });
    }

    create () {
        
        let screenM_BG = this.add.image(960, 540, 'screenM_BG');
        
        this.input.manager.enabled = true;
        this.input.on('pointerdown', function () {
            this.scene.switch('sceneGame');
        }, this);
        
    }

}
