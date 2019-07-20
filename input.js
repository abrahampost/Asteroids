const keycode = {
    UP: '38',
    DOWN: '40',
    LEFT: '37',
    RIGHT: '39',
};

var pressed = {
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false
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
    }
}


document.onkeydown = keyPressed;
document.onkeyup = keyReleased;