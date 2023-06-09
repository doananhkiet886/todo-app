import html from '../build-ui/core.js'

function TodoItem({ name, isCompleted }, index) {
    return html`
        <li class="${isCompleted && 'completed'}" ondblclick="this.classList.add('editing')">
            <div class="view">
                <input class="toggle"
                type="checkbox" 
                ${isCompleted && 'checked'}
                onchange="dispatch('toggle', ${index})"
            >
                <label>${name}</label>
                <button class="destroy" onclick="dispatch('delete', ${index})"></button>
            </div>
            <input
                class="edit" value="${name}"
                onkeyup="event.keyCode === 13 && dispatch('edit', ${index}, this.value) || event.keyCode === 27 && dispatch('endEdit')"
                onblur="dispatch('edit', ${index}, this.value.trim())"
            >
        </li>
    `
}

export default TodoItem;