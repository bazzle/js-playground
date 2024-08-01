import { useState, useEffect } from "react";

function Playing(){

	const [message, setMessage] = useState('default message');



	useEffect(() => {
		setMessage('New message');
		console.log(message);
	},[]);

	useEffect(() => {
		console.log('Playing component render updated');
	});

	useEffect(() => {
		console.log('message updated');
	},[message]);

	return(
		<div className="playing">
			<p>Nothing here...</p>
		</div>
	)	
}

export default Playing