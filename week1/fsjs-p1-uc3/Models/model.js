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

    static findById(input) {
        //step
        // baca data json
        // cari id yg sama
        // return data (inctance)
        const [id] = input;
        const data = this.readData();
        const foundId = data.find((todo) => todo.id == id);
        if (!foundId) return `Id tidak ditemukan`;
        return foundId;
    }

    static delete([id]) {
        // step
        // baca dta json
        // cari id yang sama
        // delete id with filter / splice /
        // save data del dan save json
        //  return data del
        let data = this.readData();
        const dataDel = this.findById(id);

        //* filter()
        data = data.filter((todo) => todo.id != dataDel.id);
        this.saveData(data);
        return dataDel;
    }

    static saveData(data) {
        const dataStr = JSON.stringify(data, null, 4);
        fs.writeFileSync("./data.json", dataStr);
    }
}

module.exports = Model;
