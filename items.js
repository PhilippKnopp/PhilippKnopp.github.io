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
    detected: false,
    lookAtThis: function () {
        showText(textL1[7]);
        trap1Sprt.setAlpha(1);
        this.detected = true;
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
        game.scene.keys.sceneGame.cameras.main.fadeOut(500, 12, 14, 17);
        game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
            camera.fadeIn(700);
        }, game.scene.keys.sceneGame);
        showText (textL1[22], activeChar, textL1[23]);
    }
}

const event5 = {
    stepOnThisObject: function () {
        game.scene.keys.sceneGame.cameras.main.fadeOut(500, 12, 14, 17);
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
        skipText.setText("End Level (Space)");
    }
}

const door1 = {
    open: false,
    canBeClosed: function (arrayAll) {
        let array = [arrayAll[315], arrayAll[316], arrayAll[317]];
        for (let i = 0; i < array.length; i++) {
            if (containsObject(this, array[i].occupiedBy) && (checkFor (array[i].occupiedBy, Figure) || checkFor (array[i].occupiedBy, Enemy))) {
                return false;
            }
        }
        return true;
    },
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
    canBeClosed: function (array) { return door1.canBeClosed(array); },
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
    canBeClosed: function (arrayAll) {
        let array = [arrayAll[565], arrayAll[567], arrayAll[568]];
        for (let i = 0; i < array.length; i++) {
            if (containsObject(this, array[i].occupiedBy) && (checkFor (array[i].occupiedBy, Figure) || checkFor (array[i].occupiedBy, Enemy))) {
                return false;
            }
        }
        return true;
    },
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
    canBeClosed: function (array) { return door2.canBeClosed(array); },
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
    canBeClosed: function () { return true; },
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
    canBeClosed: function () { return true; },
    useDoor: function () {
        door4.useDoor();
    }
}

const door5 = {
    open: false,
    canBeClosed: function () { return true; },
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
    canBeClosed: function () { return true; },
    useDoor: function () {
        door5.useDoor();
    }
}

const door6 = {
    open: true,
    canBeClosed: function () { return true; },
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
    canBeClosed: function () { return true; },
    useDoor: function () {
        door6.useDoor();
    }
}

const ritual = {
    progress: 13,
    members: 5,
    state: "",
    modifyWalkability: function (baseWalkability, lookForTargets) {
        if (this.state == "started" || this.state == "") {
            for (let i = 0; i < baseWalkability.length; i++) {
                baseWalkability[i] += 6;
            }
        }
        return baseWalkability;
    },
    incantate: function (energy) {
        this.progress -= energy;
        if (this.progress <= 0) {
            this.progress = 0;
            circle1Img.setAlpha(1);
            this.state = "succesful";
            let ordrak = figuresOnMap[figuresOnMap.findIndex((element) => element.name == "Ordrak")];
            ordrak.setOnMap();
            showText(textL1[45]);
        } else {
            circle1Img.setAlpha(1-(this.progress/13));
            this.state = "started";
        }
    },
    priestDied: function () {
        if (this.state != "succesful") {
            this.members -= 1;
            if (this.members <= 0) {
                this.state = "failed";
                circle1Img.setAlpha(0);
                let ordrak = figuresOnMap[figuresOnMap.findIndex((element) => element.name == "Ordrak")];
                ordrak.health = 0;
                swirl1.setVisible(false);
                swirl2.setVisible(false);
                ordrak.checkHealth();
            }
        }
    }
}

const camp = {
    isReady: false,
    camping: false,
    setUp: function () {
        this.moveToCamp();
    },
    use: function () {
        this.moveToCamp();
    },
    moveToCamp: function () {
        deactivateFigures();
        hideActions();
        barb.hideFace();
        
        game.scene.keys.sceneGame.cameras.main.fadeOut(500, 12, 14, 17);
        game.scene.keys.sceneGame.cameras.main.once('camerafadeoutcomplete', function (camera) {
            
            tileArray[barb.onTile].occupiedBy.splice(tileArray[barb.onTile].occupiedBy.indexOf(barb), 1);
            barb.onTile = campPositions[level] - matrixWidth;
            tileArray[barb.onTile].occupiedBy.push(barb);
            barb.x = tileArray[barb.onTile].x;
            barb.y = tileArray[barb.onTile].y;
            
            tileArray[rogue.onTile].occupiedBy.splice(tileArray[rogue.onTile].occupiedBy.indexOf(rogue), 1);
            rogue.onTile = campPositions[level] + matrixWidth - 1;
            tileArray[rogue.onTile].occupiedBy.push(rogue);
            rogue.x = tileArray[rogue.onTile].x;
            rogue.y = tileArray[rogue.onTile].y;
            
            tileArray[mage.onTile].occupiedBy.splice(tileArray[mage.onTile].occupiedBy.indexOf(mage), 1);
            mage.onTile = campPositions[level] + 1;
            tileArray[mage.onTile].occupiedBy.push(mage);
            mage.x = tileArray[mage.onTile].x;
            mage.y = tileArray[mage.onTile].y;
            
            camera.fadeIn(700);
        }, game.scene.keys.sceneGame);
        
        game.scene.keys.sceneGame.cameras.main.once('camerafadeincomplete', function (camera) {
            camp.camping = true;
            barb.activateFigure();
        }, game.scene.keys.sceneGame);
    }
}
