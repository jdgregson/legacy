<?php

 /*
  * Corbin
  *
  * (c) Reach - 2011
  *
  */
  
  
 /*
  * For the times when you type a whole sentence before
  * realizing that you had Caps Lock on.
  *
  * ("hELLO, EVERYBODY!" > "Hello, everybody!")
  *
  */
 
 // Alphabet case libraries
 $outOfCaps = array( 'A' => 'a',
                     'B' => 'b',
                     'C' => 'c',
                     'D' => 'd',
                     'E' => 'e',
                     'F' => 'f',
                     'G' => 'g',
                     'H' => 'h',
                     'I' => 'i',
                     'J' => 'j',
                     'K' => 'k',
                     'L' => 'l',
                     'M' => 'm',
                     'N' => 'n',
                     'O' => 'o',
                     'P' => 'p',
                     'Q' => 'q',
                     'R' => 'r',
                     'S' => 's',
                     'T' => 't',
                     'U' => 'u',
                     'V' => 'v',
                     'W' => 'w',
                     'X' => 'x',
                     'Y' => 'y',
                     'Z' => 'z',
                     26
                    );
                    
  $inToCaps = array( 'a' => 'A',
                     'b' => 'B',
                     'c' => 'C',
                     'd' => 'D',
                     'e' => 'E',
                     'f' => 'F',
                     'g' => 'G',
                     'h' => 'H',
                     'i' => 'I',
                     'j' => 'J',
                     'k' => 'K',
                     'l' => 'L',
                     'm' => 'M',
                     'n' => 'N',
                     'o' => 'O',
                     'p' => 'P',
                     'q' => 'Q',
                     'r' => 'R',
                     's' => 'S',
                     't' => 'T',
                     'u' => 'U',
                     'v' => 'V',
                     'w' => 'W',
                     'x' => 'X',
                     'y' => 'Y',
                     'z' => 'Z',
                     26
                    );
 
 // Get text to work with
 if (isset($_REQUEST['text'])) {
  $t = $_REQUEST['text'];
 }
 else {
  $t = "hELLO!";
 }
 
 // Split text into an array called $text
 $text = str_split($t, 1);
 
 // Get the number of characters in the array
 $n = 0;
 for ($i = 0; isset($text[$i]); $i++) {
  $n++;
 }
 $n--;
 
 // Do your magic
 $endText = null;
 for ($i = 0; $i <= $n; $i++) {
  if (isset($inToCaps[$text[$i]])) {
   $endText = $endText . $inToCaps[$text[$i]];
  }
  else if (isset($outOfCaps[$text[$i]])) {
   $endText = $endText . $outOfCaps[$text[$i]];
  }
  else {
   $endText = $endText . $text[$i];
  }
 }
 
 // Echo out the end text
 echo $endText;
 
?>
