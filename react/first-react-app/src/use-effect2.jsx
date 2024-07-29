import { useEffect, useState } from 'react';


function MountingFun(){

	const [message, setMessage] = useState('Hover me');

	// With useEffect we can access elements of the dom when the component is mounted. You wouldn't be able to do this outside of useEffect, as the element won't be there yet.

	useEffect(() => {
		const hoverBox = document.getElementById('hover-box');
		hoverBox.addEventListener('mouseenter', () => {
			setMessage('Thanks');
		});
		hoverBox.addEventListener('mouseleave', () => {
			setMessage('Hover me');
		})
	}, []);

	// You can have more than one useEffect

	useEffect(() => {
		console.log('setMessage state changed');
	}, [message]);

	return(
		<div className="mounting">
			<div id="hover-box">
				<p>{message}</p>
			</div>
		</div>
	)
}

export default MountingFun;