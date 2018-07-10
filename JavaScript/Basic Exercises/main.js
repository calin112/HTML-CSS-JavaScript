function squareOf() {
	var x = document.getElementById("myNumber").value;
	document.getElementById("result").innerHTML = Math.pow(x, 2);
}

function evenOdd() {
	var x = document.getElementById("oddEven").value;
	x = x % 2;
	if (x == 0) {
    	document.getElementById("result1").innerHTML = "Even!";
	}
	else {
		document.getElementById("result1").innerHTML = "Odd!";
	}
}

function factorial () {
	var n = document.getElementById("facto").value;
	var total = 1; 
	for (i=1; i<=n; i++) {
		total += total * i; 
	}
	document.getElementById("result2").innerHTML = total;
}

function random () {
	document.getElementById("result3").innerHTML = Math.random()*10;
}

function maximum () {
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;
	var n3 = document.getElementById("n3").value;
	var n4 = document.getElementById("n4").value;
	document.getElementById("result4").innerHTML = Math.max(Math.max(n1, n2), Math.max(n3, n4));
}

function answerpls() {
	return "Hi, who's calling?";
}

function callher () {
	document.getElementById("result5").innerHTML = answerpls();
}