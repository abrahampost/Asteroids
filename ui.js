const lifeX = 30;
const lifeY = canvas.height - 30;
const lifeColor = "#fff";

const scoreX = canvas.width - 120;
const scoreY = canvas.height - 30;
const scoreColor = "#fff";

const warningColor = "#F88";

var drawLifeCount = () => {
    let prevColor = ctx.fillStyle;
    ctx.fillStyle = lifeColor;
    ctx.fillText(`REMAINING LIVES: ${lives}`, lifeX, lifeY, 150);
    ctx.fillStyle = prevColor;
}

var drawScore = () => {
    let prevColor = ctx.fillStyle;
    ctx.fillStyle = scoreColor;
    ctx.fillText(`SCORE: ${score}`, scoreX, scoreY, 150);
    ctx.fillStyle = prevColor;
}

var drawMinusLife = () => {
    let prevColor = ctx.fillStyle;
    ctx.fillStyle = warningColor;
    ctx.fillText(`-1 LIFE`, canvas.width / 2, canvas.height / 2, 150);
    ctx.fillStyle = prevColor;
}

var drawGameOver = () => {
    let prevColor = ctx.fillStyle;
    ctx.fillStyle = warningColor;
    ctx.fillText(`GAME OVER`, canvas.width / 2, canvas.height / 2, 150);
    ctx.fillStyle = prevColor;
}

var drawUI = () => {
    ctx.font.fontsize *= 2;
    drawLifeCount();
    drawScore();
    if (mainPlayer.invincible) {
        drawMinusLife();
    }
    if (!gameActive) {
        drawGameOver();
    }
    ctx.font.fontsize /= 2;
}