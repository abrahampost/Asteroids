const playerFigure = [
    [0, 0],
    [7, 14],
    [0, 8],
    [-7, 14],
];

class Player extends GameObject {
    constructor(x, y) {
        super(x, y, 0, 0, playerFigure, false);
        this.acceleration = 2;
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
        if (amount > 0 && this.speed < settings.player.maxSpeed) {
            this.speed += amount;
        }
        if (amount < 0 && this.speed > -settings.player.maxSpeed) {
            this.speed += amount;
        }
    }

    changeRotation(amount) {
        this.rotation += amount / 10;
    }

    fire() {
        if (this.bulletsFired < settings.player.maxBullets && this.canFire) {
            let bullet = new Bullet(this.x, this.y, this.rotation, 12);
            this.bulletsFired += 1;
            this.bulletCooldown(settings.player.bulletCooldown);
            this.removeBulletAfter(bullet, settings.player.bulletLifetime); //removes bullet after certain amount of time
        }
    }

    /**
     * Handles collisions with asteroids
     */
    handleCollision() {
        score -= settings.score.loseLife;
        if (lives === 0) {
            // Out of lives, game should end
            gameOver();
        } else {
            // If game continues, remove life and reset player position to center of screen
            lives -= 1;
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.invincible = true;
            this.invincibilityCooldown(settings.player.invincibilityCooldown);
        }
    }

    /**
     * Prevents firing until the bullet cooldown timer has elapsed
     * @param {Number} time 
     */
    bulletCooldown(time) {
        this.canFire = false; //This acts as a bullet cooldown
        setTimeout(() => {
            this.canFire = true;
        }, time);
    }

    /**
     * Removes a bullet after a specified amount of time has elapsed.
     * @param {Bullet} bullet 
     * @param {Number} time 
     */
    removeBulletAfter(bullet, time) {
        setTimeout(() => {
            gameObjects = gameObjects.filter((obj) => {
                return obj !== bullet;
            });
            this.bulletsFired -= 1;
        }, time)
    }

    invincibilityCooldown(time) {
        setTimeout(() => {
            this.invincible = false
        }, time);
    }
}