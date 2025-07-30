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

    static add(input) {
        // read data with fs and conver from string to array
        // create id for newData
        // instantiate new data and convert data from array to string
        // add to data file / db with fs.write
        // retrun newData for success display add

        const [task] = input;
        let data = this.readData();
        // *id v1
        //   const id = data[data.length - 1].id + 1;

        //* id v2
        const id = Math.max(0, ...data.map((todo) => todo.id)) + 1;

        const newData = Factory.createTodo(id, task);
        data.push(newData);
        this.saveData(data);
        return newData;
    }

    static saveData(data) {
        const dataStr = JSON.stringify(data, null, 4);
        fs.writeFileSync("./data.json", dataStr);
    }
}

module.exports = Model;
