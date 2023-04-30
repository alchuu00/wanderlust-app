import './App.css'
import { WorldMap } from 'world-svg';

function App() {
  const handleCountryClick = (countryId) => {
    if (countryId === "US") {
      console.log("United states of america")
    }
  }

  return (
    <>
  <WorldMap tooltip={"on"} onCountryClick={handleCountryClick} landColor={"#ffffff"} hoverColor={"#3881ff"}/>
    </>
  )
}

export default App
