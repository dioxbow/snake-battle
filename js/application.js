var WIDTH, HEIGHT;
var canvas, ctx;

function main() {
	WIDTH = 500;
	HEIGHT = 500;

	canvas = document.getElementById("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	ctx = canvas.getContext("2d");
	input = new InputManager();

	init();
}

function init() {
	window.requestAnimationFrame(loop);
}

function loop() {
	update();
	draw();
	window.requestAnimationFrame(loop);
}

function update() {}

function draw() {
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.save();

	ctx.fillStyle = "#ffffff";
	ctx.font = "20px Verdana, sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("Focus: " + input.getFocus(), WIDTH/2, 40);
	ctx.fillText("Mouse down: " + input.getMouse("down"), WIDTH/2, 60);
	ctx.fillText("Mouse (x, y): " + input.getMouse("x") +  ", " + input.getMouse("y"), WIDTH/2, 80);
	ctx.fillText("Up: " + input.getKey("up"), WIDTH/2, 100);
	ctx.fillText("Down: " + input.getKey("down"), WIDTH/2, 120);
	ctx.fillText("Left: " + input.getKey("left"), WIDTH/2, 140);
	ctx.fillText("Right: " + input.getKey("right"), WIDTH/2, 160);

	ctx.restore();
}

main();