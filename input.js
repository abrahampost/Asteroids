const keycode = {
    UP: '38',
    DOWN: '40',
    LEFT: '37',
    RIGHT: '39',
    SPACE: '32'
};

var pressed = {
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false,
    SPACE: false,
};

function keyPressed(e) {
    e = e || window.event;
    if (e.keyCode == keycode.UP) {
        pressed.UP = true;
    } else if (e.keyCode == keycode.DOWN) {
        pressed.DOWN = true;
    } else if (e.keyCode == keycode.LEFT) {
        pressed.LEFT = true;
    } else if (e.keyCode == keycode.RIGHT) {
        pressed.RIGHT = true;
    } else if (e.keyCode == keycode.SPACE) {
        pressed.SPACE = true;
    }
}

function keyReleased(e) {
    e = e || window.event;
    
    if (e.keyCode == keycode.UP) {
        pressed.UP = false;
    } else if (e.keyCode == keycode.DOWN) {
        pressed.DOWN = false;
    } else if (e.keyCode == keycode.LEFT) {
        pressed.LEFT = false;
    } else if (e.keyCode == keycode.RIGHT) {
        pressed.RIGHT = false;
    } else if (e.keyCode == keycode.SPACE) {
        pressed.SPACE = false;
    }
}


document.onkeydown = keyPressed;
document.onkeyup = keyReleased;