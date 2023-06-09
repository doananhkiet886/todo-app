import html from '../build-ui/core.js'
import { connect } from '../js/store.js';
import TodoItem from './TodoItem.js';

function TodoList() {
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${TodoItem()};
                ${TodoItem()};
                ${TodoItem()};
            </ul>
        </section>
    `
}

export default TodoList;