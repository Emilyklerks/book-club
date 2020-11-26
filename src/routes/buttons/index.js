import {useReducer} from "preact/hooks";

const initialState = 'Hello';
const reducer = (state, action) => {
    switch (action) {
        case 'a': return state += 'a';
        case 'b': return state += 'b';
        case 'c': return state += 'c';
        default: throw new Error('Unexpected action');
    }
};

const Buttons = () => {
    const [value, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{value}</p>
            <button onClick={() => dispatch('a')}>A</button>
            <button onClick={() => dispatch('b')}>B</button>
            <button onClick={() => dispatch('c')}>C</button>
        </div>
    )
}

export default Buttons;
