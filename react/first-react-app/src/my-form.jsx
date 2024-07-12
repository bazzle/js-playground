import { useState } from 'react';

function MyForm(){

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const placeHolder = '...';

    return (
        <div class="form">
            <input placeholder='Name' value={name} onChange={handleNameChange} />
            <p>Hello { !name ? placeHolder : name}</p>
        </div>
    )

}

export default MyForm;