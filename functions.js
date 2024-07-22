function greetUser() {
  console.log("Hi there!");
}
//greetUser();

function greetUser(userName) {
  console.log("Hi " + userName + "!");
}

//greetUser('Vishnu Vardhan');

function greetUser(greetingPrefix, userName = "user") {
  console.log(greetingPrefix + " " + userName + "!");
}

// greetUser("Hi", "Lucky");
// greetUser("Hello");

function sumUp(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}

// console.log(sumUp(1,2)) // return Nan value.

function sumOfNumbers(...numbers) {
  // (...numbers) --> rest parameters! Combine any amount of received parameters into an array.
  let result = 0;

  for (const number of numbers) {
    result += number; // result = result + number;
  }

  return result;
}

const inputNumbers = [1, 4, 5, 8, 10, 45, 91];

console.log(sumOfNumbers(...inputNumbers)); // (...inputNumbers) --> Spread parameters! Split array values into a comma-separated list of values.
