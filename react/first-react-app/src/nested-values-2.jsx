import { useContext } from "react";
import { UserContext } from "./nested-values";
import NestedValues3 from "./nested-values-3";

function NestedValues2(){

	const name = useContext(UserContext);
	
	return(
		<div className="nested-values">
			<div className="nested-values__box">
				<p>My name, {name} is imported from my parent</p>
				<NestedValues3/>
			</div>
		</div>
	)
}

export default NestedValues2;