function Food(){

    const food1 = "Oranges"
    const food2 = "Lemons"
    const food3 = "Bananas"
    const foods = [food1, food2, food3];
    
    return (
        <ul>
            <li>{foods[0]}</li>
            <li>{foods[1]}</li>
            <li>{foods[2]}</li>
        </ul>
    )

}

export default Food