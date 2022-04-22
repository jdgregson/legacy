// (C) Jonathan Gregson, 2014
// <jdgregson@gmail.com>

function BarObject(right, height) {
    if ((graphHeight-height)<maxDiff) {
        var color = "red";
    } else if ((graphHeight-height)<(maxDiff)*2) {
        var color = "yellow";
    } else {
        var color = "blue";
    }

    this.right = right;
    this.height = height;
    this.id = nextId();
    this.obj = document.createElement("DIV");
    this.obj.setAttribute("id", this.id);
    this.obj.setAttribute("class", "bar " + color);this.obj.innerHTML = 
                          "<span class='data' style='top:" + (height-
                          (height>20?20:0)) + "px;'>" + height + "</span>";

    this.getStyle = function() {
        return("right:" + this.right + "px; height:" + this.height + "px;");
    }

    this.applyStyle = function(style) {
        this.obj.setAttribute("style", this.getStyle() + (style||''));
    }

    this.addClass = function(_class) {
        var curClass = this.obj.getAttribute("class");
        if (curClass.indexOf(_class) < 0) {
            this.obj.setAttribute("class", curClass+_class);
        }
    }

    this.removeClass = function(_class) {
        var curClass = this.obj.getAttribute("class");
        var regex = new RegExp("/"+_class+"/g");
        this.obj.setAttribute("class", curClass.replace(regex, ""));
    }

    this.setRight = function(right) {
        this.right = right;
        this.applyStyle();
    }

    this.setHeight = function(height) {
        this.height = height;
        this.applyStyle();
    }

    if (!(this.id%(Math.round(window.innerWidth/totalSpace)))) {
        this.addClass(" highlight");
    }
    this.applyStyle();
}


function moveAll() {
    // prune old results if necessary
    if ((barArray.length*totalSpace) > window.innerWidth) {
        barArray.reverse();
        var deleted = barArray.pop();
        barContainer.removeChild(deleted.obj);
    }
    for(I in barArray.reverse())  {
        var i = parseInt(I);
        var bar = barArray[i];

        //if (window.innerWidth-30 < parseInt(right)) {
            /*
        if (window.innerWidth-30 < parseInt(right)) {
            bar.addClass(" highlight");
        }
        */
        // reset the column to erace old alrifacts
        //var h = bar.height;
        //bar.setHeight(graphHeight);
        //bar.setHeight(h);

        bar.setRight(bar.right + totalSpace);
    }
}


function nextId() {
    globalID = (globalID+1) % ID_MAX
    return globalID;
}


function simpleAdd(height) {
    moveAll();

    // refresh space
    var bar = new BarObject(barPadding, height);
    barArray.push(bar);
    barContainer.appendChild(bar.obj);
}


function addTimerJob() {
    var width = window.innerWidth;
    simpleAdd(getNextNumber());
}


function loadSquares() {
    //squareContainer.children[0];
    //var width = ein
}


function barSpeed(s) {
    if (s == 'stop') {
        self.clearInterval(addRefresher);
        return;
    } else if (s == 'slow') {
        self.clearInterval(addRefresher);
        refreshRate = 1000;
    } else if (s == 'normal')  {
        self.clearInterval(addRefresher);
        refreshRate = 100;
    } else if (s == 'fast') {
        self.clearInterval(addRefresher);
        refreshRate = 20;
    } else if (s == 'wayfast') {
        self.clearInterval(addRefresher);
        refreshRate = 5;
    }
    addRefresher = self.setInterval(addTimerJob, refreshRate);
}


function getNextNumber() {
    if (lastNumber < maxDiff) {
        var num = Math.floor(Math.random()*(maxDiff*2));
    } else if ((graphHeight-lastNumber) < maxDiff) {
        var num = Math.floor(Math.random()*(graphHeight-maxDiff));
    } else {
        if (Math.floor(Math.random(2)*2)) { // returns 0 or 1 
            var num = lastNumber + Math.floor(Math.random()*maxDiff);
        } else {
            var num = lastNumber - Math.floor(Math.random()*maxDiff);
        }
    }

    //console.log("Last was " + lastNumber + ", giving " + num);
    lastNumber = num;
    return num
}

window.addEventListener('resize', function() {
    graphHeight = (window.innerHeight * 0.7); // this will need to ba changed in the stylesheet too and down there V
});


var init = function() {
    barWidth = 30;    // this will need to ba changed in the stylesheet too
    barPadding = 2;
    graphHeight = (window.innerHeight * 0.7); // this will need to ba changed in the stylesheet too and up there ^
    refreshRate = 100; // in MS
    ID_MAX = 10000;
    totalSpace = (barPadding*2) + barWidth;
    barArray = [];
    barContainer = document.getElementById("graph-container");
    // squareContainer = document.getElementById("squre-container");
    squareSize = 75;
    globalID = 0;
    maxDiff = 5;
    lastNumber = 150;
    thridFromLast = window.innerWidth - (totalSpace*5);

    simpleAdd(200);
    addRefresher = self.setInterval(addTimerJob, refreshRate);

    loadSquares();
}();