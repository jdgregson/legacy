var NUM_LITTLE_RED_GUYS = 50;
var MAX_LASER_BALLS = 60;
var MAX_LASER_BLASTS = 5;
var little_red_guys = [];
var SPRITE_CONTAINER = document.getElementById('sprite-container');
var cursor = document.getElementById('cursor');
var laserFiring = false;
var laserBlastsExploded = 0;
var aimX = '';
var aimY = '';
var aimTimer = null;
var fireInterval = null;
var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;
var laser_balls = [];
var laser_blasts = [];
var _garbagCollector = '';
var _game_over = false;
var collectingGarbage = false;
var original_body = '';
var numberOfEnemies = null;
var numberOfEnemiesKilled = 0;



/**
 * LittleRedGuy() is out little red sprite class. Ceate one like:
 *     new LittleRedGuy();
 * and well, he takes care of the rest. We probably should push that to an
 * array though so we can talk to it again later. Probaly to kill it.
 *
 */
function LittleRedGuy() {
    this.id = Math.random()*1000000000000000000;
    this.targetElement = SPRITE_CONTAINER;

    this.getMyInterval = function() {
        var interval = Math.floor(Math.random()*1000);
        while(interval < 100 || interval > 1000) {
            interval = Math.floor(Math.random()*1000);
        }
        return interval;
    };

    this.createOurBody = function() {
        var div = document.createElement('div');
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'little-red-guy');
        div.style.position = 'absolute';
        div.setAttribute('onclick', 'explode(this)');
        document.getElementById('sprite-container').appendChild(div);
        return div;
    };

    this.setOurIndex = function(index) {
        this.ourBody.setAttribute('index', index);
    };

    //console.log('creating LittleRedGuy, our id: ' + this.id);
    this.ourBody = this.createOurBody();
    //console.log('creating our body: ' + this.ourBody);
    this.ourInterval = self.setInterval('moveSomewhere('+this.id+')',
                                        this.getMyInterval());
}


/**
 * LaserBlast(x, y) will return an oject containing the HTMLDOM object of a
 * laser blast. The blast itself is basically just an opaqe div with a
 * dropshadow. The div will point to the DOM object at:
 *      <LaserBlast instance>.laserBlast
 * The div will be positioned with its top left corner at (x, y).
 */
function LaserBlast(x, y) {
    this.laserBlast = document.createElement('div');
    this.id = getId();  
    this.laserBlast.setAttribute('id', this.id);
    this.laserBlast.setAttribute('class', 'laser-blast');
    this.laserBlast.style.left = x;
    this.laserBlast.style.top = y;
    return this;
}


/**
 * LaserBall(targetX, targetY) will return an oject containing the HTMLDOM 
 * object of a laser ball, which is basically the laser or bullet thing that
 * goes into the air and explodes. The ball itself is basically just div with
 * a dropshadow. The div will point to the DOM object at:
 *      <LaserBall instance>.div
 * The div will have no initial position, but will be moved to the bottom
 * center of the screen once the animation begins. From there, it will travle
 * to (targetX, targetY) before exploding.
 */
function LaserBall(targetX, targetY) {
    this.id = getId();
    this.div = document.createElement('div');
    addClass(this.div, 'laser-ball');
    this.div.setAttribute('id', this.id);
    this.animation = animateTo(targetX, targetY);
    this.div.setAttribute('style', this.animation[0]);
    self.setTimeout('explodeLaserBall('+this.id+')', 300);
    this.div.innerHTML = this.animation[1];
    return this;
}


/*
 * moveSomewhere(bodyId) will move the div with the id of bodyId a little down
 * and a little to the side, all decided randomly. You should just call it in
 * a timer.
 *
 */
