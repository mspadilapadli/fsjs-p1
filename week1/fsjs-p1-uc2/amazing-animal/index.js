"use strict";
//*  Amazing Animal Part 1
class Animal {
    constructor(name, age, type, favoriteFoods, totalLegs) {
        this.name = "Ruru";
        this.age = 1;
        this.type = "Cat";
        this.favoriteFoods = ["Salmon", "Tuna", "Chicken"];
        this.totalLegs = 4;
    }
    //method here
    move() {
        console.log("I walking and running with my leg");
    }

    getInformation(greetings) {
        console.log(`${this.move} 
            ${greetings} My name ${this.name}
            My current age is ${this.age} years old
            I am a ${this.type} 
            My favorite foods are ${this.favoriteFoods.split(",").join(", ")}`);
    }
}

const ruruTheCat = new Animal(); //proses instanciateb
console.log(ruruTheCat); // Instance ruruThecat
ruruTheCat.name = "Ruru the cat";
console.log(ruruTheCat);
