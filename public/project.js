let secretNumber;
let attempts = 0;

// Start a new game
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').textContent = '';
    document.querySelector('button').disabled = false;
}

// Check the guess
function checkGuess() {
    const guess = document.getElementById('guessInput').value;

    // Validate input
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        document.getElementById('feedback').textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    attempts++;

    if (guess < secretNumber) {
        document.getElementById('feedback').textContent = `Your guess is too low! Attempt ${attempts}`;
    } else if (guess > secretNumber) {
        document.getElementById('feedback').textContent = `Your guess is too high! Attempt ${attempts}`;
    } else {
        document.getElementById('feedback').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.querySelector('button').disabled = true; // Disable the guess button after winning
    }
}

// Reset the game
function resetGame() {
    startGame();
}

// Logout and redirect to the homepage
function logout() {
    // You can also add any logout logic here if needed (e.g., clearing session, etc.)
    window.location.href = "/"; // Redirecting to the homepage
}

// Initialize the game when the page loads
startGame();
