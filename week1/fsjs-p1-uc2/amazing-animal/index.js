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
        console.log("I walking and running with my leg");
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

// const charlieTheDog = new Animal("Charli", 2, "Dog", ["Meat", "Cake"]);
// console.log(charlieTheDog);

// charlieTheDog.move();
// charlieTheDog.getInformation("Swadikap~!");

// const nemoTheFish = new Animal(
//     "Nemo",
//     1,
//     "Fish",
//     ["Pellete", "Moss", "Worm"],
//     0
// );
// console.log(nemoTheFish);

// nemoTheFish.move();

//* Amazing animal part 2
// inheritance
class Cat extends Animal {
    constructor(name, age, type, favoriteFoods, totalLegs) {
        super(name, age, "Cat", favoriteFoods, totalLegs);
    }
}
class Dog extends Animal {
    constructor(name, age, type, favoriteFoods, totalLegs) {
        super(name, age, "Dog", favoriteFoods, totalLegs);
    }
}
class Fish extends Animal {
    constructor(name, age, type, favoriteFoods, totalLegs, totalFins = 4) {
        super(name, age, "Fish", favoriteFoods, 0);
        this.totalFins = totalFins;
    }
    // polymorpishm overriding
    move() {
        console.log("I use my fins to swimming");
    }
}

const ruruTheCat = new Cat("Ruru", 1, "Cat", ["Salmon", "Tuna", "Chiken"]);
const charlieTheDog = new Dog("Charli", 2, "Dog", ["Meat", "Cake"]);
const nemoTheFish = new Fish("Nemo", 1, "Fish", ["Pellete", "Moss", "Worm"], 0);

console.log(ruruTheCat);
console.log(charlieTheDog);
console.log(nemoTheFish);

ruruTheCat.move();
charlieTheDog.move();
nemoTheFish.move();
