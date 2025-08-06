const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
    static showCommands() {
        View.showCommands();
    }

    static async readDataPlanes() {
        try {
            const data = await Model.getPlaneList();
            View.showPlaneList(data);
        } catch (error) {
            View.showError(error);
        }
    }
    static async showDataPassengers() {
        try {
            const data = await Model.getPassengerList();
            View.showPassengerList(data);
        } catch (error) {
            View.showError(error);
        }
    }
}

module.exports = Controller;
