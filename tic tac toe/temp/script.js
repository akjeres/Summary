'use strict'
var stepNumber=0;
var cellArray = new Array;
var cellID = new Array ('cell0', 'cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8');
var winner;
var winComb0 = new Array (0, 1, 2);
var winComb1 = new Array (3, 4, 5);
var winComb2 = new Array (6, 7, 8);
var winComb3 = new Array (0, 3, 6);
var winComb4 = new Array (1, 4, 7);
var winComb5 = new Array (2, 5, 8);
var winComb6 = new Array (0, 4, 8);
var winComb7 = new Array (2, 4, 6);
var winCombination = new Array (winComb0, winComb1, winComb2, winComb3, winComb4, winComb5, winComb6, winComb7)
// Выбор режима игры
function chooseSinglePlayer() {
	alert('Single Player Mode Selected!');
	document.getElementById('gameMode').style.display='none';
	document.getElementById('singleMode').style.display='block';
}
// Needs to update!!!!!!!!!
function chooseX() {
	alert('X Game Mode Selected!');
	document.getElementById('table').style.visibility='visible';
	document.getElementById('singleMode').style.display='none';
	alert('X Game Mode is Not Supported!');
	location.reload();
}
// *Needs to update!!!!!!!!!!
// In work
function chooseO() {
	alert('O Game Mode Selected!');
	document.getElementById('table').style.visibility='visible';
	document.getElementById('singleMode').style.display='none';
}
// *In work
function chooseMultiPlayer() {
	alert('Multi Player Mode Selected!');
	document.getElementById('table').style.visibility='visible';
	document.getElementById('gameMode').style.display='none';
}
// *Выбор режима игры
// Устанавливает значение крестик или нолик
function changeCellValue(stepNumber) {
	if (stepNumber%2==0) {
		return('x');	
	}
	else {
		return('o');
	}
}
// Окрашивает победившую комбинацию ходов в цвет игрока
function setColor(winner) {
	if (winner == 'x') {
		return('green');
	}
	else if (winner == 'o') {
		return('yellow');
	}
}
function colorWin(winarea) {
	document.getElementById(cellID[winarea]).style.backgroundColor=setColor(winner);
}
//*Окрашивает победившую комбинацию ходов в цвет игрока
function gameOver() {
	document.getElementById('table').style.display='none';
	var newGame = confirm('Would You like to play New Game?');
	if (newGame == true)	{
		return (location.reload());
	}
}
// Указывает, кто победил
function winnerName(winner) {
	if (winner == 'x') {
		(alert('Player 1 wins!'));
		gameOver();
	}
	else if (winner == 'o') {
		(alert('Player 2 wins!'));
		gameOver();
	}
	else if (winner == 'noone') {
		(alert('Nobody wins :('));
		gameOver();
	}
}
//Для задания ничейного результата
function nooneWins(cellArray) {
	var j=0;
	for (var i=0; i<cellArray.length; i++) {
		if (cellArray[i] == 'x' || cellArray[i] == 'o'){j++;}
}
	if (j==9) {winner='noone'}
}

/*function checkgameOver(cellArray) {
	var temp;
	for (var j=0; j<winCombination.length; j++)	{
	if (cellArray[winCombination[j][0]]==cellArray[winCombination[j][1]] &&
	cellArray[winCombination[j][1]]==cellArray[winCombination[j][2]] &&
	cellArray[winCombination[j][1]] != undefined ) {
		break;
		temp = j}
		winner = cellArray[winCombination[temp][0]];
		for (var k=0; k<winCombinartion[temp].length; k++) {
		colorWin(winCombination[j][k]);
		}
	
	}
	
	winnerName(winner);
}
*/

function checkgameOver(cellArray) {
	if (cellArray[0]==cellArray[1] && cellArray[1]==cellArray[2]) {
		winner = cellArray[0];
		colorWin(0);
		colorWin(1);
		colorWin(2);
	}
	else if (cellArray[3]==cellArray[4] && cellArray[4]==cellArray[5]) {
		winner = cellArray[3];
		colorWin(3);
		colorWin(4);
		colorWin(5);
	}
	else if (cellArray[6]==cellArray[7] && cellArray[7]==cellArray[8]) {
		winner = cellArray[6];
		colorWin(6);
		colorWin(7);
		colorWin(8);
	}
	else if (cellArray[0]==cellArray[3] && cellArray[3]==cellArray[6]) {
		winner = cellArray[0];
		colorWin(0);
		colorWin(3);
		colorWin(6);
	}
	else if (cellArray[1]==cellArray[4] && cellArray[4]==cellArray[7]) {
		winner = cellArray[1];
		colorWin(1);
		colorWin(4);
		colorWin(7);
	}
	else if (cellArray[2]==cellArray[5] && cellArray[5]==cellArray[8]) {
		winner = cellArray[2];
		colorWin(2);
		colorWin(5);
		colorWin(8);
	}
	else if (cellArray[0]==cellArray[4] && cellArray[4]==cellArray[8]) {
		winner = cellArray[0];
		colorWin(0);
		colorWin(4);
		colorWin(8);
	}
	else if (cellArray[2]==cellArray[4] && cellArray[4]==cellArray[6]) {
		winner = cellArray[2];
		colorWin(2);
		colorWin(4);
		colorWin(6);
	}
	else {nooneWins(cellArray);}
	winnerName(winner);
}
//*Доделать

function newStep(cellNumber) {
	if (document.getElementById(cellID[cellNumber]).innerHTML != 'x' && document.getElementById(cellID[cellNumber]).innerHTML != 'o') {
		document.getElementById(cellID[cellNumber]).innerHTML = changeCellValue(stepNumber);
		cellArray[cellNumber] = changeCellValue(stepNumber);
		stepNumber++;
		}
	checkgameOver(cellArray);
}

//Массив функций, вызывающихся кликом на ячейку
function cellNumber0() {
	var cellNumber = 0;
	newStep(cellNumber);
}
function cellNumber1() {
	var cellNumber = 1;
	newStep(cellNumber);
}
function cellNumber2() {
	var cellNumber = 2;
	newStep(cellNumber);
}
function cellNumber3() {
	var cellNumber = 3;
	newStep(cellNumber);
}
function cellNumber4() {
	var cellNumber = 4;
	newStep(cellNumber);
}
function cellNumber5() {
	var cellNumber = 5;
	newStep(cellNumber);
}
function cellNumber6() {
	var cellNumber = 6;
	newStep(cellNumber);
}
function cellNumber7() {
	var cellNumber = 7;
	newStep(cellNumber);
}
function cellNumber8() {
	var cellNumber = 8;
	newStep(cellNumber);
}
//*Массив функций, вызывающихся кликом на ячейку