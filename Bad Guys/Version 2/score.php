<?php

 /*
  * Corbin
  *
  */
 
 if (isset($_REQUEST["warn"])) {
    if($_REQUEST["warn"] == "reload") {
        print("<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><h1 align=\"center\">Reload the page to continue...</h1>");
    }
    else if($_REQUEST["warn"] == "toohigh") {
        print("<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><h1 align=\"center\">Impossible score.<br>Reload the page to continue...</h1>");
    }
    else if($_REQUEST["warn"] == "toolow") {
        print("<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><h1 align=\"center\">Score of 0 or less not allowed.<br>Reload the page to continue...</h1>");
    }
 }
 else if (isset($_POST["score"]) && isset($_POST["name"])) {
    check($_POST["score"]);
    
    // append newest score    
    $fout = fopen("scores.txt", "a") or die("Could not open score file for writing!");
    fprintf($fout, "%-23s%d\n", $_POST["name"], $_POST["score"]);
    fclose($fout);
    
    // find the top store
    $rc = 0;
    $data = array();
    $fin = fopen("scores.txt", "r") or die("\nCould not open scores for reading!\n");
    fscanf($fin, "%s%d", $data[0][0], $data[0][1]);
    while (! feof($fin)) {
        $rc++;
        fscanf($fin, "%s%d", $data[$rc][0], $data[$rc][1]);
    }
    fclose($fin);
    $topScore = $data[0][1];
    $i = 0;
     $topScoreAt = 0;
    while ($i < $rc) {
        if ($data[$i][1] > $topScore) {
            $topScore = $data[$i][1];
            $topScoreAt = $i;
        }
        $i++;
    }
    
    $fout_HS = fopen("num_1.txt", "w") or die ("Could not open highest score file for writing!");
    fprintf($fout_HS, "Highest Score of All Time: \n%-23s%s\n\nOther Scores:", $data[$topScoreAt][0], $data[$topScoreAt][1]);
    fclose($fout_HS);
    
    header("Location: ./score.php?warn=reload");
    
 }
 else if (isset($_REQUEST["score"])) {
    $score = $_REQUEST["score"];
    check($score);
    
    print("<html>\n<body>\n<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><table align=\"center\">\n<tr>\n<td valign=\"top\">");
    print("<p style=\"font-family:tahoma;font-size:15;\">Name: </p></td><td><form method=\"post\" action=\"score.php\"><input type=\"text\" name=\"name\"></input>");
    print("<input type=\"text\" name=\"score\" style=\"display:none;\" value=\"".$score."\"></input>");
    print("<input type=\"submit\" value=\"submit\"></button></form></td></tr></table>\n</body>\n</html>");
 }

function check($score) {
    if ($score > 384) {
        header("Location: score.php?warn=toohigh");
    }
    if ($score < 1) {
        header("Location: score.php?warn=toolow");
    }
}
 
?>