function moveSomewhere(bodyId) {
    var ourBody = document.getElementById(bodyId);
    this.getLeft = function() {
        if(!ourBody.style.left) {
            var w = window.innerWidth - 100;;
            ourBody.style.left = Math.floor(Math.random()*w)+20 + 'px';
        } else {
            var currentLeft = parseInt(ourBody.style.left);
            var sign = Math.round(Math.random());
            var addLeft = Math.floor(Math.random()*10) + 1;
            addLeft = sign? addLeft : addLeft * -1;
            var newStyle = currentLeft + addLeft;
            ourBody.style.left = newStyle + 'px';
        }
    };

    this.getTop = function() {
        if(!ourBody.style.top) {
            ourBody.style.top = Math.floor(Math.random()*100) + 'px';
        } else {
            ourBody.style.top = parseInt(ourBody.style.top) + 10 + 'px';
        }
    };
    ourBody.style.top = this.getTop();
    ourBody.style.left = this.getLeft();

    // check if we're in a game-over condition now
    if(parseInt(ourBody.style.top) + 30 > window.innerHeight) {
        if(!ourBody.getAttribute('exploded')) {
            var id = ourBody.getAttribute('id');
            gameOver(id);
        } else {
            destroySprite(ourBody);
        }
    }
};


/**
 * determineGridsquare(object) will determine which vertical and lateral tenth
 * of the screen object's top left corner is in. It will return them as X and Y
 * coordinates in string form, like '3|5' or '0|1', where '0|0' is the upper
 * left corner of the screen and '9|9' is the lower right corner.
 */
function determineGridsquare(object) {
    var gridSizeX = WINDOW_WIDTH/10;
    var gridSizeY = WINDOW_HEIGHT/10;
    var left =parseInt(object.style.left);
    var top = parseInt(object.style.top);
    var gridX = Math.floor(left/gridSizeX);
    var gridY = Math.floor(top/gridSizeY);
    return gridX+"|"+gridY;
}


/**
 * stopAll(array) will stop all sprites referenced by array, assuming they've
 * publically referenced their interval as ourInterval.
 *
 */
function stopAll(array) {
    for(var i=0; i<array.length; i++) {
        clearInterval(array[i].ourInterval);
    }
}


function destroySprite(ourBody) {
    var index = ourBody.getAttribute('index');
    var explosion = LaserBlast(ourBody.style.left, ourBody.style.top);
    addClass(explosion.laserBlast, 'explosions');
    laser_blasts.push(explosion);
    document.body.appendChild(explosion.laserBlast);
    addClass(ourBody, 'exploded');
    var ourObject = little_red_guys[index];
    self.clearInterval(ourObject.ourInterval);
    startGarbageCollector();
    numberOfEnemiesKilled++
    if(numberOfEnemiesKilled == numberOfEnemies) {
        gameOver(false);
    }
}


function explode(target) {
    addClass(target, 'exploding');
    target.setAttribute('exploded', 'yes');
    var index = target.getAttribute('index');
    var terminated = little_red_guys[index];
    self.clearInterval(terminated.ourInterval);
    terminated.ourInterval = self.setInterval('moveSomewhere("'+
        target.getAttribute('id')+'")', 50);
}


function animateTo(targetX, targetY) {
    var x1 = window.innerWidth / 2;
    var y1 = window.innerHeight;
    var id = 't'+Math.random()*100000000000000000;
    var wk_keyframes = '@-webkit-keyframes '+id+'{';
    wk_keyframes += '0% {left:'+x1+'px; top:'+y1+'px;}';
    wk_keyframes += '100% {left:'+targetX+'px; top:'+targetY+'px;}';
    wk_keyframes += '}';
    var keyframes = '@keyframes '+id+' {';
    keyframes += '0% {left:'+x1+'px; top:'+y1+'px;}';
    keyframes += '100% {left:'+targetX+'px; top:'+targetY+'px;}';
    keyframes += '}';
    var target = 'animation-name: ' + id + ';';
    target += '-webkit-animation-name: ' + id + ';';
    target += 'animation-duration: .5s;'
    target += '-webkit-animation-duration: .5s;'
    var style = '<style type="text/css">';
    style += wk_keyframes + keyframes;
    style += '</style>';
    return [target, style];
}


