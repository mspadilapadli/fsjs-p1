"use strict";
//*  Amazing Animal Part 1
class Animal {
    constructor(name, age, type, favoriteFoods, totalLegs = 4) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.favoriteFoods = favoriteFoods;
        this.totalLegs = totalLegs;
    }
    //method here
    move() {
        this.totalLegs
            ? console.log("I walking and running with my leg")
            : console.log("I use my fins to swimming");
    }

    getInformation(greetings) {
        this.move();
        console.log(`${greetings} My name ${this.name}
            My current age is ${this.age} years old
            I am a ${this.type} 
            My favorite foods are ${this.favoriteFoods.join(", ")}`);
    }
}

// const ruruTheCat = new Animal(); //proses instanciateb
// console.log(ruruTheCat); // Instance ruruThecat

// ruruTheCat.name = "Ruru the cat";
// console.log(ruruTheCat);

const charlieTheDog = new Animal("Charli", 2, "Dog", ["Meat", "Cake"]);
console.log(charlieTheDog);

// charlieTheDog.move();
charlieTheDog.getInformation("Swadikap~!");

const nemoTheFish = new Animal(
    "Nemo",
    1,
    "Fish",
    ["Pellete", "Moss", "Worm"],
    0
);
console.log(nemoTheFish);

nemoTheFish.move();
