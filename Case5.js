const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter username: ', (username) => {
    readline.question('Enter password: ', (password) => {
        const correctUser = "admin";
        const correctPass = "12345";

        if (username === correctUser && password === correctPass) {
            console.log("Login successful");
        } else if (username !== correctUser && password === correctPass) {
            console.log("Incorrect username");
        } else if (username === correctUser && password !== correctPass) {
            console.log("Incorrect password");
        } else {
            console.log("Incorrect username and password")
        }

        readline.close();
    });
});