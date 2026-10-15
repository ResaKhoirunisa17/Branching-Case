const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter student score: ', (scoreInput) => {
    readline.question('Enter attendance percentage (%): ', (attendanceInput) => {
        readline.question('Enter completed assignment percentage (%): ', (assignmentInput) => {
            const score = parseFloat(scoreInput);
            const attendance = parseFloat(attendanceInput);
            const assignment = parseFloat(assignmentInput);

            if (isNaN(score) || isNaN(attendance) || isNaN(assignment)) {
                console.log("Please enter valid numbers for all inputs!");
            } else if (score >= 60 && attendance >= 75 && assignment >= 80) {
                console.log("Pass");
            } else {
                console.log("Fail. Reason(s):");
                if (score < 60) {
                    console.log("- Score is less than 60");
                }
                if (attendance < 75) {
                    console.log("-Attendance is less than 75%");
                }
                if (assignment < 80) {
                    console.log("- Completed assignments are less than 80%");
                }
            }

            readline.close();
        });
    });
});