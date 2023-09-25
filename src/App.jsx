import React, { useState, useEffect } from "react";
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

    // Create a list of visited country codes
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

    // Create a list of visited country names
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

  const getStyle = ({ countryCode }) => {
    const isVisited = visitedCountriesCodes.includes(countryCode);
    return {
      fill: isVisited ? "lightblue" : "white",
      stroke: "black",
      strokeWidth: 2,
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };

  // Calculate the percentages and total number of countries
  const visitedCountries = visitedCountriesCodes.length;
  const percentageVisited = (visitedCountries / 195) * 100;

  return (
    <div className="App">
      <div className="w-screen h-screen flex justify-between p-10">
        <div className="w-1/4 flex flex-col bg-gray-200 overflow-auto">
          <div>Visited Countries:</div>
          <ul className="flex flex-col justify-start items-start">
            {visitedCountriesNames.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center w-3/4">
          <WorldMap
            color="white"
            size="xl"
            data={data}
            backgroundColor=""
            onClickFunction={handleCountryClick}
            styleFunction={getStyle}
          />
        </div>
        <div className="absolute bottom-10 left-1/3">
          <div>
            {percentageVisited.toFixed(1)}%
          </div>
          <div>{visitedCountries} / 195</div>
        </div>
      </div>
    </div>
  );
}

export default App;
