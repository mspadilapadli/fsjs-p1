const Controller = require("../Controllers/controller");
class View {
    static showCommnd() {
        console.log(`$ node todo.js
$ node todo.js help
$ node todo.js list
$ node todo.js add <task_content>
$ node todo.js findById <task_id>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>`);
    }

    static showList(data) {
        if (Array.isArray(data)) {
            data.forEach((e) => {
                console.log(`${e.id}. ${e.task}`);
            });
        } else if (typeof data == "object") {
            console.log(`${data.id}. ${data.task}`);
        } else {
            console.log(data);
        }
    }

    static showAddData(data) {
        const { id, task } = data;
        console.log(`Added "${task}" to your TODO list...`);
    }
}

module.exports = View;
