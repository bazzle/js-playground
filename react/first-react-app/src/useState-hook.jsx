import { useState } from 'react';

function MyStateComponent(){

    // Create a stateful variable, and setter function
    // useState returns an array with 2 elements, variable and setter function to update variable
    // We destructure these.
    // Notice how you can pass in an argument to useState which is the default state
    const [name, setName] = useState('Random trucker');
    const [age, setAge] = useState(0);
    const [employed, setEmployment] = useState(false);
    const updateName = () => {
        setName('Bazzle');
    }
    const updateAge = () => {
        setAge(age +1);
    }
    const updateEmployment = () => {
        setEmployment(!employed);
    }

    return (
		<div className="profileSetter">
			<p>Name : {name}</p>
			<p>Age : {age}</p>
			<p>Employment status : {employed ? 'Trucker' : 'Unemployed'}</p>
			<div className="button-group">
				<button className="button" onClick={() => updateName()}>Give cool name</button>
				<button className="button" onClick={() => updateAge()}>Set age</button>
				<button className="button" onClick={() => updateEmployment()}>Toggle job</button>
			</div>
        </div>
    )


}

export default MyStateComponent;