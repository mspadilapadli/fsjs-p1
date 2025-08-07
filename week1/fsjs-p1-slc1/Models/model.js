const { join } = require("path");
const Controller = require("../Controllers/controller");
const Factory = require("./class");
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

    static async addBank() {
        try {
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
}
module.exports = Model;
