var nameVar = 'Tim';
var nameVar = 'Day';
console.log('nameVar', nameVar);

let nameLet = 'Karen';
nameLet = 'Lowe';
//let nameLet = 'Two'; // let. cannot overwrite. babel crash. (yellow should be red...)
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//const nameConst = 'Walker'; // const cannot overwrite
// nameConst = 'Walker';      // const. cannot redefine
console.log('nameConst',nameConst);


function getDogName() {
    var dogName = 'Frank';
    return dogName;
}

getDogName();
//console.log(dogName); //error. var outside scope (was in the function scope)


// Block Scoping
var fullName = "scopey scope";

if (fullName) {
    var varFirstName = fullName.split(' ')[0];
    console.log("var in block: " + varFirstName);
    let letFirstName = fullName.split(' ')[0];
    console.log("let in block: " + letFirstName);
    const constFirstName = fullName.split(' ')[0];
    console.log("const in block: " + constFirstName);
}

console.log("var out of block: " + varFirstName);
//console.log("let out of block: " + letFirstName); //error out of block
//console.log("const out of block: " + constFirstName); //error out of block


// Remove Var Completely
const constFullName = "scopey scope";
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log("let redefined in block: " + firstName);
}

console.log("initialised in scope, redefined in block: " + firstName);

// best practice.
// When in doubt use const. if we find that redefining needed, change to let.
// if variable required outside of a block or function scope as well
// as in it, initialise it outside and redefine it inside

// defensive programming. only use let when you are going to reassign it.
// good habit.