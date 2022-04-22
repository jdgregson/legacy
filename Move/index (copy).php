<html>
 <head>
  <title>Grid Movment Testing</title>
  <script type="text/javascript">

//var spawn_point = "grid_9";

player_location = null;
player = document.createElement("IMG");
player.setAttribute("onclick", "despawn(this);");
player.name = "player";
player.src = "art/player.png";


function spawn(obj, spawnpoint) {
	//console.log("Spawning '" + obj.name + "'...");
	document.getElementById(spawnpoint).appendChild(obj);
	player_location = spawnpoint;
}  

function despawn(obj) {
	//console.log("Despawning '" + obj.name + "'...");
	document.getElementById(player_location).removeChild(obj);
}

function move_player(obj, new_location) {
	console.log("Moving '" + obj.name + "' from " + player_location + " to " + new_location + "...");
	despawn(player);
	spawn(player, new_location);
}

function move_here(id) {
	move_player(player, id);
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
 <body onload="spawn(player,'grid_9')">
  <table border="1" align="center">
   <tr>
    <td id="grid_1" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_2" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_3" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_4" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_5" class="grid_block" align="center" onclick="move_here(id)"></td>
   </tr>
   <tr>
    <td id="grid_6" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_7" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_8" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_9" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_10" class="grid_block" align="center" onclick="move_here(id)"></td>
   </tr>
   <tr>
    <td id="grid_11" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_12" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_13" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_14" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_15" class="grid_block" align="center" onclick="move_here(id)"></td>
   </tr>
   <tr>
    <td id="grid_16" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_17" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_18" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_19" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_20" class="grid_block" align="center" onclick="move_here(id)"></td>
   </tr>
   <tr>
    <td id="grid_21" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_22" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_23" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_24" class="grid_block" align="center" onclick="move_here(id)"></td>
    <td id="grid_25" class="grid_block" align="center" onclick="move_here(id)"></td>
   </tr>
  </table>
 </body>
</html>
