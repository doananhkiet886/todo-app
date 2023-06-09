import html from '../build-ui/core.js';
import { connect } from '../js/store.js';

function Footer({ todos, filter }) {
    const filterKeys = Object.keys(filter);
    return html`
        <footer class="footer">
            <span class="todo-count">
                <strong>
                    ${todos.filter(todo => !todo.isCompleted).length}
                </strong> 
                item left
            </span>
            <ul class="filters">
                ${filterKeys.map(key => `
                    <li>
                        <a class="selected" href="#/">${key[0].toUpperCase() + key.slice(1)}</a>
                    </li>
                `)}
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    `
}

export default connect(state => ({ 
    todos: state.todos,
    filter: state.filter
}))(Footer);