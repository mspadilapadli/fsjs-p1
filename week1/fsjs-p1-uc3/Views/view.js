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
            //handle data list
            data.forEach((e) => {
                const completed = e.completed ? `[x]` : `[]`;
                console.log(`${e.id}.${completed} ${e.task}`);
            });
        } else if (typeof data == "object") {
            // handle output findById
            console.log(`${data.id}. ${data.task}`);
        } else {
            // handle output not found/string
            console.log(data);
        }
    }

    static showAddData(data) {
        const { task } = data;
        console.log(`Added "${task}" to your TODO list...`);
    }
    static deletedShow(data) {
        if (typeof data !== "object") console.log(data);
        else {
            const { id, task } = data;
            console.log(`Deleted "${task}" from your TODO list...`);
        }
    }
}

module.exports = View;
