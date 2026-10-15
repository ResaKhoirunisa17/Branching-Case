let secretNumber = 37;
let guesses = [20, 45, 37];
let attempts = 0;

for (let i = 0; i < guesses.length; i++) {
    attempts++;
    let guess = guesses[i];

    if (guess === secretNumber) {
        console.log(`Correct! Secret number is ${secretNumber}. Attempts: ${attempts}`);
        break;
    } else if (guess > secretNumber) {
        console.log(`Guess ${guess}: Too high`);
    } else {
        console.log(`Guess ${guess}: Too low`);
    }
}