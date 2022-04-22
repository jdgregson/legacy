<?php

 /*
  * Corbin
  *
  * (c) Reach - 2011
  *
  */
 
 
 
?>
<html>
	<head>
		<title>internet english</title>
        <link rel="shortcut icon" href="art/favicon.png?no-cache"/>
		<style type="text/css">
		</style>
		<script type="text/javascript">
		    function translateText() {
		        text = document.getElementById("input").value;
		        display = document.getElementById("frame");
		        lang = document.getElementById("lang");
		        
		        //alert(lang.value);
		        
		        display.setAttribute("src", "translate.php?lang=" + lang.value + "&text=" + text)
		    }
		</script>
	</head>
	<body>
	    <table id="main_col" width="950" border="0" align="center" >
	        <tr>
	            <td colspan="2" border="0">
<!-- HEADER -->
                    <img src="art/header.png"></img>
<!-- /HEADER -->
	            </td>
	        </tr>
	        <tr>
	            <td colspan="2">
<!-- BUTTONS -->
                    <table border="0">
                        <tr>
                            <td valign="top">
                                <p style="font-family:Comic Sans MS;font-weight:bold;font-size:15;">dialect:</p>
                            </td>
                            <td>
                                <form>
                                    <select id="lang" name="lang">
                                        <option value="idiot">Idiot</option>
                                        <option value="asian">Asain</option>
                                        <option value="leet">1337</option>
                                    </select>
                                </form>
                            </td>
                            <td vaign="top">
                                <form>
                                    <input type="button" onclick="translateText(); return false" value="translate!"/>
                                </form>
                            </td>
                        </tr>
                    </table>
<!-- /BUTTONS -->
	            </td>
	        </tr>
	        <tr>
	            <td>
	                <table border="1" style="border-collapse:collapse;">
	                    <tr>
	                        <td>
	                          <form id="test">
	                             <textarea id="input" cols="55" rows="22" style="border:0;">Talk cool, like internet people.</textarea>
	                          </form>
	                        </td>
	                        <td valign="top">
	                            <iframe id="frame" src="translate.php" width="475" height="100%" style="border:0;"></iframe>
	                        </td>
	                    </tr>
	                </table>
	        </tr>
	    </table>
	</body>
</html>
