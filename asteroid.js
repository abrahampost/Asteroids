// A 22 across circle that will be deformed to look like an asteroid
const baseFigure = [
    [10, 0], [10, 4], [9, 5], [9, 6], [8, 7], [7, 8], [6, 9], [5, 10], [4, 10], [3, 11], [-3, 11],
    [-10, 0], [-10, 4], [-9, 5], [-9, 6], [-8, 7], [-7, 8], [-6, 9], [-5, 10], [-4, 10], [-3, 11], [-3, 11],
    [-10, -0], [-10, -4], [-9, -5], [-9, -6], [-8, -7], [-7, -8], [-6, -9], -[5, -10], -[4, -10], [-3, -11], [-3, -11],
    [10, 0], [10, -4], [9, -5], [9, -6], [8, -7], [7, -8], [6, -9], [5, -10], [4, -10], [3, -11], [-3, -11],
];

var makeAsteroid = function () {
    //TODO: Give a random starting coordinate on the boundaries of the canvas
    let coordinate = { x: 0, y: 0 };
    let rotation = randFrom(0, 360);
    let speed = randFrom(3, 6);
    let size = randFrom(1, 3);
    //TODO: Deform figure to make it look "Asteroid"-ish
    let sizedFigure = scaleFigure(baseFigure, size);
    new Asteroid(coordinate.x, coordinate.y, rotation, speed, size, sizedFigure);
}

class Asteroid extends GameObject {
    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} rotation 
     * @param {*} speed 
     * @param {*} size goes from 1 to 3
     * @param {*} figure a collection of points which make up the asteroid
     */
    constructor(x, y, rotation, speed, size, figure) {
        super(x, y, rotation, speed, figure, true);
        this.size = size;
    }

    update() {
        this.checkCollision();
    }

    checkCollision() {
        let collisionDistance = 11 * this.size;
        let distanceToPlayer = getDistance(this.x, this.y, mainPlayer.x, mainPlayer.y);
        if (!mainPlayer.invincible && (distanceToPlayer < collisionDistance)) {
            mainPlayer.handleCollision();
            //TODO: Better system to remove asteroid
            gameObjects.filter((obj) => {
                return obj !== this;
            });
        }
    }
}