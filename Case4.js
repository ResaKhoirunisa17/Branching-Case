const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter number a: ', (answerA) => {
    const a = parseFloat(answerA);

    readline.question('Enter number b: ', (answerB) => {
        const b = parseFloat(answerB);

        if (isNaN(a) || isNaN(b)) {
            console.log("Please enter valid numbers!");
        } else if (a > b) {
            console.log(`The larger number is a: ${a}`);
        } else if (b > a) {
            console.log(`The larger number is b: ${b}`);
        } else {
            console.log("Both numbers are equal");
        }

        readline.close();
    });
});