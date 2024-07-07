function ListBuilder(props){

    const items = props.items;
    
    const inputListFormatted = items.map((item) => {
        return <li key={item.ID}>{item.name} - {item.count}</li>
    });

    return(
        <div className="truck-list">
            {inputListFormatted}
        </div>
    )
}

export default ListBuilder;