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

    static async addBank() {
        try {
            const data = await Model.addBank();
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async deleteBank() {
        try {
            const data = await Model.deleteBank();
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async addCustomer() {
        try {
            const data = await Model.addCustomer();
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async deleteCustomer() {
        try {
            const data = await Model.deleteCustomer();
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }

    static async detailBank() {
        try {
            const data = await Model.detailBank();
            View.showData(data);
        } catch (error) {
            View.showError(error);
        }
    }
}
module.exports = Controller;
