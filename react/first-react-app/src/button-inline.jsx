import { useState } from "react";

function ButtonInline(){
    const styles = {
        backgroundColor : 'bisque',
        color : 'black'
    }

    const [count, countSetter] = useState(1);
    const [message, messageSetter] = useState(<>Double click me</>);

    const handleClick = (evt, name) => {
        const message1 = <>{name} You double clicked me {count} times</>;
        const message2 = <>Alright I'm done</>;
        countSetter(count +1);
        if (count < 6){
            messageSetter(message1);
        } else {
            messageSetter(message2);
        }

    }

    // Notice how we use the arow function, as we need to pass in a parameter.
    return (
        <button onDoubleClick={(evt) => handleClick(evt, 'bazzle')} style = {styles}>
            {message}
        </button>
    )
}

export default ButtonInline;