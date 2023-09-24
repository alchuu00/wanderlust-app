import React, { useState, useEffect } from "react";
import "./App.css";
import WorldMap from "react-svg-worldmap";
import countryCodes from "./countryCodes.json";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const data = countryCodes;

  const handleCountryClick = ({ countryName }) => {
    setSelectedCountry(countryName);

    // Check if the country is already in the visited list
    const countryIndex = visitedCountries.indexOf(countryName);

    if (countryIndex !== -1) {
      // Country is already visited, remove it from the list
      const updatedVisitedCountries = [...visitedCountries];
      updatedVisitedCountries.splice(countryIndex, 1);
      setVisitedCountries(updatedVisitedCountries);
    } else {
      // Country is not visited, add it to the list
      setVisitedCountries(prevVisitedCountries => [...prevVisitedCountries, countryName]);
    }
  };

  // console log the selected country
  useEffect(() => {
    if (selectedCountry) {
      console.log(selectedCountry);
    }
  }, [selectedCountry]);

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
      <div>
        <p>Visited countries:</p>
        <ul>
          {visitedCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
