import React, { useState, useEffect } from "react";
import "./App.css";
import WorldMap from "react-svg-worldmap";
import countryCodes from "./countryCodes.json";

function App() {
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [selectedCountryName, setSelectedCountryName] = useState(null);
  const [visitedCountriesCodes, setVisitedCountriesCodes] = useState([]);
  const [visitedCountriesNames, setVisitedCountriesNames] = useState([]);

  const data = countryCodes;

  const handleCountryClick = ({ countryCode, countryName }) => {
    setSelectedCountryCode(countryCode);
    setSelectedCountryName(countryName);

    // Check if the country is already in the visited list
    const countryIndex = visitedCountriesCodes.indexOf(countryCode);

    if (countryIndex !== -1) {
      // Country is already visited, remove it from the list
      const updatedVisitedCountriesCodes = [...visitedCountriesCodes];
      updatedVisitedCountriesCodes.splice(countryIndex, 1);
      setVisitedCountriesCodes(updatedVisitedCountriesCodes);
    } else {
      // Country is not visited, add it to the list
      setVisitedCountriesCodes((prevVisitedCountries) => [
        ...prevVisitedCountries,
        countryCode,
      ]);
    }

  if (countryIndex !== -1) {
    // Country is already visited, remove it from the list
    const updatedVisitedCountriesNames = [...visitedCountriesNames];
    updatedVisitedCountriesNames.splice(countryIndex, 1);
    setVisitedCountriesNames(updatedVisitedCountriesNames);
  } else {
    // Country is not visited, add it to the list
    setVisitedCountriesNames((prevVisitedCountries) => [
      ...prevVisitedCountries,
      countryName,
    ]);
  }
};

  const getStyle = ({
    countryCode,
  }) => {
    const isVisited = visitedCountriesCodes.includes(countryCode);

    if (isVisited) {
      console.log(`${countryCode} is visited`);
    }
    
    return {
      fill: isVisited ? "green" : "white",  // Change the fill color based on visited status
      stroke: "black",
      strokeWidth: 2,
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };

  // console log the selected country
  useEffect(() => {
    if (selectedCountryCode) {
      console.log(selectedCountryCode, selectedCountryName);
    }
  }, [selectedCountryCode, selectedCountryName]);

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
          styleFunction={getStyle}
        />
      </div>
      <div>
        <p>Visited countries:</p>
        <ul>
          {visitedCountriesNames.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
