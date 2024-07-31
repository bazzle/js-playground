import { useContext } from "react";
import { UserContext } from "./nested-values";

function NestedValues3(){

	const name = useContext(UserContext);
	
	return(
		<div className="nested-values">
			<div className="nested-values__box">
				<p>My name, {name} is imported from my grandparent</p>
			</div>
		</div>
	)
}

export default NestedValues3;