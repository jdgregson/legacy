/* This does not work properly on profiles */
var blueBar=document.getElementById("blueBar");var pageHead=document.getElementById("pageHead");var leftCol=document.getElementById("leftCol");var rightCol=document.getElementById("rightCol");var contentCol=document.getElementById("contentCol");function stayTop(){blueBar.style.position="fixed";blueBar.style.zIndex="2";pageHead.style.position="fixed";pageHead.style.width="981px";leftCol.style.position="relative";leftCol.style.top="41px";rightCol.style.position="relative";contentCol.style.position="relative";contentCol.style.top="41px";}window.onload=stayTop();