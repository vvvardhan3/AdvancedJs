const fs = require("fs");

// function readFile() {
//   let fileData;

//   fs.readFile("data.txt", function(error, fileData){
//     console.log("File Parsing is done!")
//     console.log(fileData.toString());
//   });

//   console.log("Hi there!");
// }

function readsFile() {
    
    const fileData = fs.readFileSync("data.txt");
    console.log(fileData.toString());
    console.log("Hi there!");
  }

readsFile();
