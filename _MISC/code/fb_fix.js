javascript:

/* jdgregson -- 1/12/11 */

/* clean some things up */
document.getElementById("pagelet_byline").setAttribute("style", "visibility:hidden;");
document.getElementById("pagelet_netego_ads").setAttribute("style", "display:none;");
document.getElementById("pagelet_photo_bar").setAttribute("style", "display:none;");
document.getElementById("pagelet_footer").setAttribute("style", "position:relative;top:30px;");

/* add button to show/hide friends list */
var friendsButton=document.createElement("A");
friendsButton.innerHTML="<b>+ Show Friends</b>";
friendsButton.style.position="relative";
friendsButton.style.top="10px";
friendsButton.setAttribute("id", "sfButton");
friendsButton.setAttribute("onclick", "fListHandler()");
document.getElementById("pagelet_fbx_navigation").appendChild(friendsButton);

function startIt(){flistOpen="no";document.getElementById("pagelet_relationships").setAttribute("style", "display:none;position:relative;top:30px;");}

function fListHandler(){if (flistOpen == "no"){flistOpen="yes";document.getElementById("pagelet_relationships").setAttribute("style", "display:;position:relative;top:30px;");document.getElementById("sfButton").innerHTML="<b>- Hide Friends</b>";} else {flistOpen="no";document.getElementById("pagelet_relationships").setAttribute("style", "display:none;position:relative;top:30px;");document.getElementById("sfButton").innerHTML="<b>+ Show Friends</b>";}};window.onload=startIt();