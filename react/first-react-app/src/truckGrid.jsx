import Vehicle from "./vehicle.jsx"

function TruckGrid(){
  return (
    <div className="grid">
      <Vehicle
        name = "ANK MK38 Civilian"
        profilePicPath = "./src/assets/vehicles/ank-mk38-civilian.jpg"
        description = "Fast, powerful off-road hacker. Can take on anything"
        fuelCapacity = {200}
        dlc = {false}
      />
      <Vehicle
        name = "ANK MK38"
        profilePicPath = "./src/assets/vehicles/ank-mk38.jpg"
        description = "Military grade off-road vehicle"
        fuelCapacity = {200}
        dlc = {false}
      />
      <Vehicle
        name = "AZOV 5319"
        profilePicPath = "./src/assets/vehicles/azov-5319.jpg"
        description = "Very fast and powerful off-road rig"
        fuelCapacity = {220}
        dlc = {false}
      />
      <Vehicle
        name = "AZOV 64131"
        profilePicPath = "./src/assets/vehicles/azov-64131.jpg"
        description = "Slow but incredibly powerful and stable off-road unit"
        fuelCapacity = {380}
        dlc = {false}
      />
      <Vehicle
        name = "Freightliner 114SD"
        profilePicPath = "./src/assets/vehicles/freightliner-114sd.jpg"
        description = "Popular heavy duty hauler"
        fuelCapacity = {200}
        dlc = {false}
      />
      <Vehicle
        name = "Freightliner M916A1"
        profilePicPath = "./src/assets/vehicles/freightliner-m916a1.jpg"
        description = "Dependable logging rig"
        fuelCapacity = {200}
        dlc = {false}
      />
      <Vehicle
        name = "International Paystar 5070"
        profilePicPath = "./src/assets/vehicles/international-paystar-5070.jpg"
        description = "Versatile, responsive off-road rig"
        fuelCapacity = {220}
        dlc = {false}
      />
      <Vehicle
        name = "Royal BM17"
        profilePicPath = "./src/assets/vehicles/royal-bm17.jpg"
        description = "Powerful off-road truck"
        fuelCapacity = {380}
        dlc = {false}
      />
  </div>
  )
}

export default TruckGrid;