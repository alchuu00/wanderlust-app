import { useState } from 'react';
import './App.css';
import { WorldMap } from 'world-svg';
import countryCodesToNames from "./countryCodesToNames.json";

function App() {
  const [selectedCountryName, setSelectedCountryName] = useState(null);

  const handleCountryClick = (countryId) => {
    if (countryCodesToNames.hasOwnProperty(countryId)) {
      setSelectedCountryName(countryCodesToNames[countryId]);
    } else {
      setSelectedCountryName("Country not found");
    }
  }

  return (
    <>
    <div className='p-10'>{selectedCountryName
          ? selectedCountryName
          : "Click on a country to display it's name!"}</div>
      
      <WorldMap tooltip={"off"} onCountryClick={handleCountryClick} landColor={"#ffffff"} hoverColor={"#3881ff"} />
    </>
  );
}

export default App;
