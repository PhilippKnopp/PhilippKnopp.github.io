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