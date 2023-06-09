import html from '../build-ui/core.js';
import { connect } from '../js/store.js';

function Footer({ todos }) {
    return html`
        <footer class="footer">
            <span class="todo-count">
                <strong>
                    ${todos.filter(todo => !todo.isCompleted).length}
                </strong> 
                item left
            </span>
            <ul class="filters">
                <li>
                    <a class="selected" href="#/">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    `
}

export default connect(state => ({ 
    todos: state.todos 
}))(Footer);