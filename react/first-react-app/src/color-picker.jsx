import {useState} from "react";
import TruckOutline from "./truck-outline";

function ColorPicker(){
    const [color, setColor] = useState('#3d4608');
    const [bgColor, setBgColor] = useState('#ffffff');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }
    const handleBgColorChange = (event) => {
        setBgColor(event.target.value);
    }

    return(
        <div className="color-picker">
            <form className="choose">
                <div className="choose__item">
                    <label htmlFor="color-change">Favourite truck colour:</label>
                    <input id="color-change" type="color" value={color} onChange={handleColorChange} />
                </div>
                <div className="choose__item">
                    <label htmlFor="color-bg-change">Background colour:</label>
                    <input id="color-bg-change" type="color" value={bgColor} onChange={handleBgColorChange} />
                </div>
            </form>
            <div className="result">
                <div className="result inner" style={{backgroundColor : bgColor}}>
                    <TruckOutline bgColor = {color} />
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;