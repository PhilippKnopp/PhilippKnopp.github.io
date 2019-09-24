function guiBuilder(_this) {
    
    gui = _this.add.image(1408, 540, 'gui');
    
////////////// Buttons //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    textBackButton = _this.add.image(1623, 525, 'textBackSprite');
    textBackButton.setInteractive();
    textBackButton.on("pointerover", function pointerOver() {
    this.setFrame(1);
    });
    textBackButton.on("pointerdown", function pointerDown() {
        this.setFrame(2);
        if (textHistoryIndex > 3) {
            showText (textHistory[textHistoryIndex-7], textHistory[textHistoryIndex-6], textHistory[textHistoryIndex-5], textHistory[textHistoryIndex-4]);
            textHistoryIndex -= 8;
            textHistory.splice(textHistory.length-4, 4);
        }
    });
    textBackButton.on("pointerup", function pointerUp() {
        this.setFrame(0);
    });
    textBackButton.on("pointerout", function pointerOut() {
        this.setFrame(0);
    });
    
    textNextButton = _this.add.image(1707, 525, 'textForwardSprite');
    textNextButton.setInteractive();
    textNextButton.on("pointerover", function pointerOver() {
        this.setFrame(1);
    });
    textNextButton.on("pointerdown", function pointerDown() {
        this.setFrame(2);
        if (textHistoryIndex < textHistory.length-4) {
            showText (textHistory[textHistoryIndex+1], textHistory[textHistoryIndex+2], textHistory[textHistoryIndex+3], textHistory[textHistoryIndex+4]);
            textHistory.splice(textHistory.length-4, 4);
        }
    });
    textNextButton.on("pointerup", function pointerUp() {
        this.setFrame(0);
    });
    textNextButton.on("pointerout", function pointerOut() {
        this.setFrame(0);
    });

    textNewButton = _this.add.image(1791, 525, 'textNewSprite');
    textNewButton.setInteractive();
    textNewButton.on("pointerover", function pointerOver() {
        this.setFrame(1);
    });
    textNewButton.on("pointerdown", function pointerDown() {
        this.setFrame(2);
        if (textHistoryIndex < textHistory.length-4) {
            showText (textHistory[textHistory.length-4], textHistory[textHistory.length-3], textHistory[textHistory.length-2], textHistory[textHistory.length-1]);
            textHistory.splice(textHistory.length-4, 4);
            textHistoryIndex = textHistory.length-1;
        }
    });
    textNewButton.on("pointerup", function pointerUp() {
        this.setFrame(0);
    });
    textNewButton.on("pointerout", function pointerOut() {
        this.setFrame(0);
    });

////////////// Text Messages //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    Info1 = _this.add.text(950, 40, "", { fontFamily: "Verdana" , color: '#999999', lineSpacing: 12 });
    Info1.showMessage = function (text) {
        Info1.setText(text);
    };
    
    InfoName = _this.add.text(950, Info1.getBottomLeft().y+15, "", { fontFamily: "Verdana" , color: '#914a23', lineSpacing: 12}).setFontStyle('bold');
    InfoName.showName = function (char) {
        if (typeof char === 'object') {
            InfoName.setText(char.name + ": ");
            InfoName.setColor(char.color);
        } else {
            InfoName.setText(char);
            InfoName.setColor('#999999');
        }
        if (Info1.text == "") {
            InfoName.setPosition(950, 40);
        } else {
            InfoName.setPosition(950, Info1.getBottomLeft().y+15);
        }
    };
    
    Info2 = _this.add.text(InfoName.getBottomRight().x, InfoName.getTopRight().y+15, "", { fontFamily: "Verdana" , color: '#dddddd', lineSpacing: 12 });
    Info2.showMessage = function (text) {
        Info2.setText(text);
        Info2.setPosition(InfoName.getBottomRight().x, InfoName.getTopRight().y+15);
    };
    
    Info3 = _this.add.text(950, Info2.getBottomLeft().y+30, textL1[9], { fontFamily: "Verdana" , color: '#999999', lineSpacing: 12 });
    Info3.showMessage = function (text) {
        Info3.setText(text);
        Info3.setPosition(950, Info2.getBottomLeft().y+30);
    };
}