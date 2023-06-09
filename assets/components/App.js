import html from '../build-ui/core.js'
import Header from './Header.js';
import TodoList from './TodoList.js';
import Footer from './Footer.js';
import { connect } from '../js/store.js'

function App() {
    return html`
        ${Header()}
        ${TodoList()}
        ${Footer()}
    `
}

export default connect()(App);