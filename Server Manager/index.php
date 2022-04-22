<?php

		system("wget --http-user=corbin --http-password=thispass".
			   " -O content/page.html http://harvest.craftx.biz:9090/servermanager");
		include("content/page.html");
/*
		system("wget --http-user=corbin --http-password=".$_SESSION["http-password"].
			   " -O content/page.html http://harvest.craftx.biz:9090/servermanager");
		include("content/page.html");
		
	session_start();
    if(isset($_SESSION["http-password"]))
	{
		system("wget --http-user=corbin --http-password=".$_SESSION["http-password"].
			   " -O content/page.html http://harvest.craftx.biz:9090/servermanager");
		include("content/page.html");
	}
	else
	{
		echo "<form  action='login.php' method='post'>";
		echo "<input type='password' name='http-password'></input>";
		echo "<input type='submit' value='login'></input>";
		echo "</form>";
	}
	*/
?>