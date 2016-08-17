'use strict'

var currentDate = new Date();
var monthList = new Array('jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec');

var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
var DOMCurrentMonth = document.getElementById(monthList[currentMonth]);

for (var i = 0; i < 200; i++) {
	if (DOMCurrentMonth.childNodes[i].innerHTML == currentDay && i > currentDay) {
		DOMCurrentMonth.childNodes[i].classList.add("currentDay");
		break;
	}
}