import { useState, createContext } from "react";
import NestedValues2 from "./nested-values-2";

export const UserContext = createContext();

function NestedValues(){

	const [myName] = useState('Bazzle');
	
	return(
		<div className="nested-values">
			<div className="nested-values__box">
				<p>My name is {myName}</p>
				<UserContext.Provider value={myName}>
					<NestedValues2/>
				</UserContext.Provider>
			</div>
		</div>
	)
}

export default NestedValues;