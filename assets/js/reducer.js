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
    
}

export default function reducer(state = init, action, ...args) {
    return state;
}