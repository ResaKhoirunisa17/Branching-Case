const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter triangle height: ', (input) => {
    let height = parseInt(input);

    console.log("\nRight Triangle Pattern:");
    for (let i = 1; i <= height; i++) {
        console.log("* ".repeat(i));
    }
    readline.close();
});