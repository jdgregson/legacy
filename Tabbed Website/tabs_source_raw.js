/*
This is a javascript for a tabbed website.
This javascript has 5 tabs. It requires 5 sets 
of 3 images to display the tabs, one image 
as the active tab, one to display the inactive
tabs, and 1 for onmouseover. These images
must be named tabA1.png (the active tab),
taB1.png (the inactive tab), and tabC1.png
(the onmauseover decoration). Not all the 
images should be named "tabA1" "tabB1"
and "tabC1" but rather there should be 5
tab "A's" "B's" and "C's" (i.e. tabA1.png,
tabA2.png,tabA3.png,tabA4.png,tabA5.png.)
These images should be 20 px tall by 225 px
wide. These images should be placed in a 
directory titled 'images' which should be
placed inside the same directory as this
script. Any change from this will result in 
totall disfunction.
A more workable version of this script is
available at "http://developer.jdgregson.com/projects/finished/tabbed_website/tabs.js"
as well as a demonstration of this script at
"http://developer.jdgregson.com/projects/finished/tabbed_website/demo"
This script was developed by jdgregson, 
and is freely distributed at 
"http://developer.jdgregson.com/projects/finished/tabbed_website"
Donations are accepted at 
"http://www.jdgregson.com/"
No support for this script is available.
*/ 
var activeTab=null; {a1 = new Image(225,20);a1.src = "images/tabB1.png";a2 = new Image(225,20);a2.src = "images/tabA1.png";a3 = new Image(225,20);a3.src = "images/tabC1.png";b1 = new Image(225,20);b1.src = "images/tabB2.png";b2 = new Image(225,20);b2.src = "images/tabA2.png";b3 = new Image(225,20);b3.src = "images/tabC2.png";c1 = new Image(225,20);c1.src = "images/tabB3.png";c2 = new Image(225,20);c2.src = "images/tabA3.png";c3 = new Image(225,20);c3.src = "images/tabC3.png";d1 = new Image(225,20);d1.src = "images/tabB4.png";d2 = new Image(225,20);d2.src = "images/tabA4.png";d3 = new Image(225,20);d3.src = "images/tabC4.png";e1 = new Image(225,20);e1.src = "images/tabB5.png";e2 = new Image(225,20);e2.src = "images/tabA5.png";e3 = new Image(225,20);e3.src = "images/tabC5.png";}function hiLite(imgDocID, imgObjName, comment) {document.images[imgDocID].src = eval(imgObjName + ".src");window.status = comment; return true;}function tab1(){activeTab=1;hiLite('a','a1','');hiLite('b','b2','');hiLite('c','c2','');hiLite('d','d2','');hiLite('e','e2','');document.getElementById("tab1content").style.display="";document.getElementById("tab2content").style.display="none";document.getElementById("tab3content").style.display="none";document.getElementById("tab4content").style.display="none";document.getElementById("tab5content").style.display="none";}function tab2(){ activeTab=2;hiLite('b','b1','');hiLite('a','a2','');hiLite('c','c2','');hiLite('d','d2','');hiLite('e','e2','');document.getElementById("tab1content").style.display="none";document.getElementById("tab2content").style.display="";document.getElementById("tab3content").style.display="none";document.getElementById("tab4content").style.display="none";document.getElementById("tab5content").style.display="none";}function tab3(){activeTab=3;hiLite('c','c1','');hiLite('b','b2','');hiLite('a','a2','');hiLite('d','d2','');hiLite('e','e2','');document.getElementById("tab1content").style.display="none";document.getElementById("tab2content").style.display="none";document.getElementById("tab3content").style.display="";document.getElementById("tab4content").style.display="none";document.getElementById("tab5content").style.display="none";}function tab4(){ activeTab=4;hiLite('d','d1','');hiLite('b','b2','');hiLite('c','c2','');hiLite('a','a2','');hiLite('e','e2','');document.getElementById("tab1content").style.display="none";document.getElementById("tab2content").style.display="none";document.getElementById("tab3content").style.display="none";document.getElementById("tab4content").style.display="";document.getElementById("tab5content").style.display="none";}function tab5(){activeTab=5;hiLite('d','d2','');hiLite('b','b2','');hiLite('c','c2','');hiLite('a','a2','');hiLite('e','e1','');document.getElementById("tab1content").style.display="none";document.getElementById("tab2content").style.display="none";document.getElementById("tab3content").style.display="none";document.getElementById("tab4content").style.display="none";document.getElementById("tab5content").style.display="";}function tab01(){if (activeTab == '1') hiLite('a','a1','');else hiLite('a','a3','');}function tab01b(){if (activeTab == '1') hiLite('a','a1','');else hiLite('a','a2','');}function tab02(){if (activeTab == '2') hiLite('b','b1','');else hiLite('b','b3','');}function tab02b(){if (activeTab == '2') hiLite('b','b1','');else hiLite('b','b2','');}function tab03(){if (activeTab == '3') hiLite('c','c1','');else hiLite('c','c3','');}function tab03b(){if (activeTab == '3') hiLite('c','c1','');else hiLite('c','c2','');}function tab04(){if (activeTab == '4') hiLite('d','d1','');else hiLite('d','d3','');}function tab04b(){if (activeTab == '4') hiLite('d','d1','');else hiLite('d','d2','');}function tab05(){if (activeTab == '5') hiLite('e','e1','');else hiLite('e','e3','');}function tab05b(){if (activeTab == '5') hiLite('e','e1','');else hiLite('e','e2','');}function start(){tab1();alertMsg();document.getElementById("alert_js").style.display="none";}
