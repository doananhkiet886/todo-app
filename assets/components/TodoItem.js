import html from '../build-ui/core.js'
import { connect } from '../js/store.js';

function TodoItem() {
    return html`
        <li class="completed">
            <div class="view">
                <input class="toggle" type="checkbox" checked>
                <label>Taste JavaScript</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `
}

export default TodoItem;