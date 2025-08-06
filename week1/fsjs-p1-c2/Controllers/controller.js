const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
    static showCommands() {
        View.showCommands();
    }

    static async readDataPlanes() {
        const data = await Model.getPlaneList();
        View.showPlaneList(data);
    }
    static async showDataPassengers() {
        const data = await Model.getPassengerList();
        View.showPassengerList(data);
    }
}

module.exports = Controller;
