const Factory = require("./class");
const fs = require("fs").promises;
class Model {
    static async getCompanies() {
        try {
            return Factory.createCompanies(
                JSON.parse(await fs.readFile("./data.json", "utf-8"))
            );
        } catch (error) {
            throw error;
        }
    }

    static async getEmployees([id]) {
        try {
            const companies = await this.getCompanies();
            const companyFound = companies.find((company) => (company.id = id));
            if (!companyFound)
                throw new Error(`Company with ${id} is not found `);

            return companyFound;
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
