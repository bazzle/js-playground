import { useEffect, useRef } from "react";

function UseReference(){

	// useRef outputs an object with a single property, 'current'
	const inputRef = useRef('');
	const buttonRef = useRef(null);

	const HandleInputChange = (evt) => {
		inputRef.current = evt.target.value;
		// changes the reference state without triggering a re-render
		console.log(inputRef.current);
	};

	const handleButtonClick = (evt) => {
		evt.preventDefault();
		buttonRef.current.style.backgroundColor = "orange";
	}

	useEffect(() => {
		console.log('Rendered');
	});

	return (
		<div className="input-ref">
			<form className="form">
				<div className="form__section">
					<input type="text" onChange={HandleInputChange} className="input-ref__input" />
				</div>
				<button ref={buttonRef} className="button" onClick={handleButtonClick}>Click me</button>
			</form>
		</div>
	)
}

export default UseReference;