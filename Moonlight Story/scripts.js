function changeScene(choice) {
    fadeOut(1);

    // figure out which scene to load
    if (choice  === 1) {
        choice = choice_one_scene;
    }
    else if (choice === 2) {
        choice = choice_two_scene;
    }

    // prepare next scene
    choice_one_scene = scene[choice][4];
    choice_two_scene = scene[choice][5];

    // change the current scene
    self.setTimeout(function(){
        document.getElementById("background").innerHTML =
            "#body {background: " + "url('"+scene[choice][0]+ "');" +
            "background-repeat: no-repeat;}";
        document.getElementById("text").innerHTML = scene[choice][1];
        document.getElementById("choice1text").innerHTML = scene[choice][2];
        document.getElementById("choice2text").innerHTML = scene[choice][3];},
    250);

    self.setTimeout("fadeIn(10)", 500);
    return;
}

function fadeOut(run) {
    /* fades the screen black in half a second
       Usually, this function should only
       be called as "fadeOut(1)" */
    if (run > 10 || run < 0) {
        return "Index must be between 1 and 10";
    }
    if (run < 10) {
        n = "0." + run;
    }
    else if (run === 10) {
        n = "10";
    }
    try {
        document.body.removeChild(dark);
    } catch(e){}
    dark = document.createElement("SPAN");
    dark.setAttribute("style",("position:absolute;top:0px;bottom:0px;left:0px;"+
                               "right:0px;background:rgba(0,0,0,"+n+");"));
    document.body.appendChild(dark);
    next = run + 1;
    self.setTimeout("fadeOut("+next+")", 25);
}

function fadeIn(run) {
    /* fades the screen back to normal after faceOut()
       Usually, this function should only
       be called as "fadeIn(10)" TODO: Remember that.*/
    if (run > 10 || run < 0) {
        return "Index must be between 1 and 10";
    }
    if (run === 10) {
        n = "10";
    }
    else if (run < 10) {
        n = "0." + run;
    }
    try {
        document.body.removeChild(dark);
    } catch(e){
        console.log("fadeOut() has not been executed.");
    }
    dark = document.createElement("SPAN");
    dark.setAttribute("style",("position:absolute;top:0px;bottom:0px;left:0px;"+
                               "right:0px;background:rgba(0,0,0,"+n+");"));
    document.body.appendChild(dark);
    next = run - 1;
    self.setTimeout("fadeIn("+next+")", 25);
    self.setTimeout("document.body.removeChild(dark);", 250);
}
