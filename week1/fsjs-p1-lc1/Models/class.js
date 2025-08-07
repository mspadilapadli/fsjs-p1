class Company {
    constructor(id, name, since, address, employees = []) {
        this.id = id;
        this.name = name;
        this.since = since;
        this.address = address;
        this.employees = Factory.createEmployees(employees);
    }
}

class Employee {
    #salary;
    constructor(name, ktp, joined_year, position, salary) {
        this.name = name;
        this.ktp = ktp;
        this.joined_year = joined_year;
        this.position = position;
        this.#salary = salary;
    }

    get salary() {
        return this.#salary;
    }
    set salary(value) {
        this.#salary = value;
    }

    lengthOfWork() {
        return 2023 - this.joined_year;
    }
    applySalary() {
        const lengthOfWork = this.lengthOfWork();
        return lengthOfWork >= 1
            ? (this.#salary += this.#salary * 0.1)
            : this.#salary;
    }

    toJSON() {
        return {
            name: this.name,
            ktp: this.ktp,
            joined_year: this.joined_year,
            position: this.position,
            salary: this.#salary,
        };
    }
}

class Staff extends Employee {
    constructor(name, ktp, joined_year, salary) {
        super(name, ktp, joined_year, "Staff", salary);
    }
}
class Manager extends Employee {
    constructor(name, ktp, joined_year, salary) {
        super(name, ktp, joined_year, "Manager", salary);
    }
    applySalary() {
        const lengthOfWork = super.lengthOfWork();
        return lengthOfWork >= 1
            ? (this.salary += this.salary * 0.15)
            : this.salary;
    }
}

class Factory {
    static createCompanies(arr) {
        return arr.map(({ id, name, since, address, employees }) =>
            this.createCompany(id, name, since, address, employees)
        );
    }

    static createEmployees(arr) {
        return arr.map(({ name, ktp, joined_year, position, salary }) =>
            this.createEmployee(name, ktp, joined_year, position, salary)
        );
    }

    static createCompany(id, name, since, address, employees) {
        return new Company(id, name, since, address, employees);
    }

    static createEmployee(name, ktp, joined_year, position, salary) {
        if (position == "Staff")
            return new Staff(name, ktp, joined_year, salary);
        else if (position == "Manager")
            return new Manager(name, ktp, joined_year, salary);
        else return new Employee(name, ktp, joined_year, position, salary);
    }
}

//test
// const fs = require("fs");
// let data = JSON.parse(fs.readFileSync("../data.json", "utf-8"));
// data = Factory.createCompanies(data);
// console.log(data[0].employees);

module.exports = Factory;
