import { useState, useEffect } from 'react';

function MyForm(){

    const [name, setName] = useState('');
    const [favTruck, setFavTruck] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const placeHolder = '...';
    const handleSelectTruckChange = (event) => {
        setFavTruck(event.target.value);
    }

	useEffect(() => {
		let nameGreet = `Hi ${name ? name : 'there'}`;
		let truckGreet = favTruck && `, Mr ${favTruck}`;
		document.title = nameGreet + truckGreet;
	}, [name, favTruck]);



    return (
        // Note use of onChange attribute
		<div className="simple-form">
			<form className="form">
				<div className = "form__section">
					<label htmlFor="nameInput">Hi, whats your name?</label>
					<input type="text" placeholder='Name' value={name} id="nameInput" onChange={handleNameChange} />
				</div>

				<div className = "form__section">
					<label htmlFor="fav-truck">Whats your favourite truck?</label>
					<select name="Favourite truck" onChange={handleSelectTruckChange} id="fav-truck">
						<option value="">Select an option</option>
						<option value="ank-mk38-civilian">ANK MK38 Civilian</option>
						<option value="derry-special">Derry Special 15C-177</option>
						<option value="azov-5319">AZOV 5319</option>
						<option value="ank-m-k38">ANK MK38</option>
						<option value="femm-37-at">FEMM 37-AT</option>
						<option value="gmc-brigadier-8000">GMC Brigadier 8000</option>
						<option value="azov-64131">AZOV 64131</option>
						<option value="freightliner-114-sd">Freightliner 114SD</option>
						<option value="royal-b-m17">Royal BM17</option>
						<option value="international-paystar-5070">International Paystar 5070</option>
						<option value="khan-39-marshall">Khan 39 Marshall</option>
					</select>
				</div>
			</form>

			<div className="form-output">
				<hr />
				<p>Hello { !name ? placeHolder : name}</p>
				<p>Your favourite truck is { !favTruck ? placeHolder : favTruck}</p>
			</div>
        </div>
    )

}

export default MyForm;