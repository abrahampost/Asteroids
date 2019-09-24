const lifeX = 30;
const lifeY = canvas.height - 30;
const lifeColor = "#fff";

const scoreX = canvas.width - 120;
const scoreY = canvas.height - 30;
const scoreColor = "#fff";

const warningColor = "#F88";

/**
 * Draws the life count in the lower lefthand portion of the screen.
 */
var drawLifeCount = () => {
    let prevColor = ctx.fillStyle;
    ctx.fillStyle = lifeColor;
    ctx.fillText(`REMAINING LIVES: ${lives}`, lifeX, lifeY, 150);
    ctx.fillStyle = prevColor;
}

/**
 * Draws the score in the bottom righthand portion of the screen
 */
var drawScore = () => {
    let prevColor = ctx.fillStyle;
    ctx.fillStyle = scoreColor;
    ctx.fillText(`SCORE: ${score}`, scoreX, scoreY, 150);
    ctx.fillStyle = prevColor;
}

/**
 * Draws the informational text upon losing a life.
 */
var drawMinusLife = () => {
    let prevColor = ctx.fillStyle;
    ctx.fillStyle = warningColor;
    ctx.fillText(`-1 LIFE`, canvas.width / 2, canvas.height / 2, 150);
    ctx.fillStyle = prevColor;
}

/**
 * Draws the gameover text upon losing the game entirely
 */
var drawGameOver = () => {
    let prevColor = ctx.fillStyle;
    ctx.fillStyle = warningColor;
    ctx.fillText(`GAME OVER`, canvas.width / 2, canvas.height / 2, 150);
    ctx.fillStyle = prevColor;
}

var drawUI = () => {
    ctx.font = "16px Arial";
    drawLifeCount();
    drawScore();
    if (mainPlayer.invincible) {
        // A player is invincible when they have just died, and this text will remain until
        // They can take damage again
        drawMinusLife();
    }
    if (!gameActive) {
        drawGameOver();
    }
}