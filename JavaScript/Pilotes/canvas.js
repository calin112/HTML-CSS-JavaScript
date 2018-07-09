var positions = [{x: 20, y:20, dx:2, dy:3}];
var y = 20;
var WIDTH = 300;
var HEIGHT = 300;
var ctx;
var r = 20;
var interval;

function init() {
	var cv = document.getElementById('container');
	ctx = cv.getContext("2d");
	var aux = Math.floor(Math.random()*WIDTH) + 1;
	console.log(aux);
	positions.push({x:aux, y:aux, dx: 2, dy: 3});
	interval = setInterval(draw, 20);
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawBall(newx, newy, color="black") {
	ctx.beginPath();
	ctx.arc(newx, newy, r, 0, Math.PI*2, true);
	ctx.fillStyle = color;
	ctx.fill();
}

function draw() {
	clear();

	for (i=0; i<positions.length; i++) {
		var newx = positions[i].x;
		var newy = positions[i].y;
		var newdx = positions[i].dx;
		var newdy = positions[i].dy;

	if (newx + r + newdx  > WIDTH || newx - r + newdx < 0)
		newdx = -newdx;
	if (newy + r + newdy  > HEIGHT || newy - r + newdy < 0)
		newdy = -newdy;

	newx += newdx;
	newy += newdy;
	positions[i].x = newx;
	positions[i].y = newy;
	positions[i].dx = newdx;
	positions[i].dy = newdy;
	if (i==0)
		drawBall(newx, newy, "rgba(150, 45, 32, .5)");
	else drawBall(newx, newy);
	}
}

window.onload = init;