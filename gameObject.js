class GameObject {
    constructor(x, y, initialRotation, initialSpeed, figure, filled) {
        this.x = x;
        this.y = y;
        this.rotation = initialRotation;
        this.speed = initialSpeed;
        this.figure = figure;
        this.filled = filled;
        gameObjects.push(this);
    }

    move() {
        let newX = (this.x + Math.sin(this.rotation) * this.speed);

        if (newX < 0) {
            newX = canvas.width;
        } else if (newX > canvas.width) {
            newX = 0;
        }

        let newY = (this.y - Math.cos(this.rotation) * this.speed);
        if (newY < 0) {
            newY = canvas.height;
        } else if (newY > canvas.height) {
            newY = 0;
        }

        this.x = newX;
        this.y = newY;
    }

    draw() {
        let newFigure = this.getTransformedFigure();

        if (this.filled) {
            ctx.fillStyle = fgColor;
            fillPath(newFigure);
        } else {
            ctx.strokeStyle = fgColor;
            strokePath(newFigure);
        }
    }

    getTransformedFigure() {
        return transformAll(this.figure, this.rotation, this.x, this.y);
    }
}