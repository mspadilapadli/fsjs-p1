const fs = require("fs");
const Controller = require("../Controllers/controller");
const Factory = require("./class");
class Model {
    static readData() {
        //*step
        // read data with fs and conver from string to array
        // instantaite data
        // return data inctance

        //* v1
        //   let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
        //   data = Factory.createTodos(data);
        //   return data;

        //* v2 one line
        return Factory.createTodos(
            JSON.parse(fs.readFileSync("./data.json", "utf-8"))
        );
    }
}

module.exports = Model;
