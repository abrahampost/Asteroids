const MAX_SPEED = 10;
const MAX_BULLETS = 3;

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
        this.hitpoints = 3;
        this.invincible = false;
        this.bulletsFired = 0;
        this.canFire = true;
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
        if (pressed.SPACE) {
            this.fire();
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

    fire() {
        if (this.bulletsFired < MAX_BULLETS && this.canFire) {
            let bullet = new Bullet(this.x, this.y, this.rotation, 12);
            this.bulletsFired += 1;
            this.canFire = false; //This acts as a bullet cooldown
            setTimeout(() => {
                this.canFire = true;
            }, 500);
            setTimeout(() => {
                gameObjects = gameObjects.filter((obj) => {
                    return obj !== bullet;
                });
                this.bulletsFired -= 1;
            }, 1500)
        }
    }

    handleCollision() {
        score -= 100;
        if (this.hitpoints === 0) {
            //TODO: Endgame stuff here
            alert("GAME OVER");
        } else {
            this.hitpoints -= 1;
        }
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.invincible = true;
        setTimeout(() => {
            this.invincible = false
        }, 3000);
    }
}