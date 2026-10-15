const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter student score: ', (scoreInput) => {
    readline.question('Enter attendance percentage (%): ', (attendanceInput) => {
        const score = parseFloat(scoreInput);
        const attendance = parseFloat(attendanceInput);

        if (isNaN(score) || isNaN(attendance)) {
            console.log("Please enter valid numbers!");
        } else if (score >= 60 && attendance >= 75) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }

        readline.close();
    });
});