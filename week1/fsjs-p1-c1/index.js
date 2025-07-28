//* release 0
class MangoTree {
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

    //*release 1
    grow() {
        if (this.age < this.#deathAge && this.healthStatus) {
            this.age++;
            this.height += Math.floor(Math.random() * 6) + 1;
            if (this.age >= this.#deathAge) this.healthStatus = false;
        }
    }

    //* release 3
    produceFruits() {
        if (
            this.age >= this.matureAge &&
            this.healthStatus &&
            this.age <= this.#deathAge
        ) {
            // let randomProduces = Math.floor(Math.random() * 16) + 5;
            // for (let i = 0; i < randomProduces; i++) {
            //     this.fruits.push(new Mango());
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

    //* release 4
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

    get harvestReport() {
        return `${this.harvested.count} (${this.harvested.good} ${
            Object.keys(this.harvested)[0]
        }, ${this.harvested.bad} ${Object.keys(this.harvested)[1]})`;
    }

    resetHarvest() {
        this.fruits = [];
        this.harvested = { good: 0, bad: 0, count: 0 };
    }
}

// const mangoTree = new MangoTree();
// mangoTree.age = 5;
// mangoTree.deathAge = 10;

// console.log(mangoTree);
// console.log(mangoTree.deathAge);

// mangoTree.grow();
// console.log(mangoTree);

//* release 2
class Mango {
    constructor() {
        this.quality = this.randomQuality();
    }

    randomQuality() {
        let randomNum = Math.round(Math.random() * 3);
        return randomNum == 0 ? "bad" : "good";
    }
}

const mangoZainudin = new Mango();
const mangoHanyati = new Mango();

// console.log(mangoZainudin);
// console.log(mangoHanyati);
// mangoTree.produceFruits();
// // console.log(mangoTree);

// console.log(mangoTree.harvested, "sebelum panen");
// mangoTree.harvest(); // pohon di panen
// console.log(mangoTree.fruits);
// console.log(mangoTree.harvested, "setelah panen");
// console.log(mangoTree.harvestReport);

// mangoTree.resetHarvest();
// console.log(mangoTree.fruits, "setlah panen");
// console.log(mangoTree.harvested, " setelah reset");

//* release 5 : driver code
let mangoTree = new MangoTree(1, 10); // menanam pohon
// console.log(mangoTree);
// console.log(mangoTree.deathAge);

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
