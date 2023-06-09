import html from '../build-ui/core.js';
import { connect } from '../js/store.js';

function Header({ heading, inputPlaceHolder }) {
    return html`
        <header class="header">
            <h1>${heading}</h1>
            <input class="new-todo" placeholder="${inputPlaceHolder}" autofocus>
        </header>
    `
}

export default connect(state => state.header)(Header);