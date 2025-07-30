const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
    static showCommand() {
        View.showCommnd();
    }
    static showList() {
        let data = Model.readData();
        View.showList(data);
    }
}

module.exports = Controller;
