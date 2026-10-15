const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question ('Enter a number: ', (answer) => {
    const number = parseInt(answer);

    if (isNaN(number)) {
        console.log("Please enter a valid number!");
    } else if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }

    readline.close();
});