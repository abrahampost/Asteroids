var canvas = document.querySelector("#mycanvas");
var ctx = canvas.getContext("2d");

var gameObjects = [ ];

var settings = {
    theme: {
        bgColor: "#222",
        fgColor: "#30dd50"
    },
    gameplay: {
        numStartingAsteroids: 4,
    },
    player: {
        startingLives: 3,
        maxSpeed: 10,
        maxBullets: 3,
        bulletCooldown: 500, //ms between firing bullets,
        bulletLifetime: 1500, //ms lifetime before bullet disappears
        invincibilityCooldown: 3000, //ms after death where can't take damage
    },
    score: {
        destroyAsteroid: 20,
        loseLife: 100,
    }
}
