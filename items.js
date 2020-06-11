const idol = {
    modifyWalkability: function (baseWalkability) {
        for (let i = 0; i < baseWalkability.length; i++) {
            baseWalkability[i] = 0;
        }
        return baseWalkability;
    },
    destroy: function () {
        eventReminder.e7 = true;
        showText(textL1[46], mage, textL1[47], rogue, textL1[48]);
        addXP (20);
        idol1Img.setAlpha(1);
        for (let i = 0; i < figuresOnMap.length; i++) {
            if (figuresOnMap[i].name == "Pale Priest") {
                figuresOnMap[i].specialAttack.roll.push(7);
                figuresOnMap[i].specialAttack.name.push("unholy energy");
            } else if (figuresOnMap[i].name == "Ordrak") {
                figuresOnMap[i].specialAttack.roll.push(7);
                figuresOnMap[i].specialAttack.name.push("darkness");
            }
        }
        tileArray[941].occupiedBy.splice(tileArray[941].occupiedBy.indexOf(this), 1);
    }
};

const crystal = {
    modifyWalkability: function (baseWalkability) {
        return baseWalkability;
    },
    stepOnThisObject: function () {
        if (fightmode == true && crystal1Img.alpha == 1) {
            showText ("", activeChar, textL1[42]);
        } else if (crystal1Img.alpha == 1) {
            if (activeChar == mage) {
                showText (textL1[24], activeChar, textL1[25]);
            } else if (activeChar == barb) {
                activeChar.health -= 1;
                activeChar.checkHealth();
                if (activeChar.health > 0) {
                    showText (textL1[26], activeChar, textL1[27]);
                } else {
                    showText (textL1[40], rogue, textL1[41]);
                }
            } else if (activeChar == rogue) {
                showText (textL1[28], activeChar, textL1[29]);
                tileArray[120].occupiedBy.splice(tileArray[120].occupiedBy.indexOf(this), 1);
                crystal1Img.setAlpha(0);
                addXP(12);
            }
        }
    }
};

const trap1 = {
    modifyWalkability: function (baseWalkability) {
        return baseWalkability;
    },
    lookAtThis: function () {
        showText(textL1[7]);
        trap1Sprt.setAlpha(1);
    },
    stepOnThisObject: function () {
        activeChar.pathToTravel.length = 0;
        trap1Sprt.setAlpha(1);
        trap1Sprt.setFrame(1);
        this.deleteFromTile();
        activeChar.pathToTravel.push(activeChar.onTile-2);
        activeChar.health -= getRandomInt(6);
        activeChar.checkHealth();
    },
    disableTrap: function () {
        if (getRandomInt(activeChar.dieSize, activeChar.explodes) <= 3) {
            activeChar.health -= 1;
            activeChar.checkHealth();
            if (activeChar == rogue) {
                showText(textL1[32], activeChar, textL1[33]);
            } else if (activeChar == mage) {
                showText(textL1[34], activeChar, textL1[35]);
            } 
        } else {
            if (activeChar == rogue) {
                showText(textL1[36]);
            } else if (activeChar == mage) {
                showText(textL1[37]);
            } 
        }
        addXP(8);
        trap1Sprt.setAlpha(1);
        trap1Sprt.setFrame(1);
        this.deleteFromTile();
        showActions(activeChar);
    },
    deleteFromTile: function () {
        tileArray[437].occupiedBy.splice(tileArray[437].occupiedBy.indexOf(this), 1);
        tileArray[438].occupiedBy.splice(tileArray[438].occupiedBy.indexOf(this), 1);
        tileArray[462].occupiedBy.splice(tileArray[462].occupiedBy.indexOf(this), 1);
        tileArray[463].occupiedBy.splice(tileArray[463].occupiedBy.indexOf(this), 1);
        tileArray[487].occupiedBy.splice(tileArray[487].occupiedBy.indexOf(this), 1);
        tileArray[488].occupiedBy.splice(tileArray[488].occupiedBy.indexOf(this), 1);
    }
}

const event1 = {
    startLevel: function () {
        showText (textL1[0], figuresOnMap[7], textL1Enemy[0], "", "", textL1[9]);
    }
}

const event3 = {
    modifyWalkability: function (baseWalkability) {
        return baseWalkability;
    },
    stepOnThisObject: function () {
        game.scene.keys.sceneGame.cameras.main.fadeOut(500);
        game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
            camera.fadeIn(700);
        }, game.scene.keys.sceneGame);
        showText (textL1[22], activeChar, textL1[23]);
    }
}

const event5 = {
    modifyWalkability: function (baseWalkability) {
        return baseWalkability;
    },
    stepOnThisObject: function () {
        game.scene.keys.sceneGame.cameras.main.fadeOut(500);
        game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
            camera.fadeIn(700);
        }, game.scene.keys.sceneGame);
        showText (textL1[22], activeChar, textL1[23]);
    }
}

const event6 = {
    modifyWalkability: function (baseWalkability) {
        return baseWalkability;
    },
    stepOnThisObject: function () {
        activeChar.pathToTravel.length = 0;
        showText(textL1[43], mage, textL1[44]);
        tileArray[606].occupiedBy.splice(tileArray[606].occupiedBy.indexOf(this), 1);
    }
}

/*

Finde Index von Object:
let index = tileArray[i].occupiedBy.indexOf(object);

Lösche item mit Index:
tileArray[i].occupiedBy.splice(index, 1);

*/