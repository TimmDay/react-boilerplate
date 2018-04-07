
class Person {
    constructor(name = 'ANonymous', age = 0) {
        console.log("constructor test");
        console.log(name);

        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return "Hi I am " + this.name + ", the greatest";
        return `Hi I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old,`
    }

}


class Student extends Person {
    constructor(name,age, major){
        super(name, age); //calls parent constructor
        this.major = major; //adds to it
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let desc = super.getDescription();

        if (this.major){
            desc += ` and studies ${this.major}`;
        }
        return desc;
    }
}


const me = new Student("Tim",30,"Engineering");
console.log(me);
console.log(me.getDescription());

const other = new Person("Rob");
console.log(other);

const other2 = new Student();
console.log(other2.getDescription());


class Traveler extends Person {
    constructor(name,age, homeLocation = 'unknown'){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let gr = super.getGreeting();

        if (this.homeLocation){
            gr += ` I call ${this.homeLocation} home`
        }
        return gr;
    }
}

const other3 = new Traveler('Henry',42,'Boston');
console.log(other3.getGreeting());