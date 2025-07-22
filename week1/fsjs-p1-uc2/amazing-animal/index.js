"use strict";
// ! Amazing Animal Part 1
class Animal {
    constructor(name, age, type, favouriteFoods, totalLegs = 4) {
        // properties goes here
        this.name = name;
        this.age = age;
        this.type = type;
        this.favouriteFoods = favouriteFoods;
        this.totalLegs = totalLegs;
    }
    // methods goes here
    move() {
        console.log("I walking and running with my legs");
    }

    getInformation(greetings) {
        this.move();
        console.log(
            `${greetings} My name is ${this.name}, 
My current age is ${this.age} years old,
I am a ${this.type}
My favorite foods are ${this.favouriteFoods.join(", ")}`
        );
        // return this;
    }
}

// const ruruTheCat = new Animal("Ruru", 1, "Cat", ["Salmon", "Tuna", "Chiken"]); // Instantiate = proses pembuatan instance
// console.log(ruruTheCat); // Instance ruruThecat
// const chalieTheDog = new Animal("Charlie", "2", "Dog", ["Meat", "Cake"]);
// const nemoTheFish = new Animal("Nemo", "1", "Fish", [
// "Pellets",
//     "Moss",
//     "Worms",
// ]);
//     ruruTheCat.getInformation("Annyeong haseo~");
// chalieTheDog.getInformation("Swadikap~");
// nemoTheFish.getInformation("Aloha~");

// ruruTheCat.name = "Ruru The Cat";

// ruruTheCat.move();
// chalieTheDog.move();
// nemoTheFish.move();

// ! Amazing Animal Part 2

//*child class Cat
class Cat extends Animal {
    //your code here
    constructor(name, age, type, favouriteFoods, totalLegs) {
        super(name, age, "Cat", favouriteFoods, totalLegs);
    }
}
const ruruTheCat = new Cat("Ruru", 1, "Cat", ["Salmon", "Tuna", "Chiken"]); // Instantiate = proses pembuatan instance

//*child class Dog
class Dog extends Animal {
    //your code here
    constructor(name, age, type, favouriteFoods, totalLegs) {
        super(name, age, "Dog", favouriteFoods, totalLegs);
    }
}
const chalieTheDog = new Dog("Charlie", "2", "Dog", ["Meat", "Cake"]);

//*child class Fish
class Fish extends Animal {
    //your code here
    constructor(name, age, type, favouriteFoods, totalLegs, totalFins = 8) {
        super(name, age, "Fish", favouriteFoods, 0);
        this.totalFins = totalFins;
    }
    move() {
        console.log("I use my fins to swimming");
    }
}
const nemoTheFish = new Fish("Nemo", 1, "Fish", ["Pellets", "Moss", "Worms"]);

// console.log(ruruTheCat);
// console.log(nemoTheFish);
// console.log(`\n`);

// // console.log(nemoTheFish.move());
// ruruTheCat.move();
// nemoTheFish.move();
// console.log(`\n`);
// ruruTheCat.getInformation("Annyeong haseo~");
// console.log(`\n`);
// nemoTheFish.getInformation("Aloha~");

// ==============================================
//* Agregate Relation
class SuperPower {
    constructor(superPower) {
        this.name = superPower;
    }
}

//* class SuperCat ini inheritence dari class Cat (cucunya class Animal)

class SuperCat extends Cat {
    //your code here
    constructor(name, age, favouriteFoods, totalLegs, superAbility) {
        super(name, age, favouriteFoods, totalLegs);
        this.SuperPower = superAbility;
    }
}
let mechaClaw = new SuperPower("Mecha Claw");
const felixTheCat = new SuperCat(
    "Felix",
    100,
    ["Chiken Wings", "Pizza"],
    4,
    mechaClaw
);
console.log(felixTheCat);
