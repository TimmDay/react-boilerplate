console.log('destructuring');

//
// const person = {
//     name: 'Tim',
//     age: 30,
//     location: {
//         city: 'Tübingen',
//         temp: 15
//     }
// };
//
// const {
//     name: firstName = 'Anonymous',
//     age
// } = person;
//
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}`);
//
//
// const {city, temp: temperature} = person.location;
//
// if (typeof temperature === 'number' &&  city){
//     console.log(`It's ${temperature} in ${city}`);
// }
// // end up using long object calls all over the place
//
// // destructuring - : rename a variable pulled off the object
// // = set a default vlaue if this value doesnt exist in obj



const book = {
    title: 'Shantarm',
    author: 'Gregory David Roberts',
    publisher: {
        name: 'St Martins Griffen'
    }
};

const {name: publisherName = 'self published'} = book.publisher;

console.log(publisherName);