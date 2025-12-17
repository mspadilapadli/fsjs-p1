// const fs = require("fs");
const fs = require("fs").promises;

class Bank {
    constructor(id, name, type, limit, customers = []) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.limit = limit;
        this.customers = Factory.createCustomers(customers);
    }
}

class LocalBank extends Bank {
    constructor(id, name, customers) {
        super(id, name, "LocalBank", 3, customers);
    }
}
class NationalBank extends Bank {
    constructor(id, name, customers) {
        super(id, name, "NationalBank", 5, customers);
    }
}

class Customer {
    #ktp;
    #depositAmount;
    constructor(name, ktp, depositAmount) {
        this.name = name;
        this.#ktp = ktp;
        this.#depositAmount = depositAmount;
    }
    get ktp() {
        return this.#ktp;
    }
    set ktp(value) {
        this.#ktp = value;
    }

    get depositAmount() {
        return this.#depositAmount;
    }
    set depositAmount(value) {
        this.#depositAmount = value;
    }

    toJSON() {
        return {
            name: this.name,
            ktp: this.#ktp,
            depositAmount: this.#depositAmount,
        };
    }
}

class Factory {
    static createBanks(arr) {
        return arr.map(({ id, name, type, customers }) =>
            this.createBank(id, name, type, customers)
        );
    }
    // static createCustomers(arr) {
    //     return arr.map(({ name, ktp, depositAmount }) =>
    //         this.createCustomer(name, ktp, depositAmount)
    //     );
    // }
    static createCustomers = (arr) =>
        arr.map(({ name, ktp, depositAmount }) =>
            this.createCustomer(name, ktp, depositAmount)
        );

    static createBank(id, name, type, customers) {
        if (type == "LocalBank") {
            return new LocalBank(id, name, customers);
        } else if (type == "NationalBank") {
            return new NationalBank(id, name, customers);
        } else {
            return new Bank(id, name, type, customers);
        }
    }

    static createCustomer(name, ktp, depositAmount) {
        return new Customer(name, ktp, depositAmount);
    }
}

//*testing
//Syncronous
// const data = JSON.parse(fs.readFileSync("../data.json", "utf-8"));
// console.log(Factory.createCustomers(data));

//Async
// const testing = async () => {
//     const data = JSON.parse(await fs.readFile("../data.json", "utf-8"));
//     // console.log(Factory.createBanks(data));
//     return Factory.createBanks(data);
// };
// //if testing console.log
// testing();

// //await
// (async () => {
//     try {
//         console.log(await testing());
//     } catch (error) {
//         console.log(error);
//     }
// })();
module.exports = Factory;
