// JavaScript Document

////////// Erstellt alle Tweens (kleine Animationen) //////////////////////////////////////////////////////////

function createMovementTweens(_this, target, tweenName) {
    movementTween = _this.tweens.add({
        targets: movementMarker,
        x: { value: function () {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            return tileArray[activeChar.pathToTravel[0]].x;
        }},
        y: { value: function () { 
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            return tileArray[activeChar.pathToTravel[0]].y;
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            activeChar.enterTile();
        },
        onCompleteScope: movementTween
    });
}