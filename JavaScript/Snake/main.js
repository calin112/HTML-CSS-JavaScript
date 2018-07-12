//Global
var speed = 80;
var size = 10;
var GameOver = true;
var NewGame = true;
var points = 0;

class object {
	constructor() {
		this.size = size;
	}
	meets(obj) {
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);
		if (difx >= 0 && difx < size && dify >= 0 && dify < size)
			return true;
		else
			return false;
	}
}

class queue extends object {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
		this.next = null;
	}
	draw(ctx) {
		if(this.next != null)
			this.next.draw(ctx);
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
	setxy(x, y) {
		if (this.next != null)
			this.next.setxy(this.x, this.y);
		this.x = x;
		this.y = y;
	}
	putin() {
		if (this.next == null) {
			this.next = new queue(this.x, this.y);
		} else {
			this.next.putin();
		}
	}
	seeNext() {
		return this.next;
	}
}

class Food extends object {
	constructor() {
		super();
		this.x = (Math.floor(Math.random() * 59)) * 10;
		this.y = (Math.floor(Math.random() * 57)) * 10;
	}
	place() {
		this.x = (Math.floor(Math.random() * 59)) * 10;
		this.y = (Math.floor(Math.random() * 57)) * 10;
	}
	draw(ctx) {
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
}

//Snake's objects
var head = new queue(20, 20);
var food = new Food();
var horizontal = true;
var vertical = true;
var xdir = 0;
var ydir = 0;

function move() {
	var nx = head.x + xdir;
	var ny = head.y + ydir;
	head.setxy(nx, ny);
}

function control(event) {
	if (horizontal) {
		if (event.keyCode == 38) {
			ydir = -size;
			xdir = 0;
			horizontal = false;
			vertical = true;
		}
		else if (event.keyCode == 40) {
			ydir = size;
			xdir = 0;
			horizontal = false;
			vertical = true;
		}
	}
	if (vertical) {
		if (event.keyCode == 37) {
			ydir = 0;
			xdir = -size;
			vertical = false;
			horizontal = true;
		}
		else if (event.keyCode == 39) {
			ydir = 0;
			xdir = size;
			vertical = false;
			horizontal = true;
		}
	}
}

function gameOver() {
	xdir = 0;
	ydir= 0;
	horizontal = true;
	vertical = true;
	head= new queue(20, 20);
	food = new Food();
	GameOver = true;
}

function hitWall() {
	if (head.x < 0 || head.x > 590 || head.y < 0 || head.y > 590)
		gameOver();
}

function hitBody() {
	var temp = null;
	try {
		temp = head.seeNext().seeNext();
	}catch(err) {
		temp = null;
	}
	while (temp != null) {
		if(head.meets(temp)) {
			//Game Over
			gameOver();
		} else {
			temp = temp.seeNext();
		}
	}
}
function draw(event) {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.fill();
	if (NewGame) {
		ctx.font = "45px PressStart2P";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText("SNAKE", canvas.width/2, canvas.height/2);

		ctx.font = "15px PressStart2P";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText("PRESS ENTER TO START", canvas.width/2, canvas.height/2 + 60);
		if (event.keyCode == 13) {
			NewGame = false;
			GameOver = false;
			ydir = 0;
			xdir = 0;
		}
	}
	if (!GameOver) {
		food.draw(ctx);
		head.draw(ctx);
		ctx.font = "30px PressStart2P";
		ctx.fillStyle = "red";
		ctx.textAlign = "right";
		ctx.fillText(points, canvas.width, canvas.height);
	}
	if (GameOver && !NewGame) {
		ctx.font = "45px PressStart2P";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);

		ctx.font = "30px PressStart2P";
		ctx.fillStyle = "red";
		ctx.textAlign = "right";
		ctx.fillText("SCORE: ", canvas.width/2 + 80, canvas.height/2 + 60);

		ctx.font = "30px PressStart2P";
		ctx.fillStyle = "red";
		ctx.textAlign = "left";
		ctx.fillText(points, canvas.width/2 + 80, canvas.height/2 + 60);

		ctx.font = "15px PressStart2P";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText("CONTINUE? PRESS ENTER", canvas.width/2, canvas.height/2 + 100);
		if (event.keyCode == 13)
			GameOver = false;
			ydir = 0;
			xdir = 0;
			points = 0;
	}
}

function main() {
	hitBody();
	hitWall();
	draw();
	move();
	if (head.meets(food)) {
		points += 10;
		food.place();
		head.putin();
	}
}

var refresh = setInterval("main()", speed);