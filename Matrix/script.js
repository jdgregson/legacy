/*
 * (C) jdgregson -- 2015
 * <jdgregson@gmail.com>
 *
 */

var X_MAX = window.innerWidth;
var MAX_FONT_SIZE = 20;
var MAX_EXISTING_LINES = 50;
var MAX_LINE_LENGTH = 40;
var SPAWN_SPEED = 100;
var _existing_lines = 0;


function LinePrinter()
{
    /*
     * This is our LinePrinter class. Objects of this class will
     * automatically add themselves to the page and beign animating
     * themselves once created. When they've decided that they're
     * done, they will automatically fade out and delete themselves.
     */

    // tell everyone that we're here
    _existing_lines++;
    // randomize how many letters we will print before quitting
    var length = random(MAX_LINE_LENGTH);
    // randomize what font size we will use
    var size = random(MAX_FONT_SIZE);
    // randomize how fast we will update
    var speed = (random(4)+1)*100;
    // randomize an ID to use for our P object
    var id = random(1000)*1000;
    // randomize where on the page we will display our P object
    var position = random(X_MAX);
    // make our P object and set its attributes
    var p = document.createElement("P");
    p.setAttribute('id', id);
    p.setAttribute('class', 'line');
    // set the initial character to something random
    p.innerHTML = randomLetter();
    // tell the P object where to be and how big to be
    p.setAttribute('style', 'left:'+position+
                            'px;font-size:'+size+'pt;'+
                            'z-index:'+size+';'+
                            'color:'+getColor(size)+';');
    //p.setAttribute('onmouseover', 'this.setAttribute(\'style\', this.'+
    //                              'getAttribute(\'style\')+\'font-weight:bold;\'');
    // add our P object to the page
    document.body.appendChild(p);

    function addLetter()
    {
        /*
         * This will add a random letter to our existing P object
         * referred to inside this object as p.
         */
        p.innerHTML = p.innerHTML + '<br>' + randomLetter();
    }

    function deleteSelf()
    {
        // fade the line by 50%
        p.setAttribute('style', p.getAttribute('style')+';opacity:.5;');
        // remove our P object from the DOM after a delay
        self.setTimeout('document.body.removeChild(document.getElementById("'+
                         id+'"))', speed*2);
        // tell everyone that we're not here anymore
        _existing_lines--;
    }

    // set our object up to animate and delete itself so we don't have
    // to keep tabs on it once its created
    self.setTimeout(deleteSelf, length*speed);
    while(length>0)
    {
        self.setTimeout(addLetter, length*speed);
        length--;
    }
    // and if we weren't assigned to a reference in our parent we'll
    // likely fade out of memory once all of the timers complete and
    // not cause a memory leak.
}


function random(_int)
{
    /*
     * Returns a random integer between 0 and _int.
     */
    return Math.floor(Math.random()*_int);
}


function randomLetter()
{
    /*
     * Returns a random character from the characters string below.
     */
    characters  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcderfghijklmnopqrstuvwxyx";
    characters += "0123456789!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
    return characters[random(characters.length)];
}


function createLine()
{
    /*
     * Creates a line object IF there are fewer than the maximum
     * number alreasy existing, defined by MAX_EXISTING_LINES.
     */
    if(_existing_lines < MAX_EXISTING_LINES)
    {
        new LinePrinter();
    }
}


function getColor(size)
{
    /*
     * Returns a color corresponding to the size of a font. There are 5 colors
     * to choose from. The ranges are one fifth of MAX_FONT_SIZE. Smaller 
     * numbers get darker colors. For example, if MAX_FONT_SIZE is 20, then font
     * size 1-4 would get the darkest color, and 16-20 would be the lightest.
     *
     */
    if(size <= MAX_FONT_SIZE/5)
    {
        return '#105808';
    }
    else if(size <= 2*(MAX_FONT_SIZE/5))
    {
        return '#187d0c';
    }
    else if(size <= 3*(MAX_FONT_SIZE/5))
    {
        return '#1fa210';
    }
    else if(size <= 4*(MAX_FONT_SIZE/5))
    {
        return '#26c713';
    }
    else
    { 
        return '#30e81b';
    }
}


// set this whole trainwreck in motion
self.setInterval(createLine, SPAWN_SPEED);