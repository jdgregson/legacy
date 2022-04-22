<?php

 /*
  * Corbin
  *
  * (c) Reach - 2011
  *
  */
  
 if (isset($_REQUEST['t'])) {
  $t = $_REQUEST['t'];
 }
 else {
  $t = "Hello!";
 }
 
 checkHostile($t);
 
 function checkHostile($t) {
  // Split input into array
  $text = str_split($t, 1);
  $caps = null;
  $notCap = null;
  // Loop through array and run checks
  for ($i = 0; isset($text[$i]); $i++) {
   if (preg_match("/^[A-Z]/", $text[$i])) {
    $caps++;
   }
   else if (preg_match("/^!/", $text[$i])) {
    $caps = $caps + 2;
   }
   else {
    $notCap++;
   }
  }
  // Check if the number of
  // capitol letters is grater
  // than, or less than the 
  // number of non-caps
  if ($caps > $notCap) {
   echo "HOSTILE!";
   return true;
  }
  else {
   echo "Non-Hostile.";
   return false;
  }
 }
 
?>
