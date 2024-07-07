import PropTypes from "prop-types"
import ProfilepicPath from "./assets/vehicles/ank-mk38-civilian.jpg"

function Vehicle(props){

    return (
        <div className = 'card'>
            {props.dlc && <span className = 'dlc'>DLC</span>}
            <img src={ProfilepicPath} alt="Profile image" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>Fuel capacity (Litres) : {props.fuelCapacity}</p>
        </div>
    )

}

Vehicle.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    fuelCapacity: PropTypes.number,
    dlc: PropTypes.bool
}
Vehicle.defaultProps = {
    name: "Truck name",
    description: "Description",
    fuelCapacity: 0,
    dlc: false
}

export default Vehicle