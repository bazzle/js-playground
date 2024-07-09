import Header from "./header.jsx"
import Footer from "./footer.jsx"
import TruckGrid from "./truckGrid.jsx"
import Button from "./button/button.jsx"
import ButtonInline from "./button-inline.jsx"
import UserGreeting from "./user-greeting.jsx"
import TruckTypes from "./truckTypes.jsx"
import Regions from "./regions.jsx"

function App() {

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
        <TruckTypes/>
        <Regions/>
        <Footer/>
    </>
  )

}

export default App