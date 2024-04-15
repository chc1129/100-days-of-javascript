const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
canvas.width = widnow.innerWidth;
canvas.height = window.innerHeight;

const paddleWidth = 18,
    paddleHeight = 120,
    paddleSpeed = 8,
    ballRadius = 12,
    initialBallSpeed = 40,
    maxBallSpeed = 40,
    netWidth = 5,
    netColor = "WHITE";

// Draw net on canvas
function drawNet() {
    for (let i = 0; i <= canvas.height; i += 15) {
        drawRect(canvas.width / 2 - netWidth / 2, i, netWidth, 10, netColor);
    }
}

// Draw rectangle on canvas
function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

// Draw a circle on canvas
function drawCircle(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}
