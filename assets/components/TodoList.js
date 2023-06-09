import html from '../build-ui/core.js'
import TodoItem from './TodoItem.js';
import { connect } from '../js/store.js';

function TodoList({ todos, filter, filters }) {
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo, index) => TodoItem(todo, index))}
            </ul>
        </section>
    `
}

export default connect()(TodoList);