function explodeLaserBall(id) {
    var laserBall = document.getElementById(id);
    try{
        var id = laserBall.getAttribute('id')
    } catch(e) {
        return
    };

    if(laserBlastsExploded > 3) {
        while(laser_blasts.length >= MAX_LASER_BLASTS) {
            var deleted = laser_blasts.splice(0, 1)[0];
            var deletedID = deleted.id;
            var deletedByID = document.getElementById(deletedID);
            var deletedDiv = deleted.laserBlast||deletedByID;
            try{document.body.removeChild(deletedDiv)}catch(e){};
        }

        // determine the x any y of where this blast should take place
        var laserBlastBounds = laserBall.getBoundingClientRect();
        var tempLeft = laserBlastBounds.left;
        var _1_3 = window.innerWidth/3;
        var _2_3 = _1_3*2;
        var addLeft = tempLeft<_1_3?-75:tempLeft>_2_3?75:0;
        var x = laserBlastBounds.left + addLeft + 'px';
        var top = laserBlastBounds.top;
        var _1_3 = window.innerHeight/3;
        var _2_3 = _1_3*2;
        //var y = laserBlastBounds.top - 30 + 'px'; bottom third
        //var y = laserBlastBounds.top - 60 + 'px';
        var y = top - (top<_1_3?100:top>_2_3?30:60) + 'px';

        // create a new laser blast at those coordinance
        var laserBlast = new LaserBlast(x, y);
        document.body.appendChild(laserBlast.laserBlast);
        laser_blasts.push(laserBlast);

        var redGuys = little_red_guys;
        var ourGridSquare = determineGridsquare(laserBlast.laserBlast);
        for(var i=0; i<redGuys.length; i++) {
            var theirGridSquare = determineGridsquare(redGuys[i].ourBody);
            if(ourGridSquare == theirGridSquare) {
                explode(redGuys[i].ourBody);
                addClass(laserBlast.laserBlast, 'laser-hit');
            }
        }
        laserBlastsExploded = 0;
    } else {
        laserBlastsExploded++;
    }
}


function fireLaser(aimX, aimY) {
    while(laser_balls.length >= MAX_LASER_BALLS) {
        var deleted = laser_balls.splice(0, 1)[0];
        var deletedID = deleted.id;
        var deletedDiv = deleted.div||document.getElementById(deletedDiv);
        try{document.body.removeChild(deletedDiv)}catch(e) {};
    }
    var ball = new LaserBall(aimX, aimY);
    document.body.appendChild(ball.div);
    laser_balls.push(ball);
}


function autoFireLaser() {
    fireLaser(aimX, aimY);
}


function aimLaser(e) {
    var laserContainer = document.getElementById('laser');
    var _width = laserFiring?.5:.5;
    var width = window.innerWidth;
    var height = window.innerHeight - 4;
    aimX = e.pageX||e.changedTouches[0].pageX;
    aimY = (e.pageY||e.changedTouches[0].pageY) + 15;
}


/**
 * gameOver(id) will end the game. You should pass in the id of the sprite
 * which ended the game as id.
 *
 */
function gameOver(id) {
    _game_over = true;
    laserFiring = false;
    if(!id) {
        showPanel(false);
    } else {
        stopAll(little_red_guys);
        var victor = document.getElementById(id);
        addClass(victor, 'victor');
        self.clearInterval(fireInterval);
        document.body.removeEventListener('mousedown', startFiring);
        document.body.removeEventListener('mouseup', stopFiring);
        document.body.removeEventListener('touchstart', startFiring);
        document.body.removeEventListener('touchend', stopFiring);
        document.body.onclick = 'document.location.reload()';
        showPanel(true);
    }
}


/**
 *
 */
