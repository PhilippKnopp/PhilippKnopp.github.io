// JS Document

////////// Berechnet Wege und Distanzen und Sichtlinien //////////////////////////////////////////////////////////


function calculatePath (startIndex, endIndex, onlyMeasure = false) {
    // startIndex ist der Index im TileArray von dem der Pfad startet
    // endIndex ist der Index im TileArray zu dem der Pfad geht
    // onlyMeasure = true begrenzt den Pfad nicht auf die maximale Bewegungsweite während einem Kampf
    
    var mappedList = [];
    var frontierList = [];
    var frontierListValues = [];
    var activeNode;
    var pathFound = false;
    var pathToTravel = [];
    var distance = 0;
    
    //Fange Ausnahmen ab startIndex = endIndex
    if (startIndex == endIndex) {
        return {
            first: pathToTravel,
            second: distance
        }
    }
    
    // finde A und füge ihn der frontierList hinzu {name, wayPointUsefulness}
    tileArray[startIndex].entryPoint = "Start";
    tileArray[startIndex].distanceTravelled = 0;
    tileArray[startIndex].wayPointUsefulness = tileArray[startIndex].distanceTravelled + tileArray[startIndex].estimatedWayToB(endIndex);
    frontierList.push(tileArray[startIndex]);
    
    // gehe folgende Schleife solange durch bis es einen Weg gibt
    mapperLoop: while (pathFound == false) {
        
        // Wenn kein Weg möglich ist brich diese Schleife ab
        if (frontierList.length == 0) {
            pathToTravel = [];
            break mapperLoop;
        }
        
        // gehe frontierList durch nach niedrigster wayPointUsefulness
        frontierListValues.length = 0;
        for (let i = 0; i < frontierList.length; i++) {
            frontierListValues.push(frontierList[i].wayPointUsefulness);
        }

        activeNode = frontierListValues.indexOf(Math.min(...frontierListValues));
        
        // Wenn Knoten mit Niedrigster wayPointUsefulness schon das Ziel ist, ist A* fertig
        if (frontierList[activeNode].name == endIndex) {
            pathFound = true; // unterbricht diese Schleife und damit das Pfadsuchen
            let backtraceIndex = endIndex; // Sucht den Index des Zielfeldes
            pathToTravel.unshift(backtraceIndex); // Fügt das Zielfeld dem Pfad hinzu
            
            while (tileArray[tileArray[backtraceIndex].entryPoint].name != startIndex) {
                pathToTravel.unshift(tileArray[backtraceIndex].entryPoint);
                backtraceIndex = tileArray[backtraceIndex].entryPoint;
            }
            
            break mapperLoop;
        }
        
        // berechne für diesen alle neighbors
        frontierList[activeNode].checkForNeighbors();
        
        // Füge Neighbors des aktuellen Knotens der Frontierlist hinzu
        for (let i = 0; i < frontierList[activeNode].cNeighbors.length; i++) {
            
            let distanceTravelled = frontierList[activeNode].distanceTravelled + frontierList[activeNode].cNeighborsDistance[i];
            if (containsObject(frontierList[activeNode].cNeighbors[i], frontierList)) {
                if (distanceTravelled < frontierList[activeNode].cNeighbors[i].distanceTravelled) {
                    frontierList[activeNode].cNeighbors[i].distanceTravelled = distanceTravelled;
                    frontierList[activeNode].cNeighbors[i].wayPointUsefulness = frontierList[activeNode].cNeighbors[i].distanceTravelled + frontierList[activeNode].cNeighbors[i].estimatedWayToB(endIndex);
                    frontierList[activeNode].cNeighbors[i].entryPoint = frontierList[activeNode].name;
                }
            } else if (containsObject(frontierList[activeNode].cNeighbors[i], mappedList)) {
                continue;
            } else {
                frontierList[activeNode].cNeighbors[i].distanceTravelled = frontierList[activeNode].distanceTravelled + frontierList[activeNode].cNeighborsDistance[i];
                frontierList[activeNode].cNeighbors[i].wayPointUsefulness = frontierList[activeNode].cNeighbors[i].distanceTravelled + frontierList[activeNode].cNeighbors[i].estimatedWayToB(endIndex);
                frontierList[activeNode].cNeighbors[i].entryPoint = frontierList[activeNode].name;
                frontierList.push(frontierList[activeNode].cNeighbors[i]);
            }
        }
        
        // Füge den aktiven Knoten der mappedList hinzu und Lösche den aktven Knoten aus der frontierList
        mappedList.push(frontierList[activeNode]);
        frontierList.splice(activeNode,1);
    }
        
    // wenn gerade ein Kampf ist soll die Bewegung begrenzt sein auf die Maximale Bewegungsweite des aktiven Charakters
    if (fightmode == true && onlyMeasure == false) {
        movementStopper: for (let l = 0; l < pathToTravel.length; l++) {
            if (tileArray[pathToTravel[l]].distanceTravelled > activeChar.movementCounter) {
                pathToTravel.length = l;
                break movementStopper;
            }
        }
    }
    
    // wenn das Ziefeld der Bewegung besetzt ist, wird die Bewegung gekürzt
    checkEnd: while (pathToTravel.length > 0) {
        if (checkFor (tileArray[pathToTravel[pathToTravel.length-1]].occupiedBy, Figure) || checkFor (tileArray[pathToTravel[pathToTravel.length-1]].occupiedBy, Enemy)) {
            pathToTravel.length = pathToTravel.length-1;
        } else {
            break checkEnd;
        }
    }
    
    // speichert die Entfernung bis zum Ende des Pfades
    if (pathToTravel.length > 0) {
        distance += tileArray[pathToTravel[pathToTravel.length-1]].distanceTravelled;
    }
    
    // räumt alle Tiles wieder auf
    clearNodes();
    return {
        first: pathToTravel,
        second: distance
    }
}

