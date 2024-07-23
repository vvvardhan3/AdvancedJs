const fs = require("fs/promises");

function readFile() {
  let fileData;

  fs.readFile("data.txt")
    .then(function (fileData) {
        console.log("File Parsing is done!");
        console.log(fileData.toString());
    })
    .then(function(){

    })
    .catch(function(error){
        console.log(error)
    })

  console.log("Hi there!");
}

readFile();