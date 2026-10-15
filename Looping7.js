const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a positive integer N: ', (input) => {
    let n = parseInt(input);
    let primes = [];
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
            sum += i;
        }
    }

    console.log(`Primes up to ${n}: ${primes.join(", ")}`);
    console.log(`Total primes: ${primes.length}`);
    console.log(`Sum of primes: ${sum}`);
    readline.close();
});