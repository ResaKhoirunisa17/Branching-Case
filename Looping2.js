let count = 0;
let sum = 0;

console.log("Even numbers between 1 and 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
        count++;
        sum += i;
    }
}

console.log(`\nTotal even numbers: ${count}`);
console.log(`Sum of all even numbers: ${sum}`);