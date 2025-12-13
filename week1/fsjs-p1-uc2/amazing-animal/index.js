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
// in child class animal don't need type , cuz type difined in super()
class Cat extends Animal {
    //super() : inheritancer property from parent

    constructor(name, age, favoriteFoods) {
        super(name, age, "Cat", favoriteFoods);
    }
}
class Dog extends Animal {
    constructor(name, age, favoriteFoods) {
        super(name, age, "Dog", favoriteFoods);
    }
}
class Fish extends Animal {
    constructor(name, age, favoriteFoods, totalLegs, totalFins = 5) {
        super(name, age, "Fish", favoriteFoods, totalLegs);
        // only fish have property of fins
        this.totalFins = totalFins;
    }
    // polymorpishm overriding
    move() {
        console.log("I use my fins to swimming");
    }
}
class Bird extends Animal {
    constructor(name, age, favoriteFoods, totalLegs = 2) {
        super(name, age, "Bird", favoriteFoods, totalLegs);
    }

    move() {
        console.log("I fly with my wings and hop with my legs.");
    }
}
const ruruTheCat = new Cat("Ruru", 1, ["Salmon", "Tuna", "Chiken"]);
const charlieTheDog = new Dog("Charli", 2, ["Meat", "Cake"]);
const nemoTheFish = new Fish("Nemo", 1, ["Pellete", "Moss", "Worm"], 0);
const parrot = new Bird("Rio", 3, ["Fruits", "Seeds"]);

// console.log(ruruTheCat);
// console.log(charlieTheDog);
// console.log(nemoTheFish);
// console.log(parrot);

// ruruTheCat.move();
// charlieTheDog.move();
// nemoTheFish.move();

//* Agregate Relation
class SuperPower {
    constructor(name) {
        this.name = name;
    }
    punch() {
        console.log("Hit hit hit ! kitty punch");
    }
}

// extends cat (cucu animal)
class SuperCat extends Cat {
    // in child class animal don't need type , cuz type difined in super()
    constructor(name, age, favoriteFoods, superPower) {
        super(name, age, favoriteFoods);
        this.superPower = superPower;
    }
    // overriding polymorph
    getInformation(greetings) {
        this.move();
        console.log(`${greetings} My name ${this.name}
            My current age is ${this.age} years old
            I am a ${this.type} 
            My favorite foods are ${this.favoriteFoods.join(", ")}
            
            I have super power and wanna save the world ! meow~!
            `);
    }
}

const mechaClaw = new SuperPower("Mecha Claw");
const felixTheCat = new SuperCat(
    "Felix",
    100,
    ["chiken wings", "pizza"],
    mechaClaw
);

// console.log(felixTheCat);
felixTheCat.getInformation("Ohayooo");
felixTheCat.superPower.punch();
