// Selecting elements
const memeImage = document.getElementById("memeImage");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// Variables for movement
let interval;
let xPos = 0;
let yPos = 0;
let xDirection = 1;
let yDirection = 1;

// Function to move the image
function moveImage() {
    const container = document.getElementById("memeContainer");
    const maxX = container.clientWidth - memeImage.clientWidth;
    const maxY = container.clientHeight - memeImage.clientHeight;
    
    xPos += 5 * xDirection;
    yPos += 5 * yDirection;
    
    if (xPos >= maxX || xPos <= 0) xDirection *= -1;
    if (yPos >= maxY || yPos <= 0) yDirection *= -1;
    
    memeImage.style.transform = `translate(${xPos}px, ${yPos}px)`;
}

// Start movement function
function startMoving() {
    startButton.disabled = true;
    stopButton.disabled = false;
    interval = setInterval(moveImage, 50);
}

// Stop movement function
function stopMoving() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(interval);
}

// Assign functions to button clicks
startButton.onclick = startMoving;
stopButton.onclick = stopMoving;
