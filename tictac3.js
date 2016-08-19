var moves = [];
var cpu = "";
var player = "";
var gameWin = false;
var boardfull = false;

function clicks(){
	$(".box").click(function(){
		$(this).addClass("playerMove");
		$(this).html(player);
		checkWin();
	});
}

var topRow = $(".top");
var midRow = $(".")

winGroups = [
	
]


function checkWin(){
	console.log($(".board").find(".playerMove").length);
}



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


$(document).ready(function(){
	startAlert();
	clicks();
})