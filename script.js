const gameContainer = document.getElementById('game-container');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');

let correctIndex;

function generateGame() {
    gameContainer.innerHTML = '';
    message.textContent = '';

    // Generate random base color
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.floor(Math.random() * 20); // 70-90%
    const lightness = 50 + Math.floor(Math.random() * 20); // 50-70%

    // Choose which block is different
    correctIndex = Math.floor(Math.random() * 16);

    for (let i = 0; i < 16; i++) {
        const block = document.createElement('div');
        block.className = 'block';

        if (i === correctIndex) {
            // Slightly different color
            const diffLightness = lightness + (Math.random() > 0.5 ? 10 : -10);
            block.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${diffLightness}%)`;
        } else {
            block.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        }

        block.addEventListener('click', () => checkBlock(i));
        gameContainer.appendChild(block);
    }
}

function checkBlock(index) {
    if (index === correctIndex) {
        message.textContent = 'Correct! You found the different color.';
        message.style.color = 'green';
    } else {
        message.textContent = 'Wrong! Try again.';
        message.style.color = 'red';
    }
}

restartBtn.addEventListener('click', generateGame);

// Start the game
generateGame();
