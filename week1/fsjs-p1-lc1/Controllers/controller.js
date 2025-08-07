const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
    static async getCompanies() {
        try {
            const data = await Model.getCompanies();
            View.showCompanies(data);
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
