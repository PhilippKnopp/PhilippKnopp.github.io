// JavaScript Document

////////// Erstellt alle Tweens (kleine Animationen) //////////////////////////////////////////////////////////

function createMovementTweens(_this) {
    movementTween = _this.tweens.add({
        targets: movementMarker,
        x: { value: function () {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            if (activeChar != undefined) {
                return tileArray[activeChar.pathToTravel[0]].x;
            } else {
                console.log("fire");
                return 0;
            }
        }},
        y: { value: function () { 
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            if (activeChar != undefined) {
                return tileArray[activeChar.pathToTravel[0]].y;
            } else {
                console.log("fire");
                return 0;
            }
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            let activeChar = figuresOnMap[figuresOnMap.findIndex(findActiveChar)];
            if (activeChar != undefined) {
                activeChar.enterTile();
            }
        },
        onCompleteScope: movementTween
    }).stop();
}