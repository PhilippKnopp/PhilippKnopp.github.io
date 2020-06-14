const idol = {
    modifyWalkability: function (baseWalkability, lookForTargets) {
        if (lookForTargets == false) {
            for (let i = 0; i < baseWalkability.length; i++) {
                baseWalkability[i] = 0;
            }
        }
        return baseWalkability;
    },
    lookAtThis: function () {
        showText(textL1[14]);
    },
    destroy: function () {
        eventReminder.e7 = true;
        showText(textL1[46], mage, textL1[47], rogue, textL1[48]);
        xpIcon.addXP (20);
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
                xpIcon.addXP(12);
            }
        }
    }
};

const trap1 = {
    detected: = false,
    lookAtThis: function () {
        showText(textL1[7]);
        trap1Sprt.setAlpha(1);
        detected = true;
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
        xpIcon.addXP(8);
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
    stepOnThisObject: function () {
        game.scene.keys.sceneGame.cameras.main.fadeOut(500);
        game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
            camera.fadeIn(700);
        }, game.scene.keys.sceneGame);
        showText (textL1[22], activeChar, textL1[23]);
    }
}

const event5 = {
    stepOnThisObject: function () {
        game.scene.keys.sceneGame.cameras.main.fadeOut(500);
        game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
            camera.fadeIn(700);
        }, game.scene.keys.sceneGame);
        showText (textL1[22], activeChar, textL1[23]);
    }
}

const event6 = {
    stepOnThisObject: function () {
        activeChar.pathToTravel.length = 0;
        showText(textL1[43], mage, textL1[44]);
        tileArray[606].occupiedBy.splice(tileArray[606].occupiedBy.indexOf(this), 1);
    }
}

const event8 = {
    endLevel: function () {
        showText (textL1[15]);
    }
}

const door1 = {
    open: false,
    modifyWalkability: function (baseWalkability, lookForTargets) {
        if (this.open == false ) {
            for (let i = 0; i < baseWalkability.length; i++) {
                baseWalkability[i] = 0;
            }
        } else {
            return baseWalkability;
        }
    }
}

const door1trigger = {
    useDoor: function () {
        if (door1.open == false) {
            door1Img.setAlpha(1);
            door1.open = true;
            if (eventReminder.e2 != true) {
                eventReminder.e2 = true;
                showText (textL1[21]);
            }
        } else if (door1.open) {
            door1Img.setAlpha(0);
            door1.open = false;
        }
    }
}

const door2 = {
    open: false,
    modifyWalkability: function (baseWalkability, lookForTargets) {
        if (this.open == false ) {
            for (let i = 0; i < baseWalkability.length; i++) {
                baseWalkability[i] = 0;
            }
        } else {
            return baseWalkability;
        }
    }
}

const door2trigger = {
    useDoor: function () {
        if (door2.open == false) {
            door2Img.setAlpha(1);
            door2.open = true;
            if (eventReminder.e4 != true) {
                eventReminder.e4 = true;
                showText (textL1[38], figuresOnMap[figuresOnMap.length - 2], textL1Enemy[1]);
            }
        } else if (door2.open) {
            door2Img.setAlpha(0);
            door2.open = false;
        }
    }
}

const door4 = {
    open: false,
    modifyWalkability: function (baseWalkability, lookForTargets) {
        if (this.open == false) {
            if (baseWalkability[4] == 0 ) {
                baseWalkability[5] = 0;
            } else {
                baseWalkability[1] = 0;
            }
        } else {
            return baseWalkability;
        }
    },
    useDoor: function () {
        if (this.open == false) {
            door4Img.setAlpha(1);
            this.open = true;
        } else if (this.open) {
            door4Img.setAlpha(0);
            this.open = false;
        }
    }
}

const door4trigger = {
    useDoor: function () {
        door4.useDoor();
    }
}

const door5 = {
    open: false,
    modifyWalkability: function (baseWalkability, lookForTargets) {
        if (this.open == false) {
            if (baseWalkability[2] == 0 ) {
                baseWalkability[3] = 0;
            } else {
                baseWalkability[7] = 0;
            }
        } else {
            return baseWalkability;
        }
    },
    useDoor: function () {
        if (this.open == false) {
            door5Img.setAlpha(1);
            this.open = true;
        } else if (this.open) {
            door5Img.setAlpha(0);
            this.open = false;
        }
    }
}

const door5trigger = {
    useDoor: function () {
        door5.useDoor();
    }
}

const door6 = {
    open: true,
    modifyWalkability: function (baseWalkability, lookForTargets) {
        if (this.open == false) {
            if (baseWalkability[2] == 0 ) {
                baseWalkability[3] = 0;
            } else {
                baseWalkability[7] = 0;
            }
        } else {
            return baseWalkability;
        }
    },
    useDoor: function () {
        if (this.open == false) {
            door6Img.setAlpha(1);
            this.open = true;
        } else if (this.open) {
            door6Img.setAlpha(0);
            this.open = false;
        }
    }
}

const door6trigger = {
    useDoor: function () {
        door6.useDoor();
    }
}