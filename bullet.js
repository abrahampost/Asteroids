const bulletFigure = [
    [-2, -2], [2, -2],
    [2, 2], [-2, 2]
]

class Bullet extends GameObject {
    constructor(x, y, rotation, speed) {
        super(x, y, rotation, speed, bulletFigure, true)
    }

    update() {
        this.checkCollision();
    }

    checkCollision() {
        for (let obj of gameObjects) {
            //TODO: Keep list of asteroids to avoid type checking
            if (obj instanceof Asteroid) {
                let distance = getDistance(this.x, this.y, obj.x, obj.y);
                if (distance < (11 * obj.size)) {
                    removeObject(this);
                    obj.takeFire();
                }
            }
        }
    }
}