import html from '../build-ui/core.js'
import { connect } from '../js/store.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import Footer from './Footer.js';

function App() {
    return html`
        ${Header()}
        ${TodoList()}
        ${Footer()}
    `
}

export default connect()(App);