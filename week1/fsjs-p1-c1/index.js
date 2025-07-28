//* release 1
class MangoTree {
    #deathAge;
    constructor(age, height, healthStatus = true, matureAge = 5) {
        this.age = 0;
        this.height = 0;
        this.healthStatus = healthStatus;
        this.matureAge = matureAge;
        this.#deathAge = this.#deathAge;
        this.fruits = [];
        this.harvested = { good: 0, bad: 0, count: 0 };
    }

    get deathAge() {
        return this.#deathAge;
    }

    set deathAge(value) {
        return (this.#deathAge = value);
    }
}

const mangoTree = new MangoTree();
mangoTree.age = 5;
mangoTree.deathAge = 10;
console.log(mangoTree);
console.log(mangoTree.deathAge);
