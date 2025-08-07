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

    static async addBank([name, type]) {
        try {
            const { data } = await this.getBankList();

            const id = Math.max(0, ...data.map(({ id }) => id)) + 1;
            const newBank = Factory.createBank(id, name, type);

            data.push(newBank);
            this.#saveFile(data);

            return { code: "addBank", data: newBank };
        } catch (error) {
            throw error;
        }
    }

    static async deleteBank([id]) {
        try {
            let { data } = await this.getBankList();
            const foundBank = await this.#findBankId(id, data);

            //filter
            data = data.filter((bank) => bank.id != foundBank.id);

            this.#saveFile(data);

            return { code: "deleteBank", data: foundBank };
        } catch (error) {
            throw error;
        }
    }

    static async addCustomer([id, name, ktp, depositAmount]) {
        try {
            const { data } = await this.getBankList();
            const bank = await this.#findBankId(id, data);
            if (bank.customers.length >= bank.limit)
                throw new Error(`You can't add more customer to this Bank`);

            const newCustomer = Factory.createCustomer(
                name,
                ktp,
                +depositAmount
            );

            bank.customers.push(newCustomer);

            this.#saveFile(data);
            return { code: "addCustomer", data: newCustomer };
        } catch (error) {
            throw error;
        }
    }

    static async deleteCustomer([id, ktp]) {
        try {
            const { data } = await this.getBankList();
            const foundBank = await this.#findBankId(id, data);

            //findIndex() && splice()
            const customers = foundBank.customers;
            const indexCustomer = customers.findIndex(
                (customers) => customers.ktp == ktp
            );
            if (indexCustomer == -1)
                throw new Error(`Customer with ktp ${ktp} is not found`);

            const deletedData = customers.splice(indexCustomer, 1);

            this.#saveFile(data);

            return { code: "deleteCustomer", data: deletedData };
        } catch (error) {
            throw error;
        }
    }
    static async detailBank([id]) {
        try {
            const { data } = await this.getBankList();
            const foundBank = await this.#findBankId(id, data);

            return { code: "detailBank", data: foundBank.customers };
        } catch (error) {
            throw error;
        }
    }

    //* help method
    static async #saveFile(data) {
        const dataStr = JSON.stringify(data, null, 4);
        await fs.writeFile("./data.json", dataStr);
    }
    static async #findBankId(id, data) {
        try {
            const bank = data.find((bank) => bank.id == id);
            if (!bank) throw new Error(`Bank with ${id} is not found`);
            return bank;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = Model;
