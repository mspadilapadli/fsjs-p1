class Todo {
    constructor(id, task) {
        this.id = id;
        this.task = task;
    }
}

class Factory {
    static createTodos(todos) {
        //* v1 : simpan data lalu return
        let data = todos.map((todo) => {
            let { id, task } = todo;
            return this.createTodo(id, task);
        });
        return data;
    }

    static createTodo(id, task) {
        return new Todo(id, task);
    }
}
module.exports = Factory;
