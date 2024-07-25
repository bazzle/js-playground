import { useState } from "react";

function TruckMaker(){

	const currentYear = new Date().getFullYear();
	
	const [trucks, setTrucks] = useState([]);
	const [truckMake, setTruckMake] = useState('');
	const [truckModel, setTruckModel] = useState('');
	const [truckYear, setTruckYear] = useState(currentYear);

	const handleNewTruck = (evt) => {
		evt.preventDefault();
		const newTruck = {
			newTruckMake : truckMake,
			newTruckModel : truckModel,
			newTruckYear : truckYear
		};
		setTrucks(prevTrucks => [...prevTrucks, newTruck]);
		setTruckMake('');
		setTruckModel('');
		setTruckYear(currentYear);
	}
	const handleMake = (evt) => {
		let textInput = evt.target.value;
		setTruckMake(textInput);
	}
	const handleModel = (evt) => {
		let textInput = evt.target.value;
		setTruckModel(textInput);
	}
	const handleYear = (evt) => {
		let textInput = evt.target.value;
		setTruckYear(textInput);
	}



	return (
		<div className="truck-maker">
			<ul>
				{
					trucks.map((item, index) => 
						<li key={index}>
							{item.newTruckMake} {item.newTruckModel} {item.newTruckYear}
						</li>
					)
				}
			</ul>
			
			<form className="form" id="truck-maker">
				<div className="form__section">
					<label htmlFor="truck-make">Make</label>
					<input onChange={handleMake} placeholder="Enter make" type="text" id="truck-make" value={truckMake} />
				</div>
				<div className="form__section">
					<label htmlFor="truck-model">Model</label>
					<input onChange={handleModel} placeholder="Enter model" type="text" id="truck-model" value={truckModel} />
				</div>
				<div className="form__section">
					<label htmlFor="truck-year">Year</label>
					<input onChange={handleYear} placeholder="Enter year" max={currentYear} type="number" id="truck-year" value={truckYear} />
				</div>
				<div className="form__section form__section--submit">
					<button onClick={handleNewTruck} className="button">Create truck</button>
				</div>
			</form>
		</div>
	)
}

export default TruckMaker;