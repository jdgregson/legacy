javascript:

document.getElementById("pagelet_byline").setAttribute("style", "visibility:hidden;");

document.getElementById("pagelet_netego_ads").setAttribute("style", "display:none;");

document.getElementById("pagelet_photo_bar").setAttribute("style", "display:none;");

var friendsButton=document.createElement("SPAN");
friendsButton.innerHTML="<b>+ Show Friends</b>";
friendsButton.style.position="absolute";
friendsButton.style.top="50px";
friendsButton.setAttribute("id", "sfButton");
friendsButton.setAttribute("onclick", "fListHandler()");
document.body.appendChild(friendsButton);

function startIt(){flistOpen="no";document.getElementById("pagelet_relationships").setAttribute("style", "display:none;");}

function fListHandler(){if (flistOpen == "no"){flistOpen="yes";document.getElementById("pagelet_relationships").setAttribute("style", "display:;");document.getElementById("sfButton").innerHTML="<b>- Hide Friends</b>";} else {flistOpen="no";document.getElementById("pagelet_relationships").setAttribute("style", "display:none;");document.getElementById("sfButton").innerHTML="<b>+ Show Friends</b>";}};window.onload=startIt();
