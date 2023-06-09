const init = {
    header: {
        heading: 'todos',
        inputPlaceHolder: 'What needs to be done?'
    },

    todos: [],

    filter: 'all',

    filters: {
        all: () => true,
        active: todo => !todo.isCompleted,
        completed: todo => todo.isCompleted,
    }
}

const actions = {
    add({ todos }, name) {
        const newTodo = {
            name,
            isCompleted: false
        }
        todos.push(newTodo);
    },
    toggle({ todos }, index) {
        const todo = todos[index];
        todo.isCompleted = !todo.isCompleted;
    },
    delete({ todos }, index) {
        todos.splice(index, 1);
    },
    edit({ todos }, [index, newTodoName]) {
        const todo = todos[index];
        todo.name = newTodoName;
    },
    switchFilter(state, [type]) {
        state.filter = type;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(init.filters.active);
    }
}

export default function reducer(state = init, action, ...args) {
    if (action) {
        actions[action](state, ...args);
    }
    return state;
}