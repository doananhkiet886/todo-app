import createStorage from "../util/storage.js"

const TODO_APP_STORAGE_KEY = 'TODO_APP'
export const TODOS_KEY = 'todos';

export const storage = createStorage(TODO_APP_STORAGE_KEY);

export const dataInit = {
    header: {
        heading: 'todos',
        inputPlaceHolder: 'What needs to be done?'
    },

    todos: storage.get(TODOS_KEY) ?? [],

    filter: 'all',

    filters: {
        all: () => true,
        active: todo => !todo.isCompleted,
        completed: todo => todo.isCompleted,
    }
}