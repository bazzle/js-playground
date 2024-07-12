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
            <button onClick={() => updateName()}>Give cool name</button>
            <button onClick={() => updateAge()}>Set age</button>
            <button onClick={() => updateEmployment()}>Toggle job</button>
        </div>
    )


}

export default MyStateComponent;