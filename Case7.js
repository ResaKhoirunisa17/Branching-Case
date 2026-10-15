const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter parking duration (hours): ', (answer) => {
    const hours = parseFloat(answer);

    if (isNaN(hours) || hours <= 0) {
        console.log("Please enter a valid number of hours!");
    } else {
        let fee = 0;

        if (hours <= 1) {
            fee = 5000;
        } else {
            // jam pertama 5000, sisanya dihitung per jam tambahan 3000
            fee = 5000 + (hours - 1) * 3000;
        }

        // Batas maksimal (maximum fee) adalah Rp20,000
        if (fee > 20000) {
            fee = 20000;
        }

        console.log(`Parking fee: Rp${fee.toLocaleString('id-ID')}`);
    }

    readline.close();
});