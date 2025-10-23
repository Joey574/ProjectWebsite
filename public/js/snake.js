const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio || 1;

// scale canvas to make it look nice
canvas.width  = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;
ctx.scale(dpr, dpr);

const scale = 20
const rows = Math.floor(canvas.height / scale);
const cols = Math.floor(canvas.width / scale);

// initialize snake
let snake = [];
snake[0] = { x: Math.floor(cols/2), y: Math.floor(rows/2) };
snake[1] = { x: Math.floor(cols/2)-1, y: Math.floor(rows/2) };
snake[2] = { x:  Math.floor(cols/2)-2, y: Math.floor(rows/2) };

let food = getFoodPos();
let dx = 1;
let dy = 0;

let score = 0;

document.addEventListener("keydown", keyPress);

function keyPress(e) {
    // crazy how like every game webpage game doesn't have this :(
    if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) {
        e.preventDefault();
    }

    switch (e.key) {
        case "ArrowUp":
            if (dy === 0) { dy = -1; dx = 0; }
        break;
        case "ArrowDown": 
            if (dy == 0) { dy = 1; dx = 0; }
        break;
        case "ArrowLeft": 
            if (dx == 0) { dx = -1; dy = 0; }
        break;
        case "ArrowRight": 
            if (dx == 0) { dx = 1; dy = 0; }
        break;
    }
}

function getFoodPos() {
    return { 
        x: Math.floor(Math.random()*(cols-1)), 
        y: Math.floor(Math.random()*(rows-1)) 
    };
}

function gameLoop() {
    // compute head location
    const head = { 
        x: (snake[0].x+dx+cols) % cols,
        y: (snake[0].y+dy+rows) % rows 
    };

    // check self collision
    for (let block of snake) {
        if (head.x === block.x && head.y === block.y) {
            alert("Game Over!");
            return window.location.reload();;
        }
    }

    // move snake
    snake.unshift(head);

    // food collisions
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = getFoodPos();
    } else {
        // remove tail if we didn't get any food
        snake.pop();
    }

    draw();
}

function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    for (let part of snake) {
        ctx.fillRect(part.x*scale, part.y*scale, scale - 1, scale - 1);
    }

    ctx.fillStyle = '#f00';
    ctx.fillRect(food.x*scale, food.y*scale, scale - 1, scale - 1);

    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);
}

setInterval(gameLoop, 150);
