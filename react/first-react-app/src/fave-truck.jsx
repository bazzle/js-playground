import { useState } from "react";

function FaveTruck(){

    const [favTruck, setFavTruck] = useState({
        make : 'Chevrolet',
        model : 'Kodiak'
    });

    // Use spread operator to only change the specified values
    // Using updated function, can callback in a function and makes the existing state a parameter you can pass into the function callback. Then allows you to update the state.
    const handleChangeMake = (evt) => {
        setFavTruck( (prevFavTruck) => ({
                ...prevFavTruck,
                make : evt.target.value
            })
        );
    }
    const handleChangeModel = (evt) => {
        setFavTruck( (prevFavTruck) => ({
                ...prevFavTruck,
                model : evt.target.value
            })
        );
    }

    return(

        <div className="fave-truck">
            <form className="form">
                <div className="form__section">
                    <label htmlFor="truck-make">Truck manufacturer</label>
                    <input id="truck-make" type="text" onChange={handleChangeMake} />
                </div>
                <div className="form__section">
                    <label htmlFor="truck-model">Truck model</label>
                    <input id="truck-model" type="text" onChange={handleChangeModel} />
                </div>
            </form>
            <p>My favourite truck is a {favTruck.make} {favTruck.model}</p>
        </div>
    )

}

export default FaveTruck;