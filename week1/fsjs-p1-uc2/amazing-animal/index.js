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
