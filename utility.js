var fillPath = (points) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let point of points.slice(1)) {
        ctx.lineTo(point[0], point[1]);
    }
    ctx.closePath();
    ctx.fill();
};

var strokePath = (points) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let point of points.slice(1)) {
        ctx.lineTo(point[0], point[1]);
    }
    ctx.closePath();
    ctx.stroke();
};

var clearBoard = () => {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

var transformPoint = (x, y, rotation, offsetX, offsetY) => {
    let newX = offsetX + x * Math.cos(rotation) - y * Math.sin(rotation);
    let newY = offsetY + y * Math.cos(rotation) + x * Math.sin(rotation);
    return [newX, newY];
}

var transformAll = (points, rotation, offsetX, offsetY) => {
    return points.map((point) => {
        return transformPoint(point[0], point[1], rotation, offsetX, offsetY);
    })
}

var randBool = () => {
    // res will be equal to either a 0 or 1
    let res = Math.round(Math.random());
    return res === 1;
}