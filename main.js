var mainPlayer = new Player(canvas.width / 2, canvas.height / 2);
var score = 0;

function start() {
    clearBoard();
    for(let i = 0; i < numStartingAsteroids; i++) {
        makeFreshAsteroid();
    }
}

function update() {
    clearBoard();
    for (let obj of gameObjects) {
        obj.update();
        obj.move();
        obj.draw();
    };
}

start();
setInterval(update, 33);