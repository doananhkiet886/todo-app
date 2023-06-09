import { dataInit as init } from './data.js';
import { storage, TODOS_KEY }from './data.js';

const actions = {
    add({ todos }, [name]) {
        if (name) {
            const newTodo = {
                name,
                isCompleted: false
            }
            todos.push(newTodo);
            storage.set(TODOS_KEY, todos);
        }
    },
    toggle({ todos }, [index]) {
        const todo = todos[index];
        todo.isCompleted = !todo.isCompleted;
        storage.set(TODOS_KEY, todos);
    },
    delete({ todos }, [index]) {
        todos.splice(index, 1);
        storage.set(TODOS_KEY, todos);
    },
    edit({ todos }, [index, newTodoName]) {
        if (newTodoName) {
            const todo = todos[index];
            todo.name = newTodoName;
            storage.set(TODOS_KEY, todos);
        } else {
            todos.splice(index, 1);
        }
    },
    endEdit() {
        
    },
    switchFilter(state, [type]) {
        state.filter = type;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(init.filters.active);
        storage.set(TODOS_KEY, state.todos);
    },
    toggleAll({ todos }) {
        todos.forEach(todo => {
            todo.isCompleted = true;
        })
        storage.set(TODOS_KEY, todos);
    }
}

export default function reducer(state = init, action, ...args) {
    if (action) {
        actions[action](state, ...args);
    }
    return state;
}