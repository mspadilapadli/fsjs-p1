const Factory = require("./class");
const fs = require("fs").promises;
class Model {
    static async getCompanies() {
        try {
        } catch (error) {
            throw error;
        }
    }

    static async getEmployees() {
        try {
        } catch (error) {
            throw error;
        }
    }
    static async addEmployee() {
        try {
        } catch (error) {
            throw error;
        }
    }

    static async #saveFile(data) {
        try {
            const dataStr = JSON.stringify(data, null, 4);
            await fs.writeFile("./data.json", dataStr);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;
