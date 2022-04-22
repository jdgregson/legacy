bringSelectedIframeToTop(true);
function hidePallet()
{
document.getElementById("pallet").style.visibility="hidden";
document.getElementById("hideBt").style.display="none";
document.getElementById("showBt").style.display="";
}
function showPallet()
{
document.getElementById("pallet").style.visibility="visible";
document.getElementById("hideBt").style.display="";
document.getElementById("showBt").style.display="none";
}
function about()
{
alert("BuildingBlox Version 2.0.1 (BETA) Layout, design and development by jdgregson (jdgregson.com) dragiframe.js by Matt Kruse (mattkruse.com). Release date: 09-27-2010")
}
function hideWel()
{
document.getElementById("welcome").style.display="none";
}
function reloadPage()
{
window.location.reload()
}
function mkWhite() 
{ 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "white.html"); 
   ifrm.style.width = 25+"px"; 
   ifrm.style.height = 25+"px"; 
   ifrm.style.position = "absolute";
   ifrm.style.top = 120+"px"; 
   ifrm.style.left = 44+"px";
   ifrm.style.zIndex = "2";  
   document.body.appendChild(ifrm); 
}  
function mkBlack() 
{ 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "black.html"); 
   ifrm.style.width = 25+"px"; 
   ifrm.style.height = 25+"px"; 
   ifrm.style.position = "absolute";
   ifrm.style.top = 170+"px"; 
   ifrm.style.left = 44+"px";
   ifrm.style.zIndex = "2";  
   document.body.appendChild(ifrm); 
}  
function mkRed() 
{ 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "red.html"); 
   ifrm.style.width = 25+"px"; 
   ifrm.style.height = 25+"px"; 
   ifrm.style.position = "absolute";
   ifrm.style.top = 220+"px"; 
   ifrm.style.left = 44+"px";
   ifrm.style.zIndex = "2";  
   document.body.appendChild(ifrm); 
}  
function mkGreen() 
{ 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "green.html"); 
   ifrm.style.width = 25+"px"; 
   ifrm.style.height = 25+"px"; 
   ifrm.style.position = "absolute";
   ifrm.style.top = 270+"px"; 
   ifrm.style.left = 44+"px";
   ifrm.style.zIndex = "2";  
   document.body.appendChild(ifrm); 
}  
function mkBlue() 
{ 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "blue.html"); 
   ifrm.style.width = 25+"px"; 
   ifrm.style.height = 25+"px"; 
   ifrm.style.position = "absolute";
   ifrm.style.top = 320+"px"; 
   ifrm.style.left = 44+"px";
   ifrm.style.zIndex = "2";  
   document.body.appendChild(ifrm); 
}  
function mkYellow() 
{ 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "yellow.html"); 
   ifrm.style.width = 25+"px"; 
   ifrm.style.height = 25+"px"; 
   ifrm.style.position = "absolute";
   ifrm.style.top = 370+"px"; 
   ifrm.style.left = 44+"px";
   ifrm.style.zIndex = "2";  
   document.body.appendChild(ifrm); 
}  
function mkBrown() 
{ 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "brown.html"); 
   ifrm.style.width = 25+"px"; 
   ifrm.style.height = 25+"px"; 
   ifrm.style.position = "absolute";
   ifrm.style.top = 420+"px"; 
   ifrm.style.left = 44+"px";
   ifrm.style.zIndex = "2";  
   document.body.appendChild(ifrm); 
}  
function mkPink() 
{ 
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "pink.html"); 
   ifrm.style.width = 25+"px"; 
   ifrm.style.height = 25+"px"; 
   ifrm.style.position = "absolute";
   ifrm.style.top = 470+"px"; 
   ifrm.style.left = 44+"px";
   ifrm.style.zIndex = "2";  
   document.body.appendChild(ifrm); 
} 
function mkAll() 
{ 
	mkWhite();
	mkBlack();
	mkRed();
	mkGreen();
	mkBlue();
	mkYellow();
	mkBrown();
	mkPink();
} 