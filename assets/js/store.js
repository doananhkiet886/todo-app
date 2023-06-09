import { createStore } from '../build-ui/core.js';
import reducer from './reducer.js';

const { attach, connect, dispatch } = createStore(reducer);

window.dispatch = dispatch;

export {
    attach,
    connect
}