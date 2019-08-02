var mainPlayer = new Player(canvas.width / 2, canvas.height / 2);
var lives = 3;
var score = 0;
var gameActive = true;

function start() {
    clearBoard();
    for(let i = 0; i < numStartingAsteroids; i++) {
        //make initial asteroids
        makeFreshAsteroid();
    }
    asteroidFactoryTimer();
}

var gameOver = () => {
    gameActive = false;
    removeObject(mainPlayer);
}

function update() {
    clearBoard();
    for (let obj of gameObjects) {
        obj.update();
        obj.move();
        obj.draw();
    };
    drawUI();
}

start();
setInterval(update, 33);