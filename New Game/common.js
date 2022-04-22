

/**
 * addClass(domElement, classname) adds classname to the list of classes
 * in domElement in the DOM.
 */
function addClass(domElement, classname) {
    _class = domElement.getAttribute("class");
    if(_class) {
        if(_class.indexOf(classname) < 0) {
            domElement.setAttribute("class", _class + " " + classname);
        }
    }
    else {
        domElement.setAttribute("class", classname);
    }
}

/**
 * removeClass(domElement, classname) removes classname from the list of
 * classes in domElement in the DOM.
 */
function removeClass(domElement, classname) {
    var _class = domElement.getAttribute("class");
    if(_class) {
        var newClass = _class.replace(classname, "").replace(/  /g, " ");
        domElement.setAttribute("class", newClass);
    }
}

/**
 *
 */
function getId() {
    return Math.random()*1000000000000000000000000000000000;
}