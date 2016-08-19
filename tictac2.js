var allMoves = [];
var plays = [];
var cpuPlays = [];
var clicked;
var player = ""; 
var cpu = "";
var mM = document.getElementById("5");

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
		console.log("win");
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
		console.log("cpu win");
	}
}

function cpuLogic(){
	var cpuMove = Math.floor(Math.random() * 9);
	cpuWin(cpuPlays, cpu);
	if (allMoves.indexOf(cpuMove.toString()) < 0){
		allMoves.push(cpuMove.toString())
		cpuPlays[(cpuMove.toString())] = cpu;
		$("#" + cpuMove.toString()).html(cpu);
		$("#" + cpuMove.toString()).addClass("clicked");
	}
	else {
			cpuMove = Math.floor(Math.random() * 9);
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
				allMoves.push(clickId);
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();
				break;	
			case "1":
			allMoves.push(clickId);	
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();
				break;	
			case "2":
			allMoves.push(clickId);
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();
				break;	
			case "3":
			allMoves.push(clickId);
				plays[clickId] = player;
				$(this).html(player);
				$(this).addClass("clicked");
				checkWin(plays, player);
				cpuWin(cpuPlays, cpu);
				cpuLogic();
				break;	
			case "4":
			allMoves.push(clickId);
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
		console.log(cpuPlays);
	}
}


$(document).ready(function(){
	startAlert();
	$(".box").click(clicks);
	cpuWin(cpuPlays, cpu);

})