javascript:

/*
 * Written by jdgregson
 * This script can be used for any 
 * purpose without any consent of 
 * its author, providing this notice
 * is left intact
 * 
 * January 2011
 *
 * http://www.jdgregson.com
 *
 */ 

var activeTab=window.location.search;

function tabInteract(id)
{
document.getElementById(id).setAttribute("bgcolor", "#8b9dc3");
}

function tabUInteract(id)
{
document.getElementById(id).setAttribute("bgcolor", "#dfe3ee");
if (activeTab == "") document.getElementById("wall").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=wall") document.getElementById("wall").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=info") document.getElementById("info").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=photos") document.getElementById("photos").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=notes") document.getElementById("notes").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=friends") document.getElementById("friends").setAttribute("bgcolor", "#8b9dc3");
}

function tabbLinkGo(id)
{
window.location.search = "?sk=" + id; 
}

/* add tabs */
addTabs = document.createElement("TABLE");
addTabs.setAttribute("width", "500px");
addTabs.setAttribute("height", "30px");
addTabs.setAttribute("border", "0");
addTabs.innerHTML="<tr><td colspan='5'></td></tr>
<tr>

<td id='wall' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'><div align='center'><span style='font-weight:bold;'>Wall</span></div></td>

<td id='info' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'><div align='center'><span style='font-weight:bold;'>Info</span></div></td>

<td id='photos' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'><div align='center'><span style='font-weight:bold;'>Photos</span></div></td>

<td id='notes' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'><div align='center'><span style='font-weight:bold;'>Notes</span></div></td>

<td id='friends' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'><div align='center'><span style='font-weight:bold;'>Friends</span></div></td>

</tr>";
document.getElementById("headerArea").appendChild(addTabs);
if (activeTab == "") document.getElementById("wall").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=wall") document.getElementById("wall").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=info") document.getElementById("info").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=photos") document.getElementById("photos").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=notes") document.getElementById("notes").setAttribute("bgcolor", "#8b9dc3");
if (activeTab == "?sk=friends") document.getElementById("friends").setAttribute("bgcolor", "#8b9dc3");

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
