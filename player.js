const MAX_SPEED = 10;

const playerFigure = [
    [0, 0],
    [7, 14],
    [0, 8],
    [-7, 14],
];

class Player extends GameObject{
    constructor(x, y) {
        super(x, y, 0, 0, playerFigure, false);
        this.acceleration = 2;
    }

    update() {
        this.checkInput();
        this.updateSpeeds();
    }
    
    checkInput() {
        if (pressed.UP) {
            this.changeSpeed(this.acceleration);
        }
        if (pressed.DOWN) {
            this.changeSpeed(-this.acceleration);
        }
        if (pressed.LEFT) {
            this.changeRotation(-this.acceleration);
        }
        if (pressed.RIGHT) {
            this.changeRotation(this.acceleration);
        }

    }

    updateSpeeds() {
        if (this.speed > 0) {
            this.speed -= this.acceleration / 4;
        } else if (this.speed < 0) {
            this.speed += this.acceleration / 4;
        }
    }

    changeSpeed(amount) {
        if (amount > 0 && this.speed < MAX_SPEED) {
            this.speed += amount;
        }
        if (amount < 0 && this.speed > -MAX_SPEED) {
            this.speed += amount;
        }
    }

    changeRotation(amount) {
        this.rotation += amount / 10;
    }
}