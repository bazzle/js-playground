function ButtonInline(){
    const styles = {
        backgroundColor : 'bisque',
        color : 'black'
    }

    let count = 0;

    const handleClick = (evt, name) => {
        if (count < 5){
            count++;
            evt.target.innerText = `${name}, You double clicked me ${count} times`;
        } else {
            evt.target.innerText = `Alright I'm done`;
        }

    }

    // Notice how we use the arow function, as we need to pass in a parameter.
    return (
        <button onDoubleClick={(evt) => handleClick(evt, 'bazzle')} style = {styles}>Double click me</button>
    )
}

export default ButtonInline;