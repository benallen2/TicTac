var moves = [];
var cpu = "";
var player = "";
var gameWin = false;
var boardfull = false;
var playerMove = "playerMove"
var cpuMove = "cpuMove"


var topRow = $(".top");
var midRow = $(".mid");
var botRow = $(".bot");
var leftCol = $(".left");
var midCol = $(".cntr");
var rightCol = $(".right");
var slashDiag = $(".slash");
var backslashDiag = $(".backslash");

winGroups = [topRow, midRow, botRow, leftCol, midCol, rightCol, slashDiag, backslashDiag]; // winning combos


function playerTurn(thisObj){
	if ($(thisObj).is(":empty")){
		thisObj.html(player);
		thisObj.addClass("playerMove");
		return true;
	}
	return false;
}

function fullBoardCheck (){
	if ($(".board").find(":empty").length === 0){
		return true;
	}
}



function cpuLogic(){
	var available = $(".board").find(":empty");
	var cpuMove = Math.floor(Math.random() * available.length);
	$(available[cpuMove]).html(cpu);
	$(available[cpuMove]).addClass("cpuMove");
	return true;
}


function checkWin(player){
	var win;
	var val = false;
	winGroups.forEach(function(group, index, array){
		win = true;
		group.each(function(index){
			win = win && $(group[index]).hasClass(player);
		});

		if (win) {
			group.each(function() {
			$(this).css("color", "red");
		});
		val = true;
		}
	});
	return val;
}

function clicks(){
	$(".box").click(function() {
		if (!gameWin && !boardfull){
			var moved = playerTurn($(this));

		if (moved) {
			if (checkWin(playerMove)) {
				gameWin = true;
			}
			boardfull = fullBoardCheck();

			if (!gameWin && !boardfull){
				cpuLogic();

				if (checkWin(cpuMove)) {
					gameWin = true;
				}

				boardfull = fullBoardCheck();
				
			}
		}

	}
		if (boardfull || gameWin){
			console.log(gameWin);
		}
	});
}

function resetBoard() {

  $(".box").each(function() {
    $(this).html('');
    $(this).removeClass('playerMove');
    $(this).removeClass('computerMove');
    $(this).css("color", "white");
  })
  gameWon = false;
  boardFull = false;
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

  cpuLogic();

};

$(document).ready(function(){
	startAlert();

	clicks();
	resetBoard();
	cpuLogic();
	playerTurn();
	fullBoardCheck();

});

