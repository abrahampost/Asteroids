var mainPlayer = new Player(canvas.width / 2, canvas.height / 2);
var lives = settings.player.startingLives;
var score = 0;
var gameActive = true;

//TODO: Make an engine class which contains all of the subsequent teardown and setup methods

function start() {
    clearBoard();
    for (let i = 0; i < settings.gameplay.numStartingAsteroids; i++) {
        //make initial asteroids
        makeFreshAsteroid();
    }
    asteroidFactoryTimer();
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

/**
 * Displays gameober text and stops handling input for player
 */
var gameOver = () => {
    gameActive = false;
    removeObject(mainPlayer);
}

start();
setInterval(update, 33);