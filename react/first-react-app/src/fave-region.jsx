import { useState } from "react";

function FaveRegion(){

	const regionsArray = ['Michigan', 'Taymyr', 'Alaska', 'Don', 'Wisconsin', 'Lake Kovd'];
	const [regions, setRegion] = useState(regionsArray);

	const handleNewRegion = (evt) => {
		evt.preventDefault();
		const inputElem = document.getElementById('region-input');
		let newRegion = inputElem.value;
		setRegion((prevRegions) => [...prevRegions, newRegion]);
		inputElem.value = '';
	}
	const handleRemoveRegion = (index) => {
		// Use filter method, this kicks out any elements that dont meet the criteria specified.
		setRegion(regions.filter((element, i) => i !== index));
	}

	// Note use of round brackets in the callback function. instead of curly. This is the jsx way of identifying what to render. Alternatively, keep curly brackets, but use return keyword.
	return (
		<div className="fave-regions">
			<ul className="fave-regions__list">
				{regions.map((region, index) => (
					<li key={index}>
						{region}
						<button onClick={() => handleRemoveRegion(index)} className="fave-regions__list__remove">(Remove)</button>
					</li>
				))}
			</ul>

			<form className='form'>
				<div className="form__section">
					<label htmlFor="new-region">New region</label>
					<input placeholder="Enter region" id="region-input" type="text" />
					<button onClick = {handleNewRegion}>Add Region</button>
				</div>
			</form>
		</div>
	)
}

export default FaveRegion;