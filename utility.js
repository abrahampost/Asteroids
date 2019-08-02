/**
 * 
 * @param {*} points an array of 2-integer subarrays which detail a figure to fill in on the canvas
 */
var fillPath = (points) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let point of points.slice(1)) {
        ctx.lineTo(point[0], point[1]);
    }
    ctx.closePath();
    ctx.fill();
};

/**
 * 
 * @param {*} points an array of 2-integer subarrays which detail a figure to outline on the canvas
 */
var strokePath = (points) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let point of points.slice(1)) {
        ctx.lineTo(point[0], point[1]);
    }
    ctx.closePath();
    ctx.stroke();
};

/**
 * Clears the entire canvas of any drawing and fills it entirely with the global background color
 */
var clearBoard = () => {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Transforms a single point 
 * @param {*} x the x coordinate of the point relative to the parent figure
 * @param {*} y the y coordinate of the point relative to the parent figure
 * @param {*} rotation the rotation in degrees of the parent figure
 * @param {*} offsetX the x coordinate of the parent figure
 * @param {*} offsetY the y coordinate of the parent figure
 */
var transformPoint = (x, y, rotation, offsetX, offsetY) => {
    let newX = offsetX + x * Math.cos(rotation) - y * Math.sin(rotation);
    let newY = offsetY + y * Math.cos(rotation) + x * Math.sin(rotation);
    return [newX, newY];
}

/**
 * 
 * @param {*} points the points of the figure relative to the origin
 * @param {*} rotation the rotation of the figure
 * @param {*} offsetX the x position of the figure
 * @param {*} offsetY the y position of the figure
 */
var transformAll = (points, rotation, offsetX, offsetY) => {
    return points.map((point) => {
        return transformPoint(point[0], point[1], rotation, offsetX, offsetY);
    })
}

var randFrom = (low, high) => {
    let res = Math.round(Math.random() * (high - low)) + low;
    return res;
}

var randBool = () => {
    // res will be equal to either a 0 or 1
    let res = randFrom(0, 1);
    return res === 1;
}

/**
 * Scales a figure based on a size multiplier
 * @param {*} figure an array filled with 2-integer subarrays
 * @param {*} multiplier the scale
 */
var scaleFigure = (figure, scale) => {
    return figure.map((point) => {
        return [point[0] * scale, point[1] * scale];
    });
}

var getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
}

var removeObject = (passedObj) => {
    gameObjects = gameObjects.filter((obj) => {
        return obj !== passedObj;
    });
}