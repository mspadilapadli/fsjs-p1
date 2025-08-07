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

    static async deleteBank() {
        try {
        } catch (error) {
            throw error;
        }
    }
    static async addCustomer() {
        try {
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
