function ButtonInline(){
    const styles = {
        border:'none',
        textTransform:'uppercase',
        padding:'.5em .8em',
        margin: '.5em',
        backgroundColor:'rgb(48, 36, 0)',
        color: 'white',
        fontWeight: 'bold'
    }
    return (
        <button style = {styles}>Explore more trucks</button>
    )
}

export default ButtonInline;