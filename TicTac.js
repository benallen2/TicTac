var player = ""; 
var cpu = "";
var x = "X";
var o = "O";
var tL = document.getElementById("topLeft");
var tM = document.getElementById("topMid");
var tR = document.getElementById("topRight");
var mL = document.getElementById("midLeft");
var mM = document.getElementById("midMid");
var mR = document.getElementById("midRight");
var bL = document.getElementById("botLeft");
var bM = document.getElementById("botMid");
var bR = document.getElementById("botRight");
var $this = $(this);

function startAlert (){
	$("#alert").modal("show");
	$("#xs").click(function(){
		player = "X";
		cpu = "O";
	});
	$("#os").click(function(){
		player = "O";
		cpu = "X";
	});
};

function playerClicks(){
	$(".box").click(function(){
		$(this).html(player);
	});
}

function logics(){
	tL.onclick = function(){
		if (tL = ""){
			tL.html(player);
			mM.html(cpu);
		}
		else{
			alert("Box Filled - Pick Again");
		}
	}
	
}

$(document).ready(function(){
	startAlert();
	playerClicks();
	logics();
	
})