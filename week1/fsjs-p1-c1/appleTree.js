"use strict";
const { FruitTree, Fruit } = require("./fruitTree");

//* release 6
class AppleTree extends FruitTree {
    constructor(deathAge = 20) {
        super(2, deathAge);
    }

    //* release 9 : polymorphism
    grow() {
        if (this.age < this.deathAge && this.healthStatus) {
            this.age++;
            // random number with 2 decimal
            this.height += Number(Math.random().toFixed(2));
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
