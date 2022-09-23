var varName = "Edward Vincent Cuevas";

//ES6
//New Var
//Changing value over time
let letName = "Edward Vincent Cuevas";

//Not changing value
const constName = "Edward Vincent Cuevas";

console.log("VAR Name: ", varName);
console.log("LET Name: ", letName);
console.log("CONST Name: ", constName);

//Functions
//Standard Function
function separateNames(name) {
  const nameArr = name.split(" ");
  return { firstName: nameArr[0], lastName: nameArr[1] };
}

const nameObj = separateNames("Edward Cuevas");
console.log("OGJ Name: ", nameObj);

//Arrow Functions
const printName = (name) => {
  console.log("Name: ", name);
};
printName("Edward Vincent Cuevas");

//Spread Operators
const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = [...numbers, 7, 8, 9];

console.log("Number Array: ", numbers);
console.log("New Number Array: ", newNumbers);

const person = {
  name: "Edward Vincent Cuevas",
  age: 22,
};
const personDetails = {
  ...person,
  hobbies: ["coding", "gaming", "basketball"],
};

console.log("Person: ", person);
console.log("Person Details: ", personDetails);

//Rest
const someFunction = (...someArgs) =>
  someArgs.reduce((prev, curr) => (prev += curr));

console.log("Rest: ", someFunction(1, 2, 3, 4, 5));

//Destructuring Objects
const randomObject = {
  greeting: "Hello World",
  author: "Edward Vincent Cuevas",
};

const { author, greeting } = randomObject;
console.log("Destructured Object Variables: ", author, greeting);

//Destructuring Arrays
const randomArray = [1, 2, 3, 4];

const [num1, num2, num3, num4] = randomArray;
console.log("Destructured Array Variables: ", num1, num2, num3, num4);
