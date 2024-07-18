function TruckCategories(){

    const categoryData = [
        {
            ID : 1,
            name : 'Scout',
            description : 'Scouts are nimble, often lighter vehicles, that are mainly used to explore the area around you to clear the path for the heavier machines. However they are potentially great for search and rescue, long reach repair & refuel missions and even small cargo transportation.Scouts are off-road capable vehicles and most of the time are able to handle nearly any reasonable mud levels. If tuned properly they will overcome the hardest obstacles.',
            vehicleCount : 27
        },
        {
            ID : 2,
            name : 'Highway',
            description : "They are the best vehicles you could possibly use on hard surfaces, and have some degree of success with them off-road. They are usually very fuel-conservative vehicles with just enough power to haul cargo of any reasonable size on-road. Usually highway trucks lack any off-road functionality, but may still be capable of lifted suspensions, all-terrain and even off-road tires and powerful enough engines to take on complicated terrains.",
            vehicleCount : 5
        },
        {
            ID : 3,
            name : 'Off-road',
            description : 'These trucks are the bread and butter of any driver venturing into wilderness. They are rock solid on difficult terrains and may become a monster of a vehicle with proper tuning.',
            vehicleCount : 26
        },
        {
            ID : 4,
            name : 'Heavy duty',
            description : 'Those vehicles are step above your typical road truck. They are often more prepared for the harsh terrain and may be tuned even further to give a proper off-road a hard beating. However they are often underperforming in a stock form and may not be too productive without proper upgrading. Some of them are capable of rare custom engines that have to be discovered first to be installed in a vehicle. While heavy duty trucks may not be as accessible and reliable as proper off-road vehicles, they are often cheaper and easier to obtain.',
            vehicleCount : 7
        },
        {
            ID : 5,
            name : 'Heavy',
            description : 'Heavy trucks are no joke. They are often huge, eat fuel in barrels, and may weight like a light aircraft. However there are some tasks out there that none, but those monsters may handle. Transporting oversized cargo into the deepest of bogs or rescuing an off-road truck, full of valuable cargo from the huge pile of snow, or salvaging a broken vehicle from the fast mountain river. These are the kinds of tasks Heavy Trucks are good at. They may also transport your default cargo containers from point A to point B of course. If you have the fuel to do so.',
            vehicleCount : 28
        }
    ];

    const truckIntro = 
    <div className="truck-intro">
        <p>Trucks in Snowrunner are categorised broadly into these five categories:</p>
    </div>;

    const categoryList = categoryData.map(
        (item) =>
            <div className="truck-categories__item" key={item.ID}>
                <h3 className="truck-categories__title">{item.name}</h3>
                <p className="truck-categories__description">
                    {item.description}
                </p>
            </div>
    );

    return (
        <div className="truck-categories">
            <div className="truck-categories__intro">
                {truckIntro}
            </div>
            <div className="truck-categories__grid">
                {categoryList}
            </div>
        </div>
    )

}

export default TruckCategories;