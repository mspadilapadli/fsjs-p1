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
    static delete(input) {
        const dataDel = Model.delete(input);
        View.deletedShow(dataDel);
    }
    static complete(input) {
        const data = Model.complete(input);
        View.showList(data);
    }
    static unComplete(input) {
        const data = Model.unCompleted(input);
        View.showList(data);
    }
    static status(input, statusComplete) {
        const data = Model.status(input, statusComplete);
        View.showList(data);
    }
}

module.exports = Controller;
