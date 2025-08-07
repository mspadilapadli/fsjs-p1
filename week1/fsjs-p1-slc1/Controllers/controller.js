const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
    static async showList() {
        try {
            const data = await Model.getBankList();
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async addBank(input) {
        try {
            const data = await Model.addBank(input);
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async deleteBank(id) {
        try {
            const data = await Model.deleteBank(id);
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async addCustomer(input) {
        try {
            const data = await Model.addCustomer(input);
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async deleteCustomer(input) {
        try {
            const data = await Model.deleteCustomer(input);
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async detailBank(input) {
        try {
            const data = await Model.detailBank(input);
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }
}
module.exports = Controller;
