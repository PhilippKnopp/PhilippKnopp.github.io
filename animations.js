// JavaScript Document

////////// Erstellt alle Tweens (kleine Animationen) //////////////////////////////////////////////////////////

function createMovementTweens(_this) {
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
}

damageBTween = _this.tweens.add({
        targets: barDamageB,
        /*x: { value: function () {
            ((barb.health/barb.fullHealth)*320)+847;
        }},*/
        alpha: 0,
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            barDamageB.setAlpha(1);
            barDamageB.x = barHealthB.x;
        },
        onCompleteScope: movementTween
    }).stop();

damageRTween = _this.tweens.add({
        targets: barDamageR,
        /*x: { value: function () {
            ((barb.health/barb.fullHealth)*320)+847;
        }},*/
        alpha: 0,
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            barDamageR.setAlpha(1);
            barDamageR.x = barHealthR.x;
        },
        onCompleteScope: movementTween
    }).stop();

damageMTween = _this.tweens.add({
        targets: barDamageM,
        /*x: { value: function () {
            ((barb.health/barb.fullHealth)*320)+847;
        }},*/
        alpha: 0,
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            barDamageM.setAlpha(1);
            barDamageM.x = barHealthM.x;
        },
        onCompleteScope: movementTween
    }).stop();