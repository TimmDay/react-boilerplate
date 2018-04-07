
const square = function(x) {
    return x * x;
};

console.log("ES5 func: " + square(8));


// const squareArrow = (x) => {
//   return x * x;
// };

// console.log("ES6 arrow func: " + squareArrow(8));

// es6 arrow functions are always anonymous
// MUST be assigned to a variable if you want to reference it later


// arrow function expression syntax
// when a function returns a single expression

const squareArrow = (x) => x * x;


console.log("ES6 arrow func expression syntax: " + squareArrow(8));
// no return keyword. the expression is explicitly returned

const getFirstName = (s) => {
    return console.log(s.split(' ')[0]);
};

// const getFirstName = (s) => console.log(s.split(' ')[0]);

getFirstName('Tim Day');