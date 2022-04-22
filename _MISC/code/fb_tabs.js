javascript:

function tabInteract(id)
{
document.getElementById(id).setAttribute("bgcolor", "#8b9dc3");
}

function tabUInteract(id)
{
document.getElementById(id).setAttribute("bgcolor", "#dfe3ee");
}

/*function tabbLinkGo(id)
{
if (window.location.search == "") { window.location = window.location + "?sk=" + id;} else {window.location = window.location.search.replace('?', '?sk=' + id + '#')}; 
}*/


function tabbLinkGo(id)
{
window.location.search = "?sk=" + id; 
}


addTabs = document.createElement("TABLE");
addTabs.setAttribute("width", "500px");
addTabs.setAttribute("height", "60px");
addTabs.setAttribute("border", "0");
addTabs.innerHTML="<tr><td colspan='5'></td></tr>
<tr>

<td id='wall' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'><span>Wall</span></td>

<td id='info' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'></td>

<td id='photos' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'></td>

<td id='notes' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'></td>

<td id='friends' width='100' bgcolor='#dfe3ee' onmouseover='tabInteract(id)' onmouseout='tabUInteract(id)' onclick='tabbLinkGo(id)'></td>

</tr>";
document.getElementById("headerArea").appendChild(addTabs);

/*

colors:

#3b5998
#8b9dc3
#f7f7f7
#dfe3ee

*/