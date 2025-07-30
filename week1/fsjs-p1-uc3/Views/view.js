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
        data.forEach((e) => {
            console.log(`${e.id}. ${e.task}`);
        });
    }
}

module.exports = View;
