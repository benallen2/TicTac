var moves = [];
var cpu = "";
var player = "";

var playerMove = "You"
var CpuTurn = "Cpu"


var topRow = $(".top");
var midRow = $(".mid");
var botRow = $(".bot");
var leftCol = $(".left");
var midCol = $(".cntr");
var rightCol = $(".right");
var slashDiag = $(".slash");
var backslashDiag = $(".backslash");

winGroups = [topRow, midRow, botRow, leftCol, midCol, rightCol, slashDiag, backslashDiag]; // winning combos

var gameWin = false;
var boardfull = false;

function playerTurn(elem){
	if ($(elem).is(":empty")){
		elem.html(player);
		elem.addClass("You");
		return true;
	}
	return false;
}

function fullBoardCheck (){
	return $(".board").find(":empty").length === 0;
}



function cpuLogic(){
	var available = $("#board").find(":empty");
	var cpuMove = Math.floor(Math.random() * available.length);
	$(available[cpuMove]).html(cpu);
	$(available[cpuMove]).addClass("Cpu");
	return true;
}


function checkWin(who){
	var win = false;
	var retVal = false;
	if ($("#0").hasClass(who) && $("#1").hasClass(who) && $("#2").hasClass(who)){
		retVal = true
		alert(who + " win!")
		$("#0").css("background-color", "red");
		$("#1").css("background-color", "red");
		$("#2").css("background-color", "red");
	}
	else if ($("#3").hasClass(who) && $("#4").hasClass(who) && $("#5").hasClass(who)){
		retVal = true
		alert(who + " win!")
		$("#3").css("background-color", "red");
		$("#4").css("background-color", "red");
		$("#5").css("background-color", "red");
	}
	else if ($("#6").hasClass(who) && $("#7").hasClass(who) && $("#8").hasClass(who)){
		retVal = true
		alert(who + " win!")
		$("#6").css("background-color", "red");
		$("#7").css("background-color", "red");
		$("#8").css("background-color", "red");
	}
	else if ($("#0").hasClass(who) && $("#3").hasClass(who) && $("#6").hasClass(who)){
		retVal = true
		alert(who + " win!")
		$("#0").css("background-color", "red");
		$("#3").css("background-color", "red");
		$("#6").css("background-color", "red");
	}
	else if ($("#1").hasClass(who) && $("#4").hasClass(who) && $("#7").hasClass(who)){
		retVal = true
		alert(who + " win!")
		$("#1").css("background-color", "red");
		$("#4").css("background-color", "red");
		$("#7").css("background-color", "red");
	}
	else if ($("#2").hasClass(who) && $("#5").hasClass(who) && $("#8").hasClass(who)){
		retVal = true
		alert(who + " win!")
		$("#2").css("background-color", "red");
		$("#5").css("background-color", "red");
		$("#8").css("background-color", "red");
	}
	else if ($("#0").hasClass(who) && $("#4").hasClass(who) && $("#8").hasClass(who)){
		retVal = true
		alert(who + " win!")
		$("#0").css("background-color", "red");
		$("#4").css("background-color", "red");
		$("#8").css("background-color", "red");
	}
	else if ($("#2").hasClass(who) && $("#4").hasClass(who) && $("#6").hasClass(who)){
		retVal = true
		alert(who + " win!")
		$("#2").css("background-color", "red");
		$("#4").css("background-color", "red");
		$("#6").css("background-color", "red");
	}

	return retVal;

};


function clicks(){
	$(".box").click(function() {
		if (!gameWin && !boardfull){
			var moved = playerTurn($(this));
			
		if (moved) {
			if (checkWin("You")) {
				gameWin = true;
				
			}
			boardfull = fullBoardCheck();

			if (!gameWin && !boardfull){
				cpuLogic();

				if (checkWin(CpuTurn)) {
					gameWin = false;
				}

				boardfull = fullBoardCheck();
				
			}
		}

	}
		if (boardfull || gameWin){
			setTimeout(resetBoard, 1000);
		}
	});
}

function resetBoard() {

location.reload()
}


function startAlert (){
	$("#alert").modal("show");	
	$(".selector").click(function(){
		if ($(this).is("#xs")){
		player = "X";
		cpu = "O";
	} else {
		player = "O";
		cpu = "X";
	};
	cpuLogic();
});

}

$(document).ready(function(){
	startAlert();

	clicks();

});

