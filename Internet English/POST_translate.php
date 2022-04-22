<?php

 /*
  * Corbin
  *
  * (c) Reach - 2011
  *
  */
 
 if (isset($_REQUEST['translate'])) {
    print('foobar');
    if (isset($_POST['text'])) {
        print(toTotalIdiot($_POST['text']));
    }
 }
 
 function toTotalIdiot($string) {
    $string = strtolower($string);
    $string = " " . $string; // add a space before the string
    $string = str_ireplace(" you ", " u ", $string);
    $string = str_ireplace(" your ", " ur ", $string);
    $string = str_ireplace(" you're ", " ur ", $string);
    $string = str_ireplace(" you'll ", " ull ", $string);
    $string = str_ireplace(" they're ", " there ", $string);
    $string = str_ireplace(" their ", " there ", $string);
    $string = str_ireplace(" than ", " then ", $string);
    
    $string = str_ireplace(",", "", $string);
    $string = str_ireplace("'", "", $string);
    $string = str_ireplace("\"", "", $string);
    $string = str_ireplace("?", "", $string);
    $string = str_ireplace(":", "", $string);
    $string = str_ireplace(" and ", " & ", $string);
    
    $string = str_ireplace(" before ", " b4 ", $string);
    $string = str_ireplace(" because ", " cuz ", $string);
    $string = str_ireplace(" going to ", " gonna ", $string);
    $string = str_ireplace(" cause ", " cuz ", $string);
    $string = str_ireplace(" today ", "2 day ", $string);
    $string = str_ireplace(" forget ", " 4get ", $string);
    $string = str_ireplace(" tomorrow ", " 2 morow ", $string);
    $string = str_ireplace(" tonight ", " 2 nite ", $string);
    $string = str_ireplace(" tonite ", " 2 nite ", $string);
    $string = str_ireplace(" said to ", " was like ", $string);
    $string = str_ireplace(" get ", " git ", $string);
    
    $string = str_ireplace(" to ", " 2 ", $string);
    $string = str_ireplace(" too ", " 2 ", $string);
    $string = str_ireplace(" two ", " 2 ", $string);
    $string = str_ireplace(" zero ", " 0 ", $string);
    $string = str_ireplace(" one ", " 1 ", $string); // already did two up there ^
    $string = str_ireplace(" three ", " 3 ", $string);
    $string = str_ireplace(" four ", " 4 ", $string);
    $string = str_ireplace(" five ", " 5 ", $string);
    $string = str_ireplace(" six ", " 6 ", $string);
    $string = str_ireplace(" seven ", " 7 ", $string);
    $string = str_ireplace(" eight ", " 8 ", $string);
    $string = str_ireplace(" nine ", " 9 ", $string);
    $string = str_ireplace(" are ", " r ", $string);
    $string = str_ireplace(" our ", " r ", $string);
    $string = str_ireplace(" for ", "4 ", $string);
    $string = str_ireplace(" be ", " b ", $string);
    $string = str_ireplace(" late ", "l8 ", $string);
    $string = str_ireplace(" see ", " c ", $string);
    $string = str_ireplace(" sea ", " c ", $string);
    
    $string = str_ireplace("...", "<///>", $string); // preserve ellipses and only remove periods
    $string = str_ireplace(".", " lol ", $string);
    $string = str_ireplace("<///>", "...", $string);
    return $string;
 }
 
?>


