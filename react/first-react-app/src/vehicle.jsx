import propTypes from "prop-types"

function Vehicle({
    uniqueKey = 0,
    name = 'Name',
    dlc = false,
    description = 'Description',
    fuelCapacity = 0,
    profilePicPath = '-'
}){
    return (
        <li key={uniqueKey} className = 'card'>
            {dlc && <span className = 'dlc'>DLC</span>}
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