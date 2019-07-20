var canvas = document.querySelector("#mycanvas");
var ctx = canvas.getContext("2d");

var bgColor = "#fff";
var fgColor = "#222";

const figure = [
    [0, 0],
    [5, 10],
    [0, 8],
    [-5, 10],
];

var mainPlayer = new Player(canvas.width / 2, canvas.height / 2, figure, ctx, canvas);

function start() {
    clearBoard(canvas, ctx);
}

function update() {
    mainPlayer.update();
}

start();
setInterval(update, 33);