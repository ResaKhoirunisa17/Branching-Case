const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let scores = [];
let totalStudents = 10;

function askScore(index) {
    if (index < totalStudents) {
        readline.question(`Enter score for student ${index + 1}: `, (answer) => {
            let score = parseFloat(answer);
            if (isNaN(score) || score < 0 || score > 100) {
                console.log("Please enter a valid score between 0 and 100.");
                askScore(index);
            } else {
                scores.push(score);
                askScore(index + 1);
            }
        });
    } else {
        readline.close();

        let sum = 0;
        let passed = 0;
        let failed = 0;
        let highest = scores[0];
        let lowest = scores[0];

        for (let i = 0; i < scores.length; i++) {
            let s = scores[i];
            sum += s;
            if (s >= 75) {
                passed++;
            } else {
                failed++;
            }
            if (s > highest) highest = s;
            if (s < lowest) lowest = s;
        }

        let average = sum / totalStudents;
        console.log("\n--- Student Grade Report ---");
        console.log(`Average score: ${average}`);
        console.log(`Passed students: ${passed}`);
        console.log(`Failed students: ${failed}`);
        console.log(`Highest score: ${highest}`);
        console.log(`Lowest score: ${lowest}`);
    }
}

askScore(0);