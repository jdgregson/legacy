<?php

 /*
  * Corbin
  *
  * (c) Reach - 2011
  *
  */
  
  
 /*
  * Goal: reverse a string (Word. > .droW).
  */
  
  
 // String to be reversed
 if (isset($_REQUEST['s'])) {
  $s = $_REQUEST['s'];
 }
 else {
  $s = "Hello!";
 }

 echo reverse($s);
 
 function reverse($s) {
  $_s_num = null;
  $r = null;
  // split the string into an array
  $_s = str_split($s, 1);
  // get the number of characters in the array
  for ($i = 0; isset($_s[$i]); $i++) {
   $_s_num++;
  }
  // this value needs to be dropped by one 
  $_s_num --;
  // reverse the string
  for ($i = 0; $_s_num >= $i; $_s_num--) {
    $r = $r . $_s[$_s_num];
  }
  return $r;
 }
 
?>
