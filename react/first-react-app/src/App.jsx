import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Vehicle from "./vehicle.jsx"
import Button from "./button/button.jsx"
import ButtonInline from "./button-inline.jsx"

function App() {

  return (
    <>
        <Header/>
        <div className="container">
          <Vehicle
            name="ANK MK38 Civilian" 
            description="Fast, powerful off-road hacker. Can take on anything"
            fuelCapacity = {200}
            dlc = {false}
          />
          <Vehicle/>
        </div>
        <Button/>
        <ButtonInline/>
        <Footer/>
    </>

  )

}

export default App