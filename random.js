function getRandomInt(die, explodes) {
    if (explodes == true) {
        let roll = Math.floor(Math.random() * die) + 1;
        let explosioncounter = 1;
        while (roll%4 == 0) {
            roll += Math.floor(Math.random() * die) + 1;
            explosioncounter++;
        }
        return roll;
    } else {
        return Math.floor(Math.random() * die) + 1;
    }
}