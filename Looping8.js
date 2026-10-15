const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a positive integer: ', (input) => {
    let num = parseInt(input);
    let temp = num;
    let count = 0;
    let digitSum = 0;
    let reversedNum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        digitSum += digit;
        reversedNum = (reversedNum * 10) + digit;
        count++;
        temp = Math.floor(temp / 10);
    }

    console.log(`Digits count: ${count}`);
    console.log(`Digit sum: ${digitSum}`);
    console.log(`Reversed number: ${reversedNum}`);
    console.log(`Is Palindrome: ${num === reversedNum}`);

    readline.close();
});