<?php session_start();?>

<!DOCTYPE html>
<html>
<head>
	<title>Drag demo</title>
	<link id="startgame" rel="stylesheet" type="text/css" href="css/startgame.css">
	<link rel="stylesheet" type="text/css" href="css/table.css">
	<link rel="stylesheet" type="text/css" href="css/empty.css">
	
</head>
<body>
	<div>
	<canvas class="canvas" id="canvas" width="1350" height="900">Your browser does not support canvases.</canvas>
		<div class="dragtiles" id="dragtiles">
			<img class="" src="images/tiles/0_0.svg" id="0_0" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/0_1.svg" id="0_1" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/0_2.svg" id="0_2" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/0_3.svg" id="0_3" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/0_4.svg" id="0_4" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/0_5.svg" id="0_5" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/0_6.svg" id="0_6" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/1_1.svg" id="1_1" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/1_2.svg" id="1_2" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/1_3.svg" id="1_3" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/1_4.svg" id="1_4" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/1_5.svg" id="1_5" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/1_6.svg" id="1_6" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/2_2.svg" id="2_2" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/2_3.svg" id="2_3" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/2_4.svg" id="2_4" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/2_5.svg" id="2_5" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/2_6.svg" id="2_6" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/3_3.svg" id="3_3" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/3_4.svg" id="3_4" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/3_5.svg" id="3_5" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/3_6.svg" id="3_6" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/4_4.svg" id="4_4" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/4_5.svg" id="4_5" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/4_6.svg" id="4_6" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/5_5.svg" id="5_5" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/5_6.svg" id="5_6" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
			<img class="" src="images/tiles/6_6.svg" id="6_6" alt="svg" width="0" height="0" draggable="true" ondragstart="startDrag(event)">
		</div>
		
		<div class="blanktiles" id="blanktiles">
			<img class="" src="images/tiles/empty.svg" width="0" height="0">
			<img class="" src="images/tiles/empty.svg" width="0" height="0">
			<img class="" src="images/tiles/empty.svg" width="0" height="0">
			<img class="" src="images/tiles/empty.svg" width="0" height="0">
			<img class="" src="images/tiles/empty.svg" width="0" height="0">
			<img class="" src="images/tiles/empty.svg" width="0" height="0">
			<img class="" src="images/tiles/empty.svg" width="0" height="0">
		</div>
		
		<div class="center">
			<div class="">
					<img class="rotate90 empty" src="images/tiles/empty.svg" id="e1" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate90 empty" src="images/tiles/empty.svg" id="e2" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate90 empty" src="images/tiles/empty.svg" id="e3" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate90 empty" src="images/tiles/empty.svg" id="e4" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate90 empty" src="images/tiles/empty.svg" id="e5" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate90 empty" src="images/tiles/empty.svg" id="e6" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
			</div>

			<div>
					<div><img class="rotate180 right empty" src="images/tiles/empty.svg" id="e7" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
					<div><img class="rotate180 right empty" src="images/tiles/empty.svg" id="e8" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
					<div><img class="rotate180 right empty" src="images/tiles/empty.svg" id="e9" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
					<div><img class="rotate180 right empty" src="images/tiles/empty.svg" id="e10" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
					<div><img class="rotate180 right empty" src="images/tiles/empty.svg" id="e11" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
			</div>

			<div>
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e17" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e16" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e15" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e14" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e13" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e12" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
			</div>
		
			<div>
					<div><img class="rotate0 left empty" src="images/tiles/empty.svg" id="e18" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
					<div><img class="rotate0 left empty" src="images/tiles/empty.svg" id="e19" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
					<div><img class="rotate0 left empty" src="images/tiles/empty.svg" id="e20" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
					<div><img class="rotate0 left empty" src="images/tiles/empty.svg" id="e21" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
					<div><img class="rotate0 left empty" src="images/tiles/empty.svg" id="e22" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)"></div>
			</div>

			<div>
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e23" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e24" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e25" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e26" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e27" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">
					<img class="rotate270 empty" src="images/tiles/empty.svg" id="e28" alt="svg" width="0" height="0" ondrop="dropped(event)" ondragover="dragover(event)" ondragenter="dragenter(event)">

			</div>
		</div>
	</div>
</body>
	<script type="text/javascript" src="js/dragme.js"></script>
</html>