const fs = require('fs');

function readFile(){
    try {
        const fileData = fs.readFileSync('data.json'); // This line yields error, but continues to execute the code! 
        // without displaying the error!
    } catch {
        console.log('An Error Occurred!')
    }
    console.log('Hi there!');
}

readFile();