<?php

	// CONFIGURATION 
	$ProgramName = "Resolve IP";
	$FaviconLocation = "art/favicon.png";
	$LogoLocation = "art/logo.png";
	$NaughtLogoLocation = "art/naught.ico";
	$NaughtPageLocation = "http://www.facebook.com/pages/Project-Naught/334375233251116?sk=info";
	$DocumentName = "index.php";
	$PageBackgroundColor = "#e5e5e5";
	$IPAddressColor = "#c41d1d";
	$DomainNameColor = "#0093dd";
	$BodyTextColor = "#555555";
	$ErrorMessageColor = "#c41d1d";
	
?>
<html>
	<head>
		<title><?php echo $ProgramName; ?></title>
		<link rel="shortcut icon" href="<?php echo $FaviconLocation; ?>" />
		<script type="text/javascript">
/*
  * This program is part of Project Naught.
  * Copyright: 2011, Corbin <jdgregson@gmail.com>
  * 
  *
  * This program is free software; you can redistribute it and/or modify it
  * under the terms of the GNU General Public License as published by the
  * Free Software Foundation; either version 2, or (at your option) any
  * later version.
  *
  * This program is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  * GNU General Public License for more details.
  *
  * You should have received a copy of the GNU General Public License
  * along with this program; if not, write to the Free Software
  * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301, USA.
  *
  *
  */
		</script>
		<style type="text/css">
			body {
				background: <?php echo $PageBackgroundColor; ?>;
			}
			
			p  {
				font-family: Tahoma, Geneva, sans-serif;
				color: <?php echo $BodyTextColor ?>;
			}
			
			a {
				text-decoration: none;
			}
			
			a:hover, a:active {
				text-decoration: underline;
			}
			
			a#ip {
				color: <?php echo $IPAddressColor; ?>;
			}
			
			h2 {
				font-family:Tahoma, Geneva, sans-serif;
				font-weight: bold;
			}
			
			#domainname, .domainname {
				color: <?php echo $DomainNameColor; ?>;
			}
			
			#error, .error {
				color: <?php echo $ErrorMessageColor; ?>;
			}
			
			#resolvedcell, .resolvedcell {
				background: url("art/section-highlight.png");
				height: 90;
				background-size: 100% 100%;
				background-repeat: repeat-x;
			}
			
			#highlight-section-left, .highlight-section-left {
				background: url("art/section-highlight-edge-left.png");
				height: 90;
				width: 10;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				background-position: right top; 
			}
			
			#highlight-section-right, .highlight-section-right {
				background: url("art/section-highlight-edge-right.png");
				height: 90;
				width: 10;
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}
			
			table {
				border-collapse: collapse; 
			}
			
			input, .search, #search {
				font-family: Tahoma, Geneva, sans-serif;
				font-size: 14pt;
				color: <?php echo $BodyTextColor ?>;
				border: 1px;
			}
			
		</style>
	</head>
	<body>
		<table width="900px" border="0" align="center">
			<tr>
<!-- header cell -->
				<td colspan="3">
					<table>
						<tr>
							<td>
								<a href="./" style="text-decoration:none;">
									<table><tr><td><h2 style="color:0093dd;">Resolve </h2></td><td><h2 style="color:c41d1d">IP</h2></td></tr></table>
								</a>
							</td>
							<td valign="middle" align="right" width="100">
								<p style="font-size:8;">Part of 
								<a href="<?php echo $NaughtPageLocation; ?>" style="text-decoration:none;color:#0093dd;">
									Project Naught
								</a>
							</td>
							<td>								
								<a href="<?php echo $NaughtPageLocation; ?>" style="text-decoration:none;">
									<img src="<?php echo $NaughtLogoLocation; ?>" border="0" height="20px"></img>
								</a>
								</p>
							</td>
						</tr>
					</table>
					<br /><br />
				</td>
<!--/ header cell -->
			</tr>
			<tr>
				<td id="highlight-section-left"></td>
				<td id="resolvedcell" align="center">
<?php
	 if (!isset($_POST['resolve'])) { 
	 	$host = 'example.com';
	 }else {
	 	$host =  $_POST['resolve'];
	 }
	 
	$endcell = '</td><td id="highlight-section-right"></td></tr>';
	
	if (isset($_POST['resolve'])) {
		$resolve = $_POST['resolve'];
		$ipaddress = exec("bin/findip $resolve");
		if ($ipaddress == "") {
			printf("<p><font class=\"error\">Uh oh, something went wrong :( </font> We could not resolve the IP Address of <font class=\"domainname\">%s</font>. Are you sure that it is a valid domain name? Do not put <font class=\"error\">http://</font> before the domain name. If you did that, try removing it and searching again. A valid search should look something like <font class=\"domainname\">example.com</font> or  <font class=\"domainname\">blog.example.com</font>.</p>", $resolve);
		}
		else {
			printf("<p>The current IP Address of <font id=\"domainname\">%s</font> is <h2><a id=\"ip\" href=\"http://$ipaddress\">%s</a></h2></p>", $resolve, $ipaddress, $ipaddress);
		}
		echo $endcell;
		printf('<tr><td colspan="3" align="center"><br /><br/><form method="post" action="%s" align="center"><p class="search">What is the IP Address of &nbsp;<input type="text" value="%s" name="resolve"></input><input type="submit" value="?"></input></p></form></td></tr>', $DocumentName, $host);
	}
	else {
		printf('<form method="post" action="%s" align="center"><p class="search">What is the IP Address of &nbsp;<input type="text" value="%s" name="resolve"></input><input type="submit" value="?" onclick="alert(\"foo\");"></input></p></form>', $DocumentName, $host);
		echo $endcell;
	}
?>
			<tr>
<!-- help cell -->
				<td id="helpcell">
				
				</td>
<!--/ help cell -->
			</tr>
		</table>
	</body>
</html>
