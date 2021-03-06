<?php

 /*
  * Corbin
  *
  * (c) Reach - 2011
  *
  */

  
 // Encrypt a password

 // Password
 $pass = "mypass";
  // Encrypt password
 $_hash = encrypt($pass, $library = 'random');
 echo "$pass = $_hash";

$__hash = password_hash($pass, PASSWORD_DEFAULT);
 echo "<br>$pass = $__hash";
 
 // Check if a password matches 
 // with the previous hash ($_hash)

 // New password
 $pass = "mypass";
 // Check for match
 //matchCheck($_hash, $pass);
 
 
 
 // *************************************** //
 //                encrypt()                //
 //                                         //
 // Author: Corbin <jdgregson@gmail.com>     //
 // Date: 07/11/11                          //
 // Depends: encryptionLibraryHandler()     //
 // Description: Converts a string into a   //
 // hash using an encryption library        //
 // Variables: $pass = string, $library =   //
 // "random" or "library name" (i.e "1010") //
 // *************************************** //
 function encrypt($pass, $library) {
  // Split password into an array
  $_pass = str_split($pass, 1);
  $hash = null;
  // Get encryption library
  $lib = encryptionLibraryHandler($library);
  if ($lib == true) { 
   $hash = $hash . $lib['name'];
   // Hard to explain...
   // Loop through the array, getting 
   // the character in the particular 
   // section on the array, find
   // it's value in the encryption
   // library, and appand that value
   // to the end of the $hash variable.
   for ($i = 0; isset($_pass[$i]); $i++) {
    $c = $_pass[$i];
    if (isset($lib[$c])) {
     $encChar = $lib[$c];
     $hash = $hash . $encChar;
    }
    else die("encrypt(): The character '" . $c . "' was not found in the encryption library! (\$lib" . $lib['name'] . ")"); 
   }
  }
  else die("encrypt(): Encryption library failed to load!");
  // Return the hash
  return $hash;
 }
 
 
 // *************************************** //
 //               matchCheck()              //
 //                                         //
 // Author: Corbin <jdgregson@gmail.com>     //
 // Date: 07/11/11                          //
 // Depends: encryptionLibraryHandler(),    //
 // encrypt()                               //
 // Description: Encrypts a string using    //
 // encrypt() and checks if the hash matces //
 // another suplied hash                    //
 // Variables: $_hash = a hash previously   //
 // encrypted with encrypt(), $pass=string  //
 // *************************************** //
 function matchCheck($_hash, $pass) {
  // Split hash into an array
  $o_hash = str_split($_hash, 4);
  // Figure out which library was used to
  // encrypt the hash we have and get that
  // encryption library
  $lib = encryptionLibraryHandler($library = $o_hash[0]);
  
  // Encrypt the new password with
  // the same library used to 
  // encrypt the hash we have
  $library = $lib['name'];
  $n_hash = encrypt($pass, $library);
  
  // Check if both the hash we have 
  // and the new hash that we got
  // from encrypt() match
  if ($_hash == $n_hash) {
   echo "matchCheck(): The hashes match! (true)"; // This is for debugging
   // If the hashes match,
   return true;
  }
  else {
   echo "matchCheck(): The hashes do not match! (false)"; // This is for debugging
   // If the hashes do not match,
   return false;
  }
 }
 
 
 // *************************************** //
 //       encryptionLibraryHandler()        //
 //                                         //
 // Author: Corbin <jdgregson@gmail.com>     //
 // Date: 07/11/11                          //
 // Depends: <nothing>                      //
 // Description: Stores and handles the     //
 // encryption libraries. Returns either    //
 // a specifies or a random library         //
 // Variables: $library = "random" or       //
 // "library name" (i.e "1010")             //
 // *************************************** //
 function encryptionLibraryHandler($library) {
 
  // Libraries
  // These are not complete yet
  // Library 0101
  $lib0101['name'] = "0101";
  $lib0101['a'] = "3300";
  $lib0101['m'] = "9874";
  $lib0101['p'] = "4432";
  $lib0101['s'] = "9695";
  $lib0101['y'] = "9943";
  $lib0101['M'] = "7896";
  
  // Library 6445
  $lib6445['name'] = "6445";
  $lib6445['a'] = "5375";
  $lib6445['m'] = "8325";
  $lib6445['p'] = "9823";
  $lib6445['s'] = "7785";
  $lib6445['y'] = "9682";
  $lib6445['M'] = "6887";
  
  // Library 8895
  $lib8895['name'] = "8895";
  $lib8895['a'] = "6547";
  $lib8895['m'] = "1234";
  $lib8895['p'] = "8461";
  $lib8895['s'] = "4804";
  $lib8895['y'] = "6682";
  $lib8895['f'] = "7636";
  $lib8895['M'] = "3982";
  
  // Library indexes
  // Change these when you add a new library
  
  // Used to get a random library
  $libIndex[1] = $lib0101;
  $libIndex[2] = $lib6445;
  $libIndex[3] = $lib8895;
  
  // Used to get a specific library
  $libBackIndex["0101"] = $lib0101;
  $libBackIndex["6445"] = $lib6445;
  $libBackIndex["8895"] = $lib8895;
  
  // Decide which library to return
  
  // Get number of libraries from indexes
  $n = 0;
  for ($i = 1; isset($libIndex[$i]); $i++) {
   $n = $n + 1;
  }
  if ($library == 'random') {
   // Grab random library and return it
   $r = rand(1, $n);
   $lib = $libIndex[$r];
  }
  else {
   // Get specified library and return it
   if (isset($libBackIndex[$library])) {
    $lib = $libBackIndex[$library];
   }
   else die("encryptionLibraryHandler(): The requested library was not found! (you asked for \"$library\")");
  }
  return $lib;
 }
 
?>
