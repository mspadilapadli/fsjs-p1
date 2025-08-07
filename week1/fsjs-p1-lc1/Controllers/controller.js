const Model = require("../Model/model");
const View = require("../Models/model");

class Controller {
    static async getCompanies() {
        try {
            const data = await Model.getCompanies();
            View.showCompnaies(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async getEmployees(id) {
        try {
            const data = await Model.getEmployees(id);
            View.showEmployees(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async addEmployee(input) {
        try {
            const data = await Model.addEmployee(input);
            View.showAdd(data);
        } catch (error) {
            View.showError(error);
        }
    }
}

module.exports = Controller;
