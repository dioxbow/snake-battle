var WIDTH, HEIGHT;
var canvas, ctx;
var input;
var player;

function main() {
	WIDTH = 500;
	HEIGHT = 500;

	canvas = document.getElementById("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	ctx = canvas.getContext("2d");

	init();
}

function init() {
	input = new InputManager();

	player = [];
	player.push(new Segment(WIDTH/2-10, HEIGHT/2-10, "player", 20, 0, 1));
	player.push(new Segment(WIDTH/2-9, HEIGHT/2-10, "player", 18, 0, 1));
	player.push(new Segment(WIDTH/2-8, HEIGHT/2-10, "player", 16, 0, 1));
	player.push(new Segment(WIDTH/2-7, HEIGHT/2-10, "player", 14, 0, 1));
	player.push(new Segment(WIDTH/2-6, HEIGHT/2-10, "player", 12, 0, 1));
	player.push(new Segment(WIDTH/2-5, HEIGHT/2-10, "player", 10, 0, 1));
	player.push(new Segment(WIDTH/2-4, HEIGHT/2-10, "player", 8, 0, 1));
	player.push(new Segment(WIDTH/2-3, HEIGHT/2-10, "player", 6, 0, 1));

	window.requestAnimationFrame(loop);
}

function loop() {
	update();
	draw();
	window.requestAnimationFrame(loop);
}

function update() {
	//player[0].updateTail(input.getMouse("x"), input.getMouse("y"), 0);
	player[0].updateHead();
	for (var i = 1; i < player.length; i++) {
		player[i].updateTail(player[i-1].x, player[i-1].y, player[i-1].getSize());
	}
}

function draw() {
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.save();

	for (var i = 0; i < player.length; i++) {
		player[i].draw();
	}

	ctx.restore();
}

main();
