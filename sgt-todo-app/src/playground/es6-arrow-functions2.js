// arguments object - no longer bound with arrow functions
    // accessing args no longer works

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(55,1,1001));

const add2 = (a, b) => {
    // console.log(arguments); // no arguments object in arrow functions
    return a + b;
}
console.log(add2(66,1,1001));


// this keyword - no longer bound

// const user = {
//     name: 'Tim',
//     cities: ['Melbourne', 'Canberra', 'Boulder', 'Boston', 'Reutlingen'],
//     printPlaces: function () {
//         console.log(this.name);
//         console.log(this.cities);
//         const that = this;
//
//         this.cities.forEach(function(city){
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// }
// user.printPlaces();

// const user = {
//     name: 'Tim',
//     cities: ['Melbourne', 'Canberra', 'Boulder', 'Boston', 'Reutlingen'],
//     printPlaces: function () {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// }
// user.printPlaces();


//ES6 method definition syntax
// const user = {
//     name: 'Tim',
//     cities: ['Melbourne', 'Canberra', 'Boulder', 'Boston', 'Reutlingen'],
//     printPlaces() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// }
// user.printPlaces();


//ES6 using map
// const user = {
//     name: 'Tim',
//     cities: ['Melbourne', 'Canberra', 'Boulder', 'Boston', 'Reutlingen'],
//     printPlaces() {
//         const cityMessages = this.cities.map((city) => {
//             return user.name + ' has lived in ' + city;
//         });
//         return cityMessages;
//     }
// }
// console.log(user.printPlaces());


const user = {
    name: 'Tim',
    cities: ['Melbourne', 'Canberra', 'Boulder', 'Boston', 'Reutlingen'],
    printPlaces() {
        return this.cities.map((city) => user.name + ' has lived in ' + city);
    }
}
console.log(user.printPlaces());


// Challenge
// const multiplier = {
//     numbers : [0,1,2,3,4],
//     multiplyBy: 3,
//     multiply() {
//         return this.numbers.map((num) => {
//             return this.multiplyBy * num;
//         })
//     }
// }
// console.log(multiplier.multiply());

const multiplier = {
    numbers : [0,1,2,3,4],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num)
    }
}
console.log(multiplier.multiply());
