import html from '../build-ui/core.js'

function TodoItem({ name, isCompleted }) {
    return html`
        <li class="${isCompleted && 'completed'}">
            <div class="view">
                <input class="toggle" type="checkbox" ${isCompleted && 'checked'}>
                <label>${name}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `
}

export default TodoItem;