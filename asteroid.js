const figures = [
    [
        [8, 0], [8, 8], [0, 12], [-6, 8], [-8, 0], [-6, 8], [-8, 8], [0, -6], [4, -4]
    ],
]

function getFigure() {
    return figures[Math.round(Math.random() * (figures.length - 1))];
}

var makeAsteroid = function() {
    let coordinate = {x: 0, y: 0 };
    let rotation = 230;
    new Asteroid(coordinate.x, coordinate.y, rotation, 10, getFigure());
}

class Asteroid extends GameObject{
    constructor(x, y, rotation, speed, figure) {
        super(x, y, rotation, speed, figure, true);
    }

    update() {
    }
}