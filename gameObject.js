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

    /**
     * Determines the next position of a figure based off its current position and speed
     * If object goes off of the edge of a screen, wraps around to other side
     */
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

    /**
     * Draws the gameobject onto the canvas in the corresponding style and position
     */
    draw() {
        let newFigure = this.getTransformedFigure();

        if (this.filled) {
            ctx.fillStyle = settings.theme.fgColor;
            fillPath(newFigure);
        } else {
            ctx.strokeStyle = settings.theme.fgColor;
            strokePath(newFigure);
        }
    }

    /**
     * Returns the positions of the points making up the rotated figure
     * Used in drawing to canvas AND collision detection
     */
    getTransformedFigure() {
        return transformAll(this.figure, this.rotation, this.x, this.y);
    }
}