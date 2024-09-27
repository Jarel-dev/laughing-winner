// Check for paddle collision
if (
    ballRect.left <= playerRect.right &&
    ballRect.right >= playerRect.left &&
    ballRect.top <= playerRect.bottom &&
    ballRect.bottom >= playerRect.top
) {
    ballSpeedX *= -1; // Reverse direction
    // Move the ball out of the paddle
    ball.style.left = `${playerRect.right}px`;
}
