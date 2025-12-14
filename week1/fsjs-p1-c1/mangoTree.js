"use strict";
const { FruitTree, Fruit } = require("./fruitTree");

//* release 7
class MangoTree extends FruitTree {
    constructor(deathAge = 10) {
        super(5, deathAge);
    }

    //*override agar hasil dari fruit itu instace class Mango, bukan general Fruit
    produceFruits() {
        if (
            this.age >= this.matureAge &&
            this.healthStatus &&
            this.age <= this.deathAge
        ) {
            // let randomProduces = Math.floor(Math.random() * 16) + 5;
            // for (let i = 0; i < randomProduces; i++) {
            //     this.fruits.push(new Fruit());
            // }

            // *one line
            this.fruits.push(
                ...Array.from(
                    { length: Math.floor(Math.random() * 16) + 5 },
                    () => new Mango()
                )
            );
        }
    }
}

class Mango extends Fruit {}

const mangoZainudin = new Mango();
const mangoHanyati = new Mango();

// console.log(mangoZainudin);
// console.log(mangoHanyati);

//* : driver code
let mangoTree = new MangoTree(); // menanam pohon
// console.log(mangoTree);
// console.log(mangoTree.deathAge);

console.log(`The tree is alive! :smile:`);
do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(
        `[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvestReport}`
    );
    mangoTree.resetHarvest();
} while (mangoTree.healthStatus != false);

console.log(`The tree has met its end. :sad:`);
