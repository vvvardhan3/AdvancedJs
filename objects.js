// classes are blue-print of the objects
class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  // describing a Methods inside the class

  descride() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}`
    );
  }
}

const developer = new Job("Software Developer", "Hyderabad", 800000);
const cook = new Job("Chef", "Bengaluru", 100000);

console.log(developer);
console.log(cook);

developer.descride();
cook.descride();

// Destructuring Objects & Arrays

const input = ["Vishnu", "Vardhan", "Vankayalapati"];

const firstName = input[0];
const middleName = input[1];
const lastName = input[2];

console.log(firstName);
console.log(middleName);
console.log(lastName);

const [first, middle, last] = input;

console.log(first);
console.log(middle);
console.log(last);

const jobPerson = {
  title: "Software Developer",
  location: "Hyderabad",
};

const jobTitle = jobPerson.title;
const jobLocation = jobPerson.location;

console.log(jobTitle);
console.log(jobLocation);

const {title,location} = jobPerson;

const {title : pTitle} = jobPerson;

console.log(pTitle);
console.log(location);

