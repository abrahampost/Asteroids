const MAX_SPEED = 10;

class Player {
    constructor(x, y, figure, ctx, canvas) {
        this.x = x,
        this.y = y;
        this.figure = figure;
        this.ctx = ctx;
        this.canvas = canvas;
        this.rotation = 0;
        this.speed = 0;
        this.acceleration = 2;
    }

    update() {
        clearBoard();
        this.checkInput();
        this.updatePositions();
        this.updateSpeeds();
        this.drawPlayer();
    }

    drawPlayer() {
        let newFigure = transformAll(this.figure, this.rotation, this.x, this.y);

        ctx.fillStyle = fgColor;
        fillPath(this.ctx, newFigure);
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

    updatePositions() {
        let newX = (this.x + Math.sin(this.rotation) * this.speed);

        if (newX < 0) {
            newX = this.canvas.width;
        } else if (newX > this.canvas.width) {
            newX = 0;
        }

        let newY = (this.y - Math.cos(this.rotation) * this.speed);
        if (newY < 0) {
            newY = this.canvas.height;
        } else if (newY > this.canvas.height) {
            newY = 0;
        }

        this.x = newX;
        this.y = newY;
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