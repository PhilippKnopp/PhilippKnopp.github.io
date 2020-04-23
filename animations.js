// JavaScript Document

////////// Erstellt alle Tweens (kleine Animationen) //////////////////////////////////////////////////////////

function createMovementTweens(_this, target, tweenName) {
    tweenName = _this.tweens.add({
        targets: target,
        x: { value: function () {
            return tileArray[target.pathToTravel[0]].x;
        }},
        y: { value: function () { 
            return tileArray[target.pathToTravel[0]].y;
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            target.enterTile();
        },
        onCompleteScope: tweenName;
    });
    
    /*movementTweenMage = _this.tweens.add({
        targets: mage,
        x: { value: function () {
            return tileArray[mage.pathToTravel[0]].x;
        }},
        y: { value: function () { 
            return tileArray[mage.pathToTravel[0]].y;
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            mage.enterTile();
        },
        onCompleteScope: movementTweenMage
    });
    
    movementTweenRogue = _this.tweens.add({
        targets: rogue,
        x: { value: function () {
            return tileArray[rogue.pathToTravel[0]].x;
        }},
        y: { value: function () { 
            return tileArray[rogue.pathToTravel[0]].y;
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            rogue.enterTile();
        },
        onCompleteScope: movementTweenRogue
    });
    
    movementTweenBarb = _this.tweens.add({
        targets: barb,
        x: { value: function () {
            return tileArray[barb.pathToTravel[0]].x;
        }},
        y: { value: function () { 
            return tileArray[barb.pathToTravel[0]].y;
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            barb.enterTile();
        },
        onCompleteScope: movementTweenBarb
    });
    
    movementTweenCaveCrawler = _this.tweens.add({
        targets: caveCrawler,
        x: { value: function () {
            return tileArray[caveCrawler.pathToTravel[0]].x;
        }},
        y: { value: function () { 
            return tileArray[caveCrawler.pathToTravel[0]].y;
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            caveCrawler.enterTile();
        },
        onCompleteScope: movementTweenCaveCrawler
    });
    
    movementTweenPaleAcolyte = _this.tweens.add({
        targets: paleAcolyte,
        x: { value: function () {
            return tileArray[paleAcolyte.pathToTravel[0]].x;
        }},
        y: { value: function () { 
            return tileArray[paleAcolyte.pathToTravel[0]].y;
        }},
        duration: 250,
        ease: 'Sine.easeInOut',
        onComplete: function () {
            paleAcolyte.enterTile();
        },
        onCompleteScope: movementTweenPaleAcolyte
    });
    */
}