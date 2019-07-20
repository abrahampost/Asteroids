var mainPlayer = new Player(canvas.width / 2, canvas.height / 2);

function start() {
    clearBoard();
    makeAsteroid();
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