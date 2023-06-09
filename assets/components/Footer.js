import html from '../build-ui/core.js';
import { connect } from '../js/store.js';

function Footer({ todos, filter ,filters }) {
    const filterKeys = Object.keys(filters);
    return html`
        <footer class="footer">
            <span class="todo-count">
                <strong>
                    ${todos.filter(todo => !todo.isCompleted).length}
                </strong> 
                item left
            </span>
            <ul class="filters">
                ${filterKeys.map(type => `
                    <li>
                        <a class="${filter === type && 'selected'}" 
                            href="#"
                            onclick="dispatch('switchFilter', '${type}')"
                        >
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>
                `)}
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    `
}

export default connect(state => ({ 
    todos: state.todos,
    filter: state.filter,
    filters: state.filters
}))(Footer);