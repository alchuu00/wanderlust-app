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
      <div className="text-white w-screen h-screen flex justify-between p-10 bg-gradient-to-t from-blue-500 via-purple-400 to-purple-400">
        <div className="w-1/4 flex flex-col items-center bg-white bg-opacity-30 overflow-auto overflow-y-scroll rounded-lg p-5">
          <div className="text-xl p-5 w-72 rounded-lg text-center">
            <p>Visited Countries:</p>
          </div>
          <ul className="flex flex-col justify-start items-start">
            {visitedCountriesNames.map((country, index) => (
              <li key={index} className="bg-white bg-opacity-30 p-2 my-2 w-72 rounded-lg text-center">{country}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col text-xl justify-center items-center w-3/4">
          <div className="bg-white bg-opacity-30 px-10 py-2 rounded-lg">Click on a country to mark it as visited!
          </div>
          <WorldMap
            color="white"
            size="xl"
            data={data}
            backgroundColor=""
            onClickFunction={handleCountryClick}
            styleFunction={getStyle}
          />
        </div>
        <div className="flex flex-col text-xl absolute bottom-10 left-1/3 gap-2">
          <div className="bg-white bg-opacity-30 px-5 py-2 rounded-lg">{percentageVisited.toFixed(1)}%</div>
          <div className="bg-white bg-opacity-30 px-5 py-2 rounded-lg">{visitedCountries} / 195</div>
        </div>
      </div>
    </div>
  );
}

export default App;
