var allMoves = ["", "", "", "", "", "", "", "", "",];
var plays = [];
var cpuPlays = [];
var clicked;
var player = ""; 
var cpu = "";


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

function checkWin(arr, sign){
	if (arr[0] === sign && arr[1] === sign && arr[2] === sign ||
		arr[3] === sign && arr[4] === sign && arr[5] === sign ||
		arr[6] === sign && arr[7] === sign && arr[8] === sign ||// horizontal
		arr[0] === sign && arr[3] === sign && arr[6] === sign ||
		arr[1] === sign && arr[4] === sign && arr[7] === sign ||
		arr[2] === sign && arr[5] === sign && arr[8] === sign ||//vertical
		arr[3] === sign && arr[4] === sign && arr[5] === sign ||
		arr[0] === sign && arr[4] === sign && arr[8] === sign ||//diagonal
		arr[2] === sign && arr[4] === sign && arr[6] === sign)
	{
		console.log("you win!");
	}
}

function cpuWin(arr, sign){
	if (arr[0] === sign && arr[1] === sign && arr[2] === sign ||
		arr[3] === sign && arr[4] === sign && arr[5] === sign ||
		arr[6] === sign && arr[7] === sign && arr[8] === sign ||// horizontal
		arr[0] === sign && arr[3] === sign && arr[6] === sign ||
		arr[1] === sign && arr[4] === sign && arr[7] === sign ||
		arr[2] === sign && arr[5] === sign && arr[8] === sign ||//vertical
		arr[3] === sign && arr[4] === sign && arr[5] === sign ||
		arr[0] === sign && arr[4] === sign && arr[8] === sign ||//diagonal
		arr[2] === sign && arr[4] === sign && arr[6] === sign)
	{
		console.log("cpu wins :(");
	}
}




function clicks(){// pushes to array 
	if ($(this).hasClass("clicked")){
		alert("Already Clicked");
	}
	else {
		var clickId = $(this).attr("id");
		switch(clickId){
			case "0":
				allMoves[parseInt(clickId)] = clickId;
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();
				
				break;	
			case "1":
			allMoves[clickId] = clickId;
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();
			
				break;	
			case "2":
			allMoves[clickId] = clickId;
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();
	
				break;	
			case "3":
			allMoves[clickId] = clickId;
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();

				break;	
			case "4":
			allMoves[clickId] = clickId;
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();

				break;	
			case "5":
			allMoves.push(clickId);
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();

				break;	
			case "6":
			allMoves.push(clickId);
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();

				break;	
			case "7":
			allMoves.push(clickId);
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();

				break;
			case "8":
			allMoves.push(clickId);
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();

				break;			
		}
		console.log(allMoves);
	}
}


function cpuLogic(){

	var cpuMove = Math.floor(Math.random() * 9);
	if ($("#" + cpuMove).is(":empty")){
		$("#" + cpuMove).addClass("clicked");
		$("#" + cpuMove).html(cpu)
	}
	else {
		cpuMove = Math.floor(Math.random() * 9);
	}
	console.log(cpuMove);

};

$(document).ready(function(){
	startAlert();
	$(".box").click(clicks);
	cpuWin(cpuPlays, cpu);

})