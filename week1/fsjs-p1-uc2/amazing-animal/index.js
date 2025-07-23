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
}

const ruruTheCat = new Animal(); //proses instanciateb
console.log(ruruTheCat); // Instance ruruThecat
ruruTheCat.name = "Ruru the cat";
console.log(ruruTheCat);
