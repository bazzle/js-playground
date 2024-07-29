import { useState, useEffect } from 'react';

function Counter(){

    const [count, setCount] = useState(0);

	// useEffect function, you can use this to make things happen when other things load or change

	// useEffect has two arguments, callback function and dependencies (array)
	// The dependencies are state variables that you can set to fire when that state has updated

	// This is a useEffect function. It has a "dependency" (count) When count state variable updates, it fires.
	// useEffect(() => {}) // Runs after every re-render
	// useEffect(() => {}, []) // Runs only on mount
	// useEffect(() => {}, [variable]) // Runs on mount and when value changes

	// Note, Mounting is a one-time event that occurs when a component is created and added to the DOM. It involves initializing the component and invoking specific lifecycle methods.
	// Rendering can happen multiple times. It is the process of producing the component's virtual DOM representation, which React then uses to update the actual DOM if necessary.

	
	useEffect(() => {
		document.title = `Counter: ${count}`;
	}, [count]);

    const increment = () => {
        setCount(count +1);
    }
    const decrement = () => {
        setCount(count -1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter">
            <p className="count-display">{count}</p>
			<div className="button-group">
				<button className='button counter-button' onClick={decrement}>Decrement</button>
				<button className='button counter-button' onClick={reset}>Reset</button>
				<button className='button counter-button' onClick={increment}>Increment</button>
			</div>
        </div>
    )

}

export default Counter;