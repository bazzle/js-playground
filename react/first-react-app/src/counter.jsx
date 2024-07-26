import { useState, useEffect } from 'react';

function Counter(){

    const [count, setCount] = useState(0);

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