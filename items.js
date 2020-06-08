const idol = {
    denyLoS: false,
    modifyWalkability: function (baseWalkability) {
        for (let i = 0; i < baseWalkability.length; i++) {
            baseWalkability[i] = 0;
        }
        return baseWalkability;
    }
};

const crystal = {
    denyLoS: false,
    modifyWalkability: function (baseWalkability) {
        return baseWalkability;
    }
};

const trap1 = {
    denyLoS: false,
    modifyWalkability: function (baseWalkability) {
        return baseWalkability;
    },
    springTrap: function (victim) {
        victim.pathToTravel.length = 0;
        trap1Sprt.setAlpha(1);
        trap1Sprt.setFrame(1);
        tileArray[437].state = 0;
        tileArray[438].state = 0;
        tileArray[462].state = 0;
        tileArray[463].state = 0;
        tileArray[487].state = 0;
        tileArray[488].state = 0;
        victim.pathToTravel.push(victim.onTile-2);
        victim.health -= getRandomInt(6);
        victim.checkHealth();
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
        tileArray[437].state = 0;
        tileArray[438].state = 0;
        tileArray[462].state = 0;
        tileArray[463].state = 0;
        tileArray[487].state = 0;
        tileArray[488].state = 0;
        showActions(activeChar);
    }
}