import PropTypes from "prop-types"

function Vehicle({
    name = 'Name',
    dlc = false,
    description = 'Description',
    fuelCapacity = 0,
    profilePicPath = '-'
}){

    return (
        <div className = 'card'>
            {dlc && <span className = 'dlc'>DLC</span>}
            <img src={profilePicPath} alt="Profile image" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Fuel capacity (Litres) : {fuelCapacity}</p>
        </div>
    )

}

Vehicle.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    fuelCapacity: PropTypes.number,
    dlc: PropTypes.bool,
    profilePicPath: PropTypes.string
}

export default Vehicle