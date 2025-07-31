const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
    static showCommand() {
        View.showCommnd();
    }
    static showList() {
        const data = Model.readData();
        View.showList(data);
    }
    static addData(input) {
        const newData = Model.add(input);
        View.showAddData(newData);
    }
    static findById(input) {
        const data = Model.findById(input);
        View.showList(data);
    }
}

module.exports = Controller;
