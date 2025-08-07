const { join } = require("path");
const Controller = require("../Controllers/controller");
const Factory = require("./class");
const { json } = require("stream/consumers");
const fs = require("fs").promises;

class Model {
    static async getBankList() {
        try {
            return {
                code: "listBank",
                data: Factory.createBanks(
                    JSON.parse(await fs.readFile("./data.json", "utf-8"))
                ),
            };
        } catch (error) {
            throw error;
        }
    }

    static async addBank([name, type]) {
        try {
            const { data } = await this.getBankList();

            const id = Math.max(0, ...data.map(({ id }) => id)) + 1;
            const newBank = Factory.createBank(id, name, type);

            data.push(newBank);
            this.saveFile(data);

            return { code: "addBank", data: newBank };
        } catch (error) {
            throw error;
        }
    }

    static async deleteBank([id]) {
        try {
            let { data } = await this.getBankList();
            const foundBank = data.find((bank) => bank.id == id);
            if (!foundBank) throw new Error(`Bank with ${id} is not found`);

            //filter
            data = data.filter((bank) => bank.id != foundBank.id);

            this.saveFile(data);

            return { code: "deleteBank", data: foundBank };
        } catch (error) {
            throw error;
        }
    }
    static async addCustomer([id, name, ktp, depositAmount]) {
        try {
            const { data } = await this.getBankList();
            const bank = data.find((bank) => bank.id == id);
            if (!bank) throw new Error(`Bank with ${id} is not found`);

            const newCustomer = Factory.createCustomer(
                name,
                ktp,
                +depositAmount
            );

            bank.customers.push(newCustomer);

            this.saveFile(data);
            return { code: "addCustomer", data: newCustomer };
        } catch (error) {
            throw error;
        }
    }
    static async deleteCustomer() {
        try {
        } catch (error) {
            throw error;
        }
    }
    static async detailBank() {
        try {
        } catch (error) {
            throw error;
        }
    }

    static async saveFile(data) {
        const dataStr = JSON.stringify(data, null, 4);
        await fs.writeFile("./data.json", dataStr);
    }
}
module.exports = Model;
