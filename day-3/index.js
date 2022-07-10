// Variables

// var firstName = "Catherine";

// const lastName = "Xu";
// const is a constant(cannot be changed),
// let is not a constant, meaning it can be changed
// lastName = "Smith";
// const lastName;

// let age; 
// age = 14;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// Data types - primitives:

// String
let firstName = "Catherine ";
let lastName = "Xu";

// Numbers
let age = 16
let rating = 4.5;

// Boolean
let isCool = true;

// null
let address = null;

// undefined
let hairColor;


console.log( typeof firstName)

// Not a primitive:
// Object


// Concatenation:

console.log("My name is " + firstName + " and I am " + age + " years old");

console.log(`My name is ${firstName} and I am ${age} years old`);

// Strings

let s = `My name is ${firstName}`;

console.log(s.toLocaleUpperCase());
s = s.toLocaleLowerCase();

s.indexOf("Y", 2);

s. substring(0, 7);

s1 = s[0];

s2 = s[6];

console.log( s1, s2);

// Arrays:
let nums1 = new Array(1, 2, 3, 4, 5, 6);
console.log(nums1);

let num2 = [1, 2, 3, 4, 5];
console.log(num2);

let fruits = ["orange", "pear", "apple"];

fruits.push("strawberries");
fruits.unshift("grape");

const lastFruit = fruits.pop();

const index = fruits.indexOf("grape");

console.log(fruits[2]);

// Objects

let person = {
  firstName: "Catherine",
  lastName: "Xu",
  age: 14,
  hobbies: ["swimming", "badminton", "videogames", "music"],
  address: {
    street: "Archer",
    city: "Chicago",
    state: "Illinois",
  },
};

person.email = "natzu1000@gmail.com";
person["email"] = "natzu1000@gmail.com";

console.log(person);

// For:

console.log('starting for loop');

for(let i=0; i >=10; i = i + 1) {
  console.log(i);

  console.log("execute this line if code in the for loop");

  // i = i + 1
}

console.log('for loop finished');

/*/ While:
let i = 0;
while (i <= 10) {
  console.log(i);
  console.log("execute this line if code in the while loop");
i++;
}
//
console.log


const lessThanFive = num < 5 ? true : false;
console.log(lessThanFive);
/*/


console.log("\n \n \n Functions");

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const result = addTwoNumbers(5, 4);
console.log(result);

const array1 = [1, 2, 3, 4, 5, 6]
console.log(
  array1.filter((x) => {
    return x == 1;
  })
);

console.log(
  array1.sort((a, b) => {
    return a - b;
  })
);

//createss today's date
function logDate() {
  console.log(new Date());
}

logDate();

//checks if a number is a perfect square
function isPerfectSquare(x) {
  const sqrRoot = Math.sqrt(x);
  return sqrRoot * sqrRoot == x;
}

console.log(isPerfectSquare(16));