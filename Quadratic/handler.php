<?php

 /*
  * Corbin
  *
  * (c) Reach - 2011
  *
  */
 
 print('<html><head><link rel="stylesheet" href="style.css"/>');
 print('</head><body>');
 print('<p align="center">');
 if (isset($_REQUEST['trinomial'])) {
    $trinomial = escapeshellcmd($_REQUEST['trinomial']);
    //$trinomial = $_REQUEST['trinomial'];
    $trinomial = str_replace(' ', '', $trinomial);
    $trinomial = str_replace('p', '+', $trinomial);
    $trinomial = str_replace('v', '^', $trinomial);
    $command = "./quadratic.py '$trinomial'";
    print('<br /><br />');
    system($command);
    //print($trinomial);
 } else {
    print('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    print('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______<br />');
    print('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-b &#177; \/ b&#178;  - 4ac<br />');
    print('x = -------------------<br />');
    print('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2a<br />');
 }
 print('</p>');
 print('</body></html>');
 
?>
