import PropTypes from "prop-types"

function ListBuilder(props){

    const items = props.items;
    
    const inputListFormatted = items.map((item) => {
        return <li key={item.ID}>
            {item.ID} : {item.name}
        </li>
    });

    return(
        <div className="list-item">
            <h2>{props.listName}</h2>
			<ul>
				{inputListFormatted}
			</ul>
        </div>
    )
}

// PropTypes object setting instructions on what type of prop should be passed in.
// use .shape method to get this to work on object
ListBuilder.propTypes = {
    listName : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape(
        {
            ID : PropTypes.number,
            name : PropTypes.string
        }
    ))
};

export default ListBuilder;