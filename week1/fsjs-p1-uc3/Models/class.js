class Todo {
    constructor(id, task, completed) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }
}

class Factory {
    static createTodos(todos) {
        //* v1 : simpan data lalu return
        //   let data = todos.map((todo) => {
        //       let { id, task } = todo;
        //       return this.createTodo(id, task,completed);
        //   });
        //   return data;
        //* v2 : langsung return todos nya
        //   return todos.map((todo) => {
        //       let { id, task } = todo;
        //       return this.createTodo(id, task,completed);
        //   });
        //* v3 : one line
        return todos.map(({ id, task, completed }) =>
            this.createTodo(id, task, completed)
        );
    }

    static createTodo(id, task, completed) {
        return new Todo(id, task, completed);
    }
}
module.exports = Factory;
