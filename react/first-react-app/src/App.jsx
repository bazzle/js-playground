import Header from "./header.jsx"
import Footer from "./footer.jsx"
import TruckGrid from "./truckGrid.jsx"
import Button from "./button/button.jsx"
import ButtonInline from "./button-inline.jsx"
import UserGreeting from "./user-greeting.jsx"
import ListBuilder from "./list-builder.jsx"

function App() {

  const truckTypesList = [
    {
      ID : 1,
      name : "Scout",
      about : "Small fast trucks that can travel long distances and get to difficult places",
      count : 13
    },
    {
      ID : 2,
      name : "Highway",
      about : "Trucks optimised for tarmac and packed dirt. Not lacking in power and often fast",
      count : 7
    },
    {
      ID : 3,
      name : "Off-road",
      about : "Small to medium size rigs with enough ground clearance and tyre choices to navigate extreme mud and swamps",
      count : 16
    },
    {
      ID : 4,
      name : "Heavy Duty",
      about : "Large rigs, lightweight enough for impressive performance, enough torque for medium loads",
      count : 9
    },
    {
      ID : 5,
      name : "Heavy",
      about : "Large rigs that are often slow but powerful enough to haul the biggest and heaviest loads",
      count : 24
    }
  ];

  return (
    <>
        <Header/>
        <UserGreeting
          isLoggedIn = {true}
          userName = 'Bazzle'
        />
        <TruckGrid/>
        <Button/>
        <ButtonInline/>
        <ListBuilder
          items = {truckTypesList}
        />
        <Footer/>
    </>

  )

}

export default App