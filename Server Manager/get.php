<?php
	$server = "http://harvest.craftx.biz:9090/servermanager";
	if(isset($_REQUEST["server"] && isset($_REQUEST["number"]))
	{
		$s = $_REQUEST["server"];
		$n = $_REQUEST["number"];
		header("Location: ".$server."/get.php?server=".$s."number=".$s);
	}
?>