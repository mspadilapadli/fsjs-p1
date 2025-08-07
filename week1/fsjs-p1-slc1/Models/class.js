class Bank {
    constructor(id, name, type, limit, customers) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.limit = limit;
        this.customers = Factory.createCustomers(customers);
    }
}

class LocalBank extends Bank {
    constructor(id, name, limit, customers) {
        super(id, name, "LocalBank", limit, customers);
    }
}
class NationalBank extends Bank {
    constructor(id, name, limit, customers) {
        super(id, name, "NationalBank", limit, customers);
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
        return arr.map(({ id, name, type, limit, customers }) =>
            this.createBank(id, name, type, limit, customers)
        );
    }
    static createCustomers(arr) {
        return arr.map(({ name, ktp, depositAmount }) =>
            this.createCustomer(name, ktp, depositAmount)
        );
    }

    static createBank(id, name, type, limit, customers) {
        if (type == "LocalBank") {
            return new LocalBank(id, name, limit, customers);
        } else if (type == "NationalBank") {
            return new NationalBank(id, name, limit, customers);
        } else {
            return new Bank(id, name, type, limit, customers);
        }
    }

    static createCustomer(name, ktp, depositAmount) {
        return new Customer(name, ktp, depositAmount);
    }
}

module.exports = Factory;
