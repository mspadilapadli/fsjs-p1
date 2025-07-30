const fs = require("fs");
const Controller = require("../Controllers/controller");
const Factory = require("./class");
class Model {
    static readData() {
        // read data with fs and conver from string to array
        // instantaite data
        // return data inctance
        let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
        data = Factory.createTodos(data);
        return data;
    }
}

module.exports = Model;
