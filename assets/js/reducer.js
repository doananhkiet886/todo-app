const init = {
    header: {
        heading: 'todos',
        inputPlaceHolder: 'What needs to be done?'
    },

    todos: [
        {
            name: 'Learn JavaScript',
            isCompleted: false
        },
        {
            name: 'Learn NodeJS',
            isCompleted: false
        }
    ]
}

const actions = {
    add(todos, name) {
        const newTodo = {
            name,
            isCompleted: false
        }
        todos.push(newTodo);
    }
}

export default function reducer(state = init, action, ...args) {
    if (action) {
        actions[action](state.todos, ...args);
    }
    return state;
}