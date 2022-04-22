<?php
	if(isset($_REQUEST["http-user"]))
	{
		echo "we're in";
		session_start();
		$_SESSION["http-user"] = $_POST["http-user"];
		header("Location: index.php");
	}
?>