function getRandomInt(die, explodes, pool = 1) {
    let result = 0;
    for (let i = 0; i < pool; i++) {
        if (explodes == true) {
            let roll = Math.floor(Math.random() * die) + 1;
            let explosioncounter = 1;
            while (roll%4 == 0) {
                roll += Math.floor(Math.random() * die) + 1;
                explosioncounter++;
            }
            result += roll;
        } else {
            result += Math.floor(Math.random() * die) + 1;
        }
    }
    return result;
}