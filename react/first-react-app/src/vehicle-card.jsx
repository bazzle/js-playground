import propTypes from "prop-types"
import { useState } from "react"

function Vehicle({
    uniqueKey = 0,
    name = 'Name',
    dlc = false,
    description = 'Description',
    fuelCapacity = 0,
    profilePicPath = '-',
}){

    const [likes, likeSetter] = useState(0);
    const likeClickHandler = (event) => {
        likeSetter(likes +1);
        event.shiftKey && likeSetter(likes +10);
    }

    return (
        <li key={uniqueKey} className = 'card'>
            {dlc && <span className = 'dlc highlight'>DLC</span>}
            <button className="like-button" onClick={likeClickHandler}>Like 👍 ({likes})</button>
            <img src={profilePicPath} alt="Profile image" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Fuel capacity (Litres) : {fuelCapacity}</p>
        </li>
    )
}

Vehicle.propTypes = {
    uniqueKey: propTypes.number,
    name: propTypes.string,
    description: propTypes.string,
    fuelCapacity: propTypes.number,
    dlc: propTypes.bool,
    profilePicPath: propTypes.string
}

export default Vehicle