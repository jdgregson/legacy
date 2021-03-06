<html>
 <head>
  <title>Grid Movment Testing</title>
  <script type="text/javascript">

// Corbin

var SELECTED = new Array;
SELECTED.length = 1;

player = document.createElement("IMG");
player.setAttribute("onclick", "move_select(this);");
player.name = "player";
player.location = null;
player.src = "art/player.png";

player2 = document.createElement("IMG");
player2.setAttribute("onclick", "move_select(this);");
player2.name = "player2";
player2.location = null;
player2.src = "art/player2.png";
player2.height = "40";

player3 = document.createElement("IMG");
player3.setAttribute("onclick", "move_select(this);");
player3.name = "player3";
player3.location = null;
player3.src = "art/player3.png";
player3.height = "40";


function spawn(obj, spawnpoint) {
	document.getElementById(spawnpoint).appendChild(obj);
	document.getElementById(spawnpoint).setAttribute("onclick", null);
	obj.location = spawnpoint;
}  

function despawn(obj) {
	document.getElementById(obj.location).removeChild(obj);
	document.getElementById(obj.location).setAttribute("onclick", "move_here(id)");
}

function move_player(obj, new_location) {
	//console.log("Moving '" + obj.name + "' from " + obj.location + " to " + new_location + "...");
	despawn(obj);
	spawn(obj, new_location);
	obj.border = "0";
}

function move_select(obj) {
	//console.log("Selecting '" + obj.name + "'");
	for (i = 0; i <= SELECTED.length; i++) {
		if (typeof SELECTED[i] == "undefined") {
			SELECTED[i] = obj;
			if (typeof SELECTED[i - 1] != "undefined") {
				if (SELECTED[i - 1].name == obj.name) {
					SELECTED.splice(i, 1);
				}
			}
			i++;
		}
	}
	obj.border = "1";
}

function move_here(id) {
	if (typeof SELECTED[0] != "undefined") {
		for (i = 0; i < SELECTED.length;) {
			if (id != SELECTED[i].location) {
				move_player(SELECTED[i], id);
				SELECTED.splice(0, 1);
			}
			else {
				i = SELECTED.length + 11;
			}
		}
	}
	else {
		//console.log("Nothing selected. Doing nothing.");
	}
}

  </script>
  <style type="text/css">
  
   table {
   	border-collapse: collapse;
   }
  
  .grid_block, #grid_block {
  	height: 50px;
  	width: 50px;
  }
  
  </style>
 </head>
 <body onload="spawn(player,'x2-y4');spawn(player2,'x2-y6');spawn(player3,'x6-y7')">
  <table border="1" align="center">
  <?php
  
  $x = 9;
  $y = 9;
  $_1st_color = "ffffff";
  $_2nd_color = "777777";
  
  $color = 1;
  print("<!-- To avoid an insane amount of editing, the folowing grid was generated with PHP. Nested for loops, ftw. -->\n");
  for ($I = 1; $I <= $y; $I++) {
  	print("   <tr id=\"x-row-$I\">\n");
   		for ($i = 1; $i <= $y; $i++) {
    			print("    <td id=\"x$I-y$i\" class=\"grid_block\" ");
    			if ($color == 1) {
    				print("bgcolor=\"$_1st_color\" ");
    				$color = 0;
    			}
    			else {
    				print("bgcolor=\"$_2nd_color\" ");
    				$color = 1;
    			}
    			print("align=\"center\" onclick=\"move_here(id)\"></td>\n");
    		}
  	print("   </tr>\n");
  }
  
  ?>
  </table>
 </body>
</html>
