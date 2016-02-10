function addevents(){
	document.getElementById('0_0').addEventListener('ondragstart', startDrag, false);
	document.getElementById('e1').addEventListener('ondrop', dropped, false);
	document.getElementById('e1').addEventListener('ondragover', dragover, false);
	document.getElementById('e1').addEventListener('ondragenter', dragenter, false);

	/*var dragme = document.getElementsByClassName('dragme');
	for(var i = 0; i < dragme.length; i++){
		dragme[i].addEventListener('ondragstart', startDrag, false);
	}
	var empty = document.getElementsByClassName('empty');
	for(var i = 0; i < empty.length; i++){
		empty[i].addEventListener('ondrop', dropped, false);
		empty[i].addEventListener('ondragover', dragover, false);
		empty[i].addEventListener('ondragenter', dragenter, false);
	}*/
	console.log('addevents');
}


function startDrag(e){
	var targ = e.target.id;
	e.dataTransfer.setData('text', targ);
}

function dragover(e){
	e.preventDefault();
}

function dragenter(e){
	e.preventDefault();
}

function dropped(e){
	e.preventDefault();
	var source = document.getElementById(e.dataTransfer.getData('text'));
	var targ = e.target.id;
	document.getElementById(targ).parentNode.replaceChild(source, document.getElementById(targ));
	document.getElementById(targ).remove();
}

window.addEventListener('load', addevents, false);