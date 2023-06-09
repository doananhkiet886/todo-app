const init = {
    header: {
        heading: 'todos',
        inputPlaceHolder: 'What needs to be done?'
    },

    todos: []
}

const actions = {
    add(todos, name) {
        const newTodo = {
            name,
            isCompleted: false
        }
        todos.push(newTodo);
    },
    toggle(todos, index) {
        const todo = todos[index];
        todo.isCompleted = !todo.isCompleted;
    },
    delete(todos, index) {
        todos.splice(index, 1);
    }
}

export default function reducer(state = init, action, ...args) {
    if (action) {
        actions[action](state.todos, ...args);
    }
    return state;
}