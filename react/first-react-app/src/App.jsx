import Header from "./header.jsx"
import Footer from "./footer.jsx"
import TruckGrid from "./truck-grid.jsx"
import Button from "./button/button.jsx"
import ButtonInline from "./button-inline.jsx"
import UserGreeting from "./user-greeting.jsx"
import TruckTypes from "./truck-types.jsx"
import Regions from "./regions.jsx"
import ProfileImage from "./profile-image.jsx"
import MyStateComponent from "./useState-hook.jsx"
import Counter from "./counter.jsx"
import MyForm from "./my-form.jsx"
import ColorPicker from "./color-picker.jsx"
import TruckCategories from "./truck-categories.jsx"
import FaveTruck from "./fave-truck.jsx"
import FaveRegion from "./fave-region.jsx"
import TruckMaker from "./truck-maker.jsx"
import TodoList from "./todolist.jsx"

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
        <ProfileImage/>
        <MyStateComponent/>
        <Counter />
        <MyForm />
        <ColorPicker/>
        <TruckCategories/>
        <FaveTruck/>
		<FaveRegion/>
		<TruckMaker/>
		<TodoList/>

        <Footer/>
    </>
  )

}

export default App