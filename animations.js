////////// Erstellt alle Frame Animationen //////////////////////////////////////////////////////////


function createFrameAnimations(_this) {
    
    strikeFX1 = _this.add.sprite(0, 0, 'attackFX1').setVisible(false);
    _this.anims.create({key: 'strike1', frames: _this.anims.generateFrameNumbers('attackFX1', { start: 0, end: 7 }), showOnStart: true, hideOnComplete: true});
    
    spellFX1 = _this.add.sprite(0, 0, 'attackFX10').setAlpha(0).setScale(0.66).setOrigin(0.8, 0.5);
    _this.anims.create({key: 'spell1', frames: _this.anims.generateFrameNumbers('attackFX10', { start: 0, end: 7 }), repeat: -1});
    spellFX1.on('animationstart', spellFX1_animStart, this);
    
    _this.anims.create({ key: 'bRollDie', frames: _this.anims.generateFrameNumbers("bPortraitUISprite", { frames: [ 3,4,5,6,7,6,5,4,3 ] }) });
    _this.anims.create({ key: 'rRollDie', frames: _this.anims.generateFrameNumbers("rPortraitUISprite", { frames: [ 3,4,5,6,7,6,5,4,3 ] }) });
    _this.anims.create({ key: 'mRollDie', frames: _this.anims.generateFrameNumbers("mPortraitUISprite", { frames: [ 3,4,5,6,7,6,5,4,3 ] }) });
    bPortraitIcon.on('animationcomplete', bPortraitIcon_animComplete, this);
    rPortraitIcon.on('animationcomplete', rPortraitIcon_animComplete, this);
    mPortraitIcon.on('animationcomplete', mPortraitIcon_animComplete, this);
}

function bPortraitIcon_animComplete (animation, frame) {
    bRollText.setVisible(true);
}
function rPortraitIcon_animComplete (animation, frame) {
    rRollText.setVisible(true);
}
function mPortraitIcon_animComplete (animation, frame) {
    mRollText.setVisible(true);
}

function showAttackFX(attacker, victim) {
    strikeFX1.x = attacker.x;
    strikeFX1.y = attacker.y;
    strikeFX1.setRotation(Phaser.Math.Angle.Between(attacker.x, attacker.y, victim.x, victim.y)+0.1);
    strikeFX1.setDepth(1);
    strikeFX1.anims.play('strike1');
}

function spellFX1_animStart (animation, frame) {
    
    attackButton.state == 0;
    
    game.scene.keys.sceneGame.tweens.add( {
        targets: spellFX1,
        duration: 150,
        alpha: 1
    } );
    
}

function showSpellFX(attacker, victim) {
    spellFX1.x = attacker.x;
    spellFX1.y = attacker.y;
    spellFX1.setRotation(Phaser.Math.Angle.Between(attacker.x, attacker.y, victim.x, victim.y));
    
    game.scene.keys.sceneGame.tweens.add( {
        targets: spellFX1,
        duration: Phaser.Math.Distance.BetweenPoints(attacker, victim)*0.5+150,
        x: victim.x,
        y: victim.y,
        onComplete: function () {
            spellFX1.setAlpha(0);
            attackButton.state == 2;
            
            if (victim.health > 0) {
                enemyHealthBar.clear();
                victim.showFace();
            } else {
                victim.checkHealth();
                victim.hideFace();
                enemyHealthBar.clear();
            }
            
            if (rangedDamage[0] == 0) {
                returnCursorToNormal();
                showActions(attacker);
            }
        }
    } );
    
    spellFX1.setDepth(1);
    spellFX1.anims.play('spell1');
}