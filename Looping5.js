const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter number of rows: ', (rowInput) => {
    readline.question('Enter number of columns: ', (colInput) => {
        let rows = parseInt(rowInput);
        let cols = parseInt(colInput);

        console.log("\nRectangle Pattern:");
        for (let i = 0; i < rows; i++) {
            let rowStr = ""; 
            for (let j = 0; j < cols; j++) {
                rowStr += "* ";
            }
            console.log(rowStr);
        }
        readline.close();
    });
});