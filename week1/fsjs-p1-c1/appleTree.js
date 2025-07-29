"use strict";
const { FruitTree, Fruit } = require("./fruitTree");

//* release 6
class AppleTree extends FruitTree {
    constructor(deathAge = 20) {
        super(2, deathAge);
    }

    //* release 9 : polymorphism - overruding
    grow() {
        if (this.age < this.deathAge && this.healthStatus) {
            this.age++;
            this.height += Number(Math.random().toFixed(2)); // random height 0.1 -0.9 with 2 decimal
            if (this.age >= this.deathAge) this.healthStatus = false;
        }
    }
}

class Apple extends Fruit {}

const appleZainudin = new Apple();
const appleHanyati = new Apple();

// console.log(appleZainudin);
// console.log(appleHanyati);

//* : driver code
let appleTree = new AppleTree(); // menanam pohon
console.log(appleTree);
console.log(appleTree.deathAge);

console.log(`The tree is alive! :smile:`);
do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(
        `[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvestReport}`
    );
    appleTree.resetHarvest();
} while (appleTree.healthStatus != false);

console.log(`The tree has met its end. :sad:`);
