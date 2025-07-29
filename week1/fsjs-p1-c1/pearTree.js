const { FruitTree, Fruit } = require("./fruitTree");
("use strict");

// *release 8
class PearTree extends FruitTree {
    constructor(deathAge = 15, thorny = true) {
        super(3, deathAge);
        this.thorny = thorny;
    }
    //* release 9 : polymorphism - overruding
    grow() {
        if (this.age < this.deathAge && this.healthStatus) {
            this.age++;
            this.height += Math.floor(Math.random() * 6) + 3; // random height 3-8
            if (this.age >= this.deathAge) this.healthStatus = false;
        }
    }

    produceFruits() {
        if (
            this.age >= this.matureAge &&
            this.healthStatus &&
            this.age <= this.deathAge
        ) {
            // *one line
            this.fruits.push(
                ...Array.from(
                    { length: 15 }, // buah kosntan 15
                    () => new Pear()
                )
            );
        }
    }
}

const pearTree = new PearTree();
// console.log(pearTree);
// console.log(pearTree.deathAge);

class Pear extends Fruit {}

const pearZainudin = new Pear();
// console.log(pearZainudin);

//* driver code

console.log(`The tree is alive! :smile:`);
do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harvest();
    console.log(
        `[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvestReport}`
    );
    pearTree.resetHarvest();
} while (pearTree.healthStatus != false);
console.log(`The tree has met its end. :sad:`);
