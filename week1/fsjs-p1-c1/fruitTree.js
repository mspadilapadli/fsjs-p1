"use strict";
class FruitTree {
    #deathAge;
    constructor(matureAge = 5, deathAge, healthStatus = true) {
        this.age = 0;
        this.height = 0;
        this.healthStatus = healthStatus;
        this.matureAge = matureAge;
        this.#deathAge = deathAge;
        this.fruits = [];
        this.harvested = { good: 0, bad: 0, count: 0 };
    }

    get deathAge() {
        return this.#deathAge;
    }

    set deathAge(value) {
        this.#deathAge = value;
    }

    grow() {
        if (this.age < this.#deathAge && this.healthStatus) {
            this.age++;
            this.height += Math.floor(Math.random() * 6) + 1;
            if (this.age >= this.#deathAge) this.healthStatus = false;
        }
    }

    produceFruits() {
        if (
            this.age >= this.matureAge &&
            this.healthStatus &&
            this.age <= this.#deathAge
        ) {
            // let randomProduces = Math.floor(Math.random() * 16) + 5;
            // for (let i = 0; i < randomProduces; i++) {
            //     this.fruits.push(new Fruit());
            // }

            // *one line
            this.fruits.push(
                ...Array.from(
                    { length: Math.floor(Math.random() * 16) + 5 },
                    () => new Fruit()
                )
            );
        }
    }

    harvest() {
        //* use forEach
        // this.harvested.count = this.fruits.length;
        // this.fruits.forEach((fruit) => {
        //     if (fruit.quality == "good") this.harvested.good++;
        //     else this.harvested.bad++;
        // });

        //* use reduce()
        this.harvested = this.fruits.reduce(
            (acc, fruit) => {
                fruit.quality == "good" ? acc.good++ : acc.bad++;
                acc.count++;
                return acc;
            },
            { good: 0, bad: 0, count: 0 }
        );

        //* use filter() - readable
        // this.harvested = {
        //     good: this.fruits.filter((fruit) => fruit.quality === "good")
        //         .length,
        //     bad: this.fruits.filter((fruit) => fruit.quality === "bad").length,
        //     count: this.fruits.length,
        // };
    }
    // get harvestReport() {
    //     const { count, good, bad } = this.harvested;
    //     return `${count} (${good} good, ${bad} bad)`;
    // }

    // dinamis
    get harvestReport() {
        const { count, ...categories } = this.harvested;
        return `${count} (${Object.entries(categories)
            .map(([label, amount]) => `${amount} ${label}`)
            .join(", ")})`;
    }

    resetHarvest() {
        this.fruits = [];
        this.harvested = { good: 0, bad: 0, count: 0 };
    }
}

// const fruitTree = new FruitTree();
// fruitTree.age = 5;
// fruitTree.deathAge = 10;

// console.log(fruitTree);
// console.log(fruitTree.deathAge);

// fruitTree.grow();
// console.log(fruitTree);

class Fruit {
    constructor() {
        this.quality = this.randomQuality();
    }

    randomQuality() {
        let randomNum = Math.round(Math.random() * 3);
        return randomNum == 0 ? "bad" : "good";
    }
}

const fruitZainudin = new Fruit();
const fruitHanyati = new Fruit();

// console.log(fruitZainudin);
// console.log(fruitHanyati);
// fruitTree.produceFruits();
// // console.log(fruitTree);

// console.log(fruitTree.harvested, "sebelum panen");
// fruitTree.harvest(); // pohon di panen
// console.log(fruitTree.fruits);
// console.log(fruitTree.harvested, "setelah panen");
// console.log(fruitTree.harvestReport);

// fruitTree.resetHarvest();
// console.log(fruitTree.fruits, "setlah panen");
// console.log(fruitTree.harvested, " setelah reset");

//* driver code
let fruitTree = new FruitTree(1, 10); // menanam pohon
// fruitTree.grow();
// fruitTree.grow();
// fruitTree.grow();
// fruitTree.grow();
// fruitTree.grow();
// fruitTree.produceFruits();
console.log(fruitTree);
console.log(fruitTree.deathAge);

// do {
//     fruitTree.grow();
//     fruitTree.produceFruits();
//     fruitTree.harvest();
//     console.log(
//         `[Year ${fruitTree.age} Report] Height = ${fruitTree.height} m | Fruits harvested = ${fruitTree.harvestReport}`
//     );
//     fruitTree.resetHarvest();
// } while (fruitTree.healthStatus != false);

// console.log(`The tree has met its end. :sad:`);

module.exports = { FruitTree, Fruit };
