function guiBuilder(_this) {
    
    var gui_bg = _this.add.image(1167, 745, 'gui_bg');
    
    barDamageB = _this.add.sprite(1167, 615, 'barDamage');
    barHealthB = _this.add.image(1167, 615, 'barHealth');
    barMovementB = _this.add.image(1167, 658, 'barMovement');
    barDamageR = _this.add.sprite(1167, 725, 'barDamage');
    barHealthR = _this.add.image(1167, 725, 'barHealth');
    barMovementR = _this.add.image(1167, 768, 'barMovement');
    barDamageM = _this.add.sprite(1167, 835, 'barDamage');
    barHealthM = _this.add.image(1167, 835, 'barHealth');
    barMovementM = _this.add.image(1167, 878, 'barMovement');
    
    barHealthB.looseHP = function () {
        barDamageB.setFrame(0);
        barDamageB.setAlpha(1);
        barHealthB.x = ((barb.health/barb.fullHealth)*320)+847;
        game.scene.keys.sceneGame.tweens.add( {
            targets: barDamageB,
            alpha: 0,
            delay: 50,
            duration: 500,
            ease: 'Sine.easeInOut',
            onComplete: function () {
                barDamageB.x = barHealthB.x;
            }
        } );
    };
    barHealthB.gainHP = function () {
        barDamageB.setFrame(1);
        barDamageB.setAlpha(0);
        barDamageB.x = ((barb.health/barb.fullHealth)*320)+847;
        game.scene.keys.sceneGame.tweens.add( {
            targets: barDamageB,
            alpha: 1,
            duration: 500,
            ease: 'Sine.easeInOut',
            onComplete: function () {
                game.scene.keys.sceneGame.tweens.add( {
                    targets: barHealthB,
                    x: barDamageB.x,
                    duration: 300,
                    ease: 'Sine.easeInOut'
                } );
            }
        } );
    };
    barHealthR.looseHP = function () {
        barDamageR.setFrame(0);
        barDamageR.setAlpha(1);
        barHealthR.x = ((rogue.health/rogue.fullHealth)*320)+847;
        game.scene.keys.sceneGame.tweens.add( {
            targets: barDamageR,
            alpha: 0,
            delay: 50,
            duration: 500,
            ease: 'Sine.easeInOut',
            onComplete: function () {
                barDamageR.x = barHealthR.x;
            }
        } );
    };
    barHealthR.gainHP = function () {
        barDamageR.setFrame(1);
        barDamageR.setAlpha(0);
        barDamageR.x = ((rogue.health/rogue.fullHealth)*320)+847;
        game.scene.keys.sceneGame.tweens.add( {
            targets: barDamageR,
            alpha: 1,
            duration: 500,
            ease: 'Sine.easeInOut',
            onComplete: function () {
                game.scene.keys.sceneGame.tweens.add( {
                    targets: barHealthR,
                    x: barDamageR.x,
                    duration: 300,
                    ease: 'Sine.easeInOut'
                } );
            }
        } );
    };
    barHealthM.looseHP = function () {
        barDamageM.setFrame(0);
        barDamageM.setAlpha(1);
        barHealthM.x = ((mage.health/mage.fullHealth)*320)+847;
        game.scene.keys.sceneGame.tweens.add( {
            targets: barDamageM,
            alpha: 0,
            delay: 50,
            duration: 500,
            ease: 'Sine.easeInOut',
            onComplete: function () {
                barDamageM.x = barHealthM.x;
            }
        } );
    };
    barHealthM.gainHP = function () {
        barDamageM.setFrame(1);
        barDamageM.setAlpha(0);
        barDamageM.x = ((mage.health/mage.fullHealth)*320)+847;
        game.scene.keys.sceneGame.tweens.add( {
            targets: barDamageM,
            alpha: 1,
            duration: 500,
            ease: 'Sine.easeInOut',
            onComplete: function () {
                game.scene.keys.sceneGame.tweens.add( {
                    targets: barHealthM,
                    x: barDamageM.x,
                    duration: 300,
                    ease: 'Sine.easeInOut'
                } );
            }
        } );
    };
    
    var gui = _this.add.image(1301, 540, 'gui');
    
////////////// Buttons Text History ////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    textBackButton = _this.add.sprite(1621, 485, 'textBackSprite');
    textBackButton.setInteractive();
    textBackButton.on("pointerover", function pointerOver() { this.setFrame(1); });
    textBackButton.on("pointerdown", function pointerDown() {
        this.setFrame(2);
        if (textHistoryIndex > 5) {
            showText (textHistory[textHistoryIndex-11], textHistory[textHistoryIndex-10], textHistory[textHistoryIndex-9], textHistory[textHistoryIndex-8], textHistory[textHistoryIndex-7], textHistory[textHistoryIndex-6], false);
            textHistoryIndex -= 6;
        }
    });
    textBackButton.on("pointerup", function pointerUp() { this.setFrame(1); });
    textBackButton.on("pointerout", function pointerOut() { this.setFrame(0); });
    
    textNextButton = _this.add.sprite(1705, 485, 'textForwardSprite');
    textNextButton.setInteractive();
    textNextButton.on("pointerover", function pointerOver() { this.setFrame(1); });
    textNextButton.on("pointerdown", function pointerDown() {
        this.setFrame(2);
        if (textHistoryIndex < textHistory.length-6) {
            showText (textHistory[textHistoryIndex+1], textHistory[textHistoryIndex+2], textHistory[textHistoryIndex+3], textHistory[textHistoryIndex+4], textHistory[textHistoryIndex+5], textHistory[textHistoryIndex+6], false);
            textHistoryIndex += 6;
        }
    });
    textNextButton.on("pointerup", function pointerUp() { this.setFrame(1); });
    textNextButton.on("pointerout", function pointerOut() { this.setFrame(0); });

    textNewButton = _this.add.sprite(1789, 485, 'textNewSprite');
    textNewButton.setInteractive();
    textNewButton.on("pointerover", function pointerOver() { this.setFrame(1); });
    textNewButton.on("pointerdown", function pointerDown() {
        this.setFrame(2);
        if (textHistoryIndex < textHistory.length-6) {
            showText (textHistory[textHistory.length-6], textHistory[textHistory.length-5], textHistory[textHistory.length-4], textHistory[textHistory.length-3], textHistory[textHistory.length-2], textHistory[textHistory.length-1], false);
            textHistoryIndex = textHistory.length-1;
        }
    });
    textNewButton.on("pointerup", function pointerUp() { this.setFrame(1); });
    textNewButton.on("pointerout", function pointerOut() { this.setFrame(0); });
    
////////////// Buttons Footer /// ////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    tutorialButton = _this.add.sprite(1621, 1008, 'tutorialSprite');
    tutorialButton.setInteractive();
    tutorialButton.on("pointerover", function pointerOver() { this.setFrame(1); });
    tutorialButton.on("pointerdown", function pointerDown() { this.setFrame(2); });
    tutorialButton.on("pointerup", function pointerUp() { this.setFrame(1); });
    tutorialButton.on("pointerout", function pointerOut() { this.setFrame(0); });
    
    settingsButton = _this.add.sprite(1705, 1008, 'settingsSprite');
    settingsButton.setInteractive();
    settingsButton.on("pointerover", function pointerOver() { this.setFrame(1); });
    settingsButton.on("pointerdown", function pointerDown() { this.setFrame(2); });
    settingsButton.on("pointerup", function pointerUp() { this.setFrame(1); });
    settingsButton.on("pointerout", function pointerOut() { this.setFrame(0); });

    menuButton = _this.add.sprite(1789, 1008, 'menuSprite');
    menuButton.setInteractive();
    menuButton.on("pointerover", function pointerOver() { this.setFrame(1); });
    menuButton.on("pointerdown", function pointerDown() { this.setFrame(2); });
    menuButton.on("pointerup", function pointerUp() { this.setFrame(1); });
    menuButton.on("pointerout", function pointerOut() { this.setFrame(0); });

////////////// Text Messages //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // beschreibender Text
    Info1 = _this.add.text(950, 40, "", { fontFamily: "Verdana" , color: '#999999', lineSpacing: 12, wordWrap: { width: 866, useAdvancedWrap: true } });
    Info1.showMessage = function (text) {
        Info1.setText(text);
    };
    
    // Dialog Name 1
    InfoName1 = _this.add.text(950, Info1.getBottomLeft().y+20, "", { fontFamily: "Verdana" , color: '#999999', lineSpacing: 12 }).setFontStyle('bold');
    InfoName1.showName = function (char) {
        if (typeof char === 'object') {
            InfoName1.setText(char.name + ": ");
            InfoName1.setColor(char.color);
        } else {
            InfoName1.setText(char);
            InfoName1.setColor('#999999');
        }
        if (Info1.text == "") {
            InfoName1.setPosition(950, 40);
        } else {
            InfoName1.setPosition(950, Info1.getBottomLeft().y+20);
        }
    };
    
    // Dialog Text 1
    InfoDialog1 = _this.add.text(InfoName1.getBottomRight().x, InfoName1.getTopRight().y, "", { fontFamily: "Verdana" , color: '#dddddd', lineSpacing: 12, wordWrap: { width: 750, useAdvancedWrap: true } });
    InfoDialog1.showMessage = function (text) {
        InfoDialog1.setText(text);
        InfoDialog1.setPosition(InfoName1.getBottomRight().x, InfoName1.getTopRight().y);
    };
    
    // Dialog Name 2
    InfoName2 = _this.add.text(950, InfoName1.getBottomLeft().y+20, "", { fontFamily: "Verdana" , color: '#999999', lineSpacing: 12 }).setFontStyle('bold');
    InfoName2.showName = function (char) {
        if (typeof char === 'object') {
            InfoName2.setText(char.name + ": ");
            InfoName2.setColor(char.color);
        } else {
            InfoName2.setText(char);
            InfoName2.setColor('#999999');
        }
        if (InfoName1.text == "") {
            InfoName2.setPosition(950, InfoName1.getBottomLeft().y);
        } else {
            InfoName2.setPosition(950, InfoName1.getBottomLeft().y+20);
        }
    };
    
    // Dialog Text 2
    InfoDialog2 = _this.add.text(InfoName2.getBottomRight().x, InfoName2.getTopRight().y, "", { fontFamily: "Verdana" , color: '#dddddd', lineSpacing: 12, wordWrap: { width: 750, useAdvancedWrap: true } });
    InfoDialog2.showMessage = function (text) {
        InfoDialog2.setText(text);
        InfoDialog2.setPosition(InfoName2.getBottomRight().x, InfoName2.getTopRight().y);
    };
    
    // Hilfe
    Info3 = _this.add.text(950, InfoDialog2.getBottomLeft().y+30, "", { fontFamily: "Verdana" , color: '#003F5E', lineSpacing: 12, wordWrap: { width: 866, useAdvancedWrap: true } });
    Info3.showMessage = function (text) {
        Info3.setText(text);
        Info3.setPosition(950, InfoDialog2.getBottomLeft().y+30);
    };
    
////////////// UI Icons //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    gameModeIcon = _this.add.sprite(977, 485, 'gameModeSprite');
    gameModeText = _this.add.text(1097, 475, "Exploration", { fontFamily: "Verdana" , color: '#FFFFFF'});
    
    xpIcon = _this.add.sprite(1258, 485, 'xpSprite');
    xpIcon.addXP = function (number) {
        xp += number;
        xpText.setText(xp);
        if (0 <= xp && xp < 25) {
            this.setFrame(0);
        } else if (25 <= xp && xp < 50) {
            this.setFrame(1);
        } else if (50 <= xp && xp < 75) {
            this.setFrame(2);
        } else if (75 <= xp && xp < 100) {
            this.setFrame(3);
        } else {
            this.setFrame(4);
            bSkillButton.setFrame(3);
            rSkillButton.setFrame(3);
            mSkillButton.setFrame(3);
        }
    }
    xpText = _this.add.text(1428, 475, xp, { fontFamily: "Verdana" , color: '#FFFFFF'});
    
    skipIcon = _this.add.sprite(977, 1008, 'skipSprite');
    skipIcon.changeFrame = function (a = 0) {
        if (enemyTurnActive == true || (fightmode == false && figuresOnMap.length > 3) ) {
            this.setFrame(3);
        } else if (enemyTurnActive == false && fightmode == true) {
            this.setFrame(0+a);
        } else if (figuresOnMap.length <= 3) {
            this.setFrame(4+a);
        }
    };
    skipIcon.setInteractive();
    skipIcon.on("pointerover", function pointerOver () { this.changeFrame(1); });
    skipIcon.on("pointerout", function pointerOut () { this.changeFrame(0); });
    skipIcon.on("pointerdown", function pointerDown () { this.changeFrame(2); });
	skipIcon.on("pointerup", function pointerUp () {
        if (fightmode == true && enemyTurnActive == false) {
            for (let i = 0; i < 3; i++) {
                figuresOnMap[i].hasActed = true;
            }
            hideActions();
            deactivateFigures();
            completeTurn();
        } else if (figuresOnMap.length <= 3) {
            skipIcon.setFrame(5);
            game.scene.keys.sceneGame.cameras.main.fadeOut(500, 12, 14, 17);
            game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
                game.scene.keys.sceneGame.scene.start('sceneTravel_2');
            }, game.scene.keys.sceneGame);
        }
    });
    skipText = _this.add.text(1039, 997, "End Turn (Space)", { fontFamily: "Verdana" , color: "#999999", fontStyle: "bold"});
    
    let skillButton = [];
    bSkillButton = _this.add.sprite(1420, 634, 'skillUISprite');
    skillButton.push(bSkillButton);
    rSkillButton = _this.add.sprite(1420, 744, 'skillUISprite');
    skillButton.push(rSkillButton);
    mSkillButton = _this.add.sprite(1420, 854, 'skillUISprite');
    skillButton.push(mSkillButton);
    
    for (let i = 0; i < 3; i++) {
        skillButton[i].setInteractive();
        skillButton[i].on("pointerdown", function pointerDown () {
            let levelup = Math.floor(xp/100)*3;
            this.setFrame(2+levelup);
        });
        skillButton[i].on("pointerup", function pointerUp () {
            let levelup = Math.floor(xp/100)*3;
            this.setFrame(1+levelup);
            if (this == bSkillButton) {
                game.scene.keys.sceneGame.scene.switch('sceneB');
            } else if (this == rSkillButton) {
                game.scene.keys.sceneGame.scene.switch('sceneR');
            } else {
                game.scene.keys.sceneGame.scene.switch('sceneM');
            }
        });
        skillButton[i].on("pointerover", function pointerOver () {
            let levelup = Math.floor(xp/100)*3;
            this.setFrame(1+levelup);
        });
        skillButton[i].on("pointerout", function pointerOut () {
            let levelup = Math.floor(xp/100)*3;
            this.setFrame(0+levelup);
        });
    }
    
    bActionIcon = _this.add.sprite(1322, 635, 'bAction');
    rActionIcon = _this.add.sprite(1322, 745, 'rAction');
    mActionIcon = _this.add.sprite(1322, 855, 'mAction');
    
    bHpText = _this.add.text(1110, 613, "12/12", { fontFamily: "Verdana" , color: '#FFFFFF'});
    rHpText = _this.add.text(1110, 723, "8/8", { fontFamily: "Verdana" , color: '#FFFFFF'});
    mHpText = _this.add.text(1110, 833, "4/4", { fontFamily: "Verdana" , color: '#FFFFFF'});
    
    bMovementText = _this.add.text(1144, 637, "6/6", { fontFamily: "Verdana" , color: '#FFFFFF'});
    rMovementText = _this.add.text(1144, 747, "6/6", { fontFamily: "Verdana" , color: '#FFFFFF'});
    mMovementText = _this.add.text(1144, 857, "6/6", { fontFamily: "Verdana" , color: '#FFFFFF'});
    
    bPortraitIcon = _this.add.sprite(977, 635, 'bPortraitUISprite');
    rPortraitIcon = _this.add.sprite(977, 745, 'rPortraitUISprite');
    mPortraitIcon = _this.add.sprite(977, 855, 'mPortraitUISprite');
    
    bRollText = _this.add.text(977, 635, "", { fontFamily: "Verdana" , color: '#FFFFFF', fontSize: '36px', align: 'center'}).setOrigin(0.5).setVisible(false);
    rRollText = _this.add.text(977, 745, "", { fontFamily: "Verdana" , color: '#FFFFFF', fontSize: '36px', align: 'center'}).setOrigin(0.5).setVisible(false);
    mRollText = _this.add.text(977, 855, "", { fontFamily: "Verdana" , color: '#FFFFFF', fontSize: '36px', align: 'center'}).setOrigin(0.5).setVisible(false);
}