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
	// Note the use of the ternary operator, which is how we do conditionals in JSX
	return (
		<div className="fave-regions">
			{
				regions.length > 0 ? (
					<ul className="fave-regions__list">
					{regions.map((region, index) => (
						<li key={index}>
							{region}
							<button onClick={() => handleRemoveRegion(index)} className="fave-regions__list__remove">(Remove)</button>
						</li>
					))}
					</ul>
				) : (
					<p>Please add a region below.</p>
				)
			}

			<form className='form'>
				<div className="form__section">
					<label htmlFor="new-region">New region</label>
					<input placeholder="Enter region" id="region-input" type="text" />
				</div>
				<div className="form__section form__section--submit">
					<button className="button" onClick = {handleNewRegion}>Add Region</button>
				</div>
			</form>
		</div>
	)
}

export default FaveRegion;