function garbagCollector(extraRoutes) {
    if(!laserFiring) {
        var defaultRoutes = ['laser-blast', 'laser-ball', 'explosions']
        if(typeof extraRoutes !== 'undefined') {
            defaultRoutes = defaultRoutes.join(extraRoutes);
        }
        collectingGarbage = true;
        var complete = 0;
        for(var i=0; i<defaultRoutes.length; i++) {
            complete += doCollectionRoute(defaultRoutes[i]);
        }
        if(complete == defaultRoutes.length) {
            laser_blasts = [];
            laser_balls = [];
            stopGarbageCollector();
        }
    }
    collectingGarbage = false;
}


/**
 *
 */
function doCollectionRoute(classname) {
    var trash = document.getElementsByClassName(classname); 
    if(!trash.length) {
        //console.log('garbagCollector: no trash on route: ' + classname);
        return 1;
    } else {
        //console.log('garbagCollector: cleaning ' + trash.length + 
        //          ' ' + classname);
        for(var i=0; i<trash.length; i++) {
            try{document.body.removeChild(trash[i])}catch(e){};
        }
        return 0;
    }
}


/**
 *
 */
function startGarbageCollector() {
    if(!collectingGarbage) {
        stopGarbageCollector()
        _garbagCollector = self.setInterval(garbagCollector, 100);
    }
}


/**
 *
 */
function stopGarbageCollector() {
    self.clearInterval(_garbagCollector);
}


/**
 *
 */
function startFiring() {
    laserFiring = true;
    fireInterval = self.setInterval(autoFireLaser, 1);
    stopGarbageCollector();
}


/**
 * 
 */
function stopFiring() {
    laserFiring = false;
    self.clearInterval(fireInterval);
    self.setTimeout(startGarbageCollector, 250);
}


function hidePanel() {
    var panel = document.getElementById('panel');
    addClass(panel, 'invisible');
}


function showPanel(game_over) {
    var gameOver = document.getElementById('game-over');
    if(game_over) {
        removeClass(gameOver, 'invisible');
        gameOver.innerHTML = "GAME OVER";
    } else {
        removeClass(gameOver, 'invisible');
        gameOver.innerHTML = "YOU WIN";
    }
    var panel = document.getElementById('panel');
    removeClass(panel, 'invisible');
    var enemiesInput = document.getElementById('enemies-input');
    enemiesInput.setAttribute('value', numberOfEnemies);
}


/*
 * restart() reloads the whole game without actually making any more server
 * calls.
 */
function restart() {
    document.body.innerHTML = original_body;
    little_red_guys = [];
    laser_balls = [];
    laser_blasts = [];
    numberOfEnemiesKilled = 0;
    init();
}


function startGame() {
    var enemiesInput = document.getElementById('enemies-input');
    restart();
    hidePanel();
    numberOfEnemies = enemiesInput.value||NUM_LITTLE_RED_GUYS;
    for(var i=0; i<numberOfEnemies; i++) {
        little_red_guys.push(new LittleRedGuy());
        little_red_guys[i].setOurIndex(i);
    }
}

/*
 * init() is basically main.
 *
 */
function init() {
    original_body = document.body.innerHTML;
    document.body.addEventListener('mousemove', aimLaser);
    document.body.addEventListener('touchmove', function(e){
        aimLaser(e);
        e.preventDefault();
    });
    document.body.addEventListener('mousedown', startFiring);
    document.body.addEventListener('mouseup', stopFiring);
    document.body.addEventListener('touchstart', startFiring);
    document.body.addEventListener('touchend', stopFiring);
    document.body.addEventListener('mouseleave', stopFiring);

    SPRITE_CONTAINER.style.width = window.innerWidth - 50 + 'px';
    SPRITE_CONTAINER.style.height = window.innerHeight - 50 + 'px';
    document.body.style.width = window.innerWidth - 50 + 'px';
    document.body.style.height = window.innerHeight - 50 + 'px';
    document.getElementById('panel-wrap').style.width = window.innerWidth+'px';
    document.getElementById('panel-wrap').style.height=window.innerHeight+'px';
}
init();