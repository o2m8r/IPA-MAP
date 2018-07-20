var output = false;
var img = document.getElementById('image');
var svg = document.getElementsByTagName('svg')[0];
var coordNum = 1, x1, y1, x2, y2;

svg.onclick = function(event){

	if(event.target.classList.contains('svg')){
		if(output == false){
			document.getElementById('coords').innerHTML += '<br>Coord #'+coordNum+' '+event.layerX+','+event.layerY;
			x1 = event.layerX;
			y1 = event.layerY;
			output = true;
		}else{
			document.getElementById('coords').innerHTML += ','+event.layerX+','+event.layerY;
			x2 = event.layerX;
			y2 = event.layerY;
			document.getElementsByTagName('svg')[0].innerHTML += '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" />';
			x1 = x2;
			y1 = y2;
		}
	}
	
	
}

window.onload = function(){
	document.getElementsByTagName('svg')[0].setAttribute("height", document.getElementById('image').height+"px");
	document.getElementsByTagName('svg')[0].setAttribute("width", document.getElementById('image').width+"px");
}

function newCoord(){
	output = false;
	x1, y1, x2, y2;
	coordNum = coordNum+1;
}