"use strict";
const { FruitTree, Fruit } = require("./fruitTree");

//* release 6
class AppleTree extends FruitTree {
    constructor(deathAge = 20) {
        super(2, deathAge);
    }

    //*override agar hasil dari fruit itu instace class Apple, bukan general Fruit
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
                    () => new Apple()
                )
            );
        }
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
appleTree.grow();
appleTree.grow();
appleTree.produceFruits();
console.log(appleTree);
console.log(appleTree.deathAge);

// console.log(`The tree is alive! :smile:`);
// do {
//     appleTree.grow();
//     appleTree.produceFruits();
//     appleTree.harvest();
//     console.log(
//         `[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(
//             2
//         )} m | Fruits harvested = ${appleTree.harvestReport}`
//     );
//     appleTree.resetHarvest();
// } while (appleTree.healthStatus != false);

// console.log(`The tree has met its end. :sad:`);
