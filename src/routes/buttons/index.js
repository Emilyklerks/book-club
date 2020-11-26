import {useReducer, useState, useCallback} from "preact/hooks";
import SpecialButton from "./special-button";

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

    const [currentCountValue, setCountValue] = useState(0);

    // const increment = useCallback(() => {
    //     setCountValue(currentCountValue + 1);
    // }, [currentCountValue]);

    const increment = () => {
        setCountValue(currentCountValue + 1);
    }

    return (
        <div>
            <p>{value}</p>
            <SpecialButton
                triggerClick={() => dispatch('a')}
                text='A-button'
            />
            <button onClick={() => dispatch('b')}>B</button>
            <button onClick={() => dispatch('c')}>C</button>

            <button onClick={increment}>{currentCountValue}</button>
        </div>
    )
}

export default Buttons;
