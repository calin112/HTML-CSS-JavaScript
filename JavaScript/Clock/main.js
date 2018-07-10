var h = 0;
var m = 0;
var s = 0;

function startTime() {
	if (h < 10 && m < 10 && s < 10)
    	document.getElementById('txt').innerHTML =
    "0" + h + ":" + "0" + m + ":" + "0" + s;
    else if (h < 10 && m < 10)
    	document.getElementById('txt').innerHTML =
    "0" + h + ":" + "0" + m + ":" + s;
    else if (h < 10 && s < 10)
    	document.getElementById('txt').innerHTML =
    "0" + h + ":" + m + ":" + "0" + s;
    else if (h < 10)
    	document.getElementById('txt').innerHTML =
    "0" + h + ":" + m + ":" + s;
    else if (m < 10 && s < 10)
    	document.getElementById('txt').innerHTML =
    h + ":" + "0" + m + ":" + "0" + s;
    else if (m < 10)
    	document.getElementById('txt').innerHTML =
    h + ":" + "0" + m + ":" + s;
    else if (s < 10)
    	document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + "0" + s;
    else
    	document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    s++;
    if (s >= 60) {
    	m++;
    	s = 0;
    }
    if (m >= 60) {
    	h++;
    	m = 0;
    }
    if (h >= 24) {
    	h = 0;
    }
}

function startClock() {
	document.getElementById('txt').innerHTML =
    "0" + h + ":" + "0" + m + ":" + "0" + s;
	setInterval(startTime, 1000);
}