import React, { useState } from "react";
import "./App.css";
import WorldMap from "react-svg-worldmap";
import countryCodes from "./countryCodes.json";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const data = countryCodes;

  const handleCountryClick = ({ countryName, countryCode, countryValue }) => {
    setSelectedCountry(countryName);
    console.log(selectedCountry);
  };

  return (
    <div className="App">
      <div className="flex w-screen">
        <WorldMap
          color="white"
          title="Click on a country to mark it as visited!"
          size="xxl"
          data={data}
          backgroundColor=""
          onClickFunction={handleCountryClick}
        />
      </div>
    </div>
  );
}

export default App;
