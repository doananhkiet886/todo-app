import html from '../build-ui/core.js'

function TodoItem({ name, isCompleted }, index) {
    return html`
        <li class="${isCompleted && 'completed'}">
            <div class="view">
                <input class="toggle"
                type="checkbox" 
                ${isCompleted && 'checked'}
                onchange="dispatch('toggle', ${index})"
            >
                <label>${name}</label>
                <button class="destroy" onclick="dispatch('delete', ${index})"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `
}

export default TodoItem;