function lineOfSight (startIndex, endIndex) {
    let aX = startIndex % matrixWidth;
    let aY = Math.floor(startIndex / matrixWidth);
    
    let bX = endIndex % matrixWidth;
    let bY = Math.floor(endIndex / matrixWidth);
    
    let difX = aX-bX;
    let difY = aY-bY;
    
    let index = startIndex;
    
    let diagonals = Math.min(Math.abs(difY), Math.abs(difX)); // die kleinere Differenz in der Entfernung sind die Diagonalen
    let straights = Math.max(Math.abs(difY), Math.abs(difX))-diagonals; // der Rest der Entfernung sind Geraden
    let stepDiagonals = 1/(diagonals+1);
    let stepStraights = 1/(straights+1);
    let pointer = 0;
    let pointerIncrement = stepDiagonals * stepStraights;
    
    let losPathDifficulty = [];
    
    if ( Math.abs(difX) >= Math.abs(difY) ) { // liegt Links oder Rechts 
        if (difX > 0) { //liegt Links
            while  (aX > bX) {
                pointer += pointerIncrement;
                if (pointer >= stepDiagonals && difY > 0) { // N-W
                    stepDiagonals += 1/(diagonals+1);
                    index = index - matrixWidth - 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[4]);
                    aX--;
                } else if (pointer >= stepDiagonals && difY < 0) { // S-W
                    stepDiagonals += 1/(diagonals+1);
                    index = index + matrixWidth - 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[2]);
                    aX--;
                } else if (pointer >= stepStraights || difY == 0) { // W
                    stepStraights += 1/(straights+1);
                    index = index - 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[3]);
                    aX--;
                }
            }
        } else if (difX < 0) { // liegt Rechts
            while  (aX < bX) {
                pointer += pointerIncrement;
                if (pointer >= stepDiagonals && difY > 0) { // N-O
                    stepDiagonals += 1/(diagonals+1);
                    index = index - matrixWidth + 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[6]);
                    aX++;
                } else if (pointer >= stepDiagonals && difY < 0) { // S-O
                    stepDiagonals += 1/(diagonals+1);
                    index = index + matrixWidth + 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[0]);
                    aX++;
                } else if (pointer >= stepStraights || difY == 0) { // O
                    stepStraights += 1/(straights+1);
                    index = index + 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[7]);
                    aX++;
                }
            }
        }
    } else if ( Math.abs(difX) < Math.abs(difY) ) {// liegt Über oder Unter
        if (difY > 0) { //liegt Über
            while  (aY > bY) {
                pointer += pointerIncrement;
                if (pointer >= stepDiagonals && difX > 0) { // N-W
                    stepDiagonals += 1/(diagonals+1);
                    index = index - matrixWidth - 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[4]);
                    aY--;
                } else if (pointer >= stepDiagonals && difX < 0) { // N-O
                    stepDiagonals += 1/(diagonals+1);
                    index = index - matrixWidth + 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[6]);
                    aY--;
                } else if (pointer >= stepStraights || difX == 0) { // N
                    stepStraights += 1/(straights+1);
                    index = index - matrixWidth;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[5]);
                    aY--;
                }
            }
        } else if (difY < 0) { // liegt Unter
            while  (aY < bY) {
                pointer += pointerIncrement;
                if (pointer >= stepDiagonals && difX > 0) { // S-W
                    stepDiagonals += 1/(diagonals+1);
                    index = index + matrixWidth - 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[2]);
                    aY++;
                } else if (pointer >= stepDiagonals && difX < 0) { // S-O
                    stepDiagonals += 1/(diagonals+1);
                    index = index + matrixWidth + 1;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[0]);
                    aY++;
                } else if (pointer >= stepStraights || difX == 0) { // S
                    stepStraights += 1/(straights+1);
                    index = index + matrixWidth;
                    tileArray[index].updateWalkable();
                    losPathDifficulty.push(tileArray[index].cWalkable[1]);
                    aY++;
                }
            }
        }
    }
    
    clearNodes();
    searchButton.state = 0;
    
    let los_blocked = losPathDifficulty.includes(0); // testet ob in dem Array "losPathDifficulty" eine 0 vorkommt (dort kann man nicht hinlaufen)
    return !los_blocked; // gibt "true" zurück, wenn man in direkter Linie zum angesehenen Punkt laufen/schwimmen/... könnte.
}