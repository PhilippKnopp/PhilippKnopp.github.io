
////////// Erstellt alle Tweens (kleine Animationen) //////////////////////////////////////////////////////////

function createMovementTweens(_this) {
    
    // Bewegt einen Marker von Feld zu Feld mit dem Spielfiguren auf dem Spielfeld bewegt werden
    movementTween = _this.tweens.add({
        targets: movementMarker,
        x: { value: function () {
            if (activeChar != null) {
                return tileArray[activeChar.pathToTravel[0]].x;
            } else {
                return 0;
            }
        }},
        y: { value: function () {
            if (activeChar != null) {
                return tileArray[activeChar.pathToTravel[0]].y;
            } else {
                return 0;
            }
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            if (activeChar != null) {
                activeChar.enterTile();
            }
        },
        onCompleteScope: movementTween
    }).stop();
    
    // Animiert den Health Bar in der UI, wenn eine Heldin Schaden bekommt
    damageBTween = _this.tweens.add({
        targets: barDamageB,
        alpha: 0,
        delay: 50,
        duration: 300,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            barDamageB.setAlpha(1);
            barDamageB.x = barHealthB.x;
        },
        onCompleteScope: movementTween
    }).stop();
    
    // Animiert den Health Bar in der UI, wenn eine Heldin Schaden bekommt
    damageRTween = _this.tweens.add({
        targets: barDamageR,
        alpha: 0,
        delay: 50,
        duration: 300,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            barDamageR.setAlpha(1);
            barDamageR.x = barHealthR.x;
        },
        onCompleteScope: movementTween
    }).stop();
    
    // Animiert den Health Bar in der UI, wenn eine Heldin Schaden bekommt
    damageMTween = _this.tweens.add({
        targets: barDamageM,
        alpha: 0,
        delay: 50,
        duration: 300,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            barDamageM.setAlpha(1);
            barDamageM.x = barHealthM.x;
        },
        onCompleteScope: movementTween
    }).stop();
    
}

////////// Erstellt alle Frame Animationen //////////////////////////////////////////////////////////


function createFrameAnimations(_this) {
    
    strikeFX1 = _this.add.sprite(0, 0, 'attackFX1').setAlpha(0);
    _this.anims.create({key: 'strike1', frames: _this.anims.generateFrameNumbers('attackFX1', { start: 0, end: 7, first: 0 })});
    strikeFX1.on('animationcomplete', animComplete, this);
    
    spellFX1 = _this.add.sprite(0, 0, 'attackFX10').setAlpha(0).setScale(0.66).setOrigin(0.8, 0.5);
    _this.anims.create({key: 'spell1', frames: _this.anims.generateFrameNumbers('attackFX10', { start: 0, end: 7, first: 0 }), repeat: -1});
    spellFX1.on('animationstart', animStart, this);
}

function animComplete (animation, frame) {
    strikeFX1.setAlpha(0);
}

function animStart (animation, frame) {
    
    game.scene.keys.sceneGame.tweens.add( {
        targets: spellFX1,
        duration: 150,
        alpha: 1
    } );
    
}

function showAttackFX(attacker, victim) {
    strikeFX1.x = attacker.x;
    strikeFX1.y = attacker.y;
    strikeFX1.setRotation(Phaser.Math.Angle.Between(attacker.x, attacker.y, victim.x, victim.y)+0.1);
    strikeFX1.setAlpha(1);
    strikeFX1.setDepth(1);
    strikeFX1.anims.play('strike1');
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
        }
    } );
    
    spellFX1.setDepth(1);
    spellFX1.anims.play('spell1');
}

/*
function animComplete (animation, frame)
{
    //  Animation is over, let's fade the sprite out
    this.tweens.add({
        targets: gem,
        duration: 3000,
        alpha: 0
    });
}
*/