class Todo {
    constructor(id, task) {
        this.id = id;
        this.task = task;
    }
}

class Factory {
    static createTodos(todos) {
        //* v1 : simpan data lalu return
        //   let data = todos.map((todo) => {
        //       let { id, task } = todo;
        //       return this.createTodo(id, task);
        //   });
        //   return data;
        //* v2 : langsung return todos nya
        //   return todos.map((todo) => {
        //       let { id, task } = todo;
        //       return this.createTodo(id, task);
        //   });
        //* v3 : one line
        return todos.map(({ id, task }) => this.createTodo(id, task));
    }

    static createTodo(id, task) {
        return new Todo(id, task);
    }
}
module.exports = Factory;
