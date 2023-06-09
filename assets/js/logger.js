import reducer from './reducer.js';

export default function logger(reducer) {
    return (state, action, ...args) => {
        const prevState = state;

        console.group(action);
        console.log('Previous: ', prevState);
        console.log('Action Arguments: ' + args);

        const nextState = reducer(state, action, ...args);

        console.log('Next: ', nextState);
        console.groupEnd();

        return nextState;
    }
}