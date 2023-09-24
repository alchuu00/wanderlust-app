import React, { useState, useEffect } from "react";
import "./App.css";
import WorldMap from "react-svg-worldmap";
import countryCodes from "./countryCodes.json";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const data = countryCodes;

  const handleCountryClick = ({ countryCode }) => {
    setSelectedCountry(countryCode);

    // Check if the country is already in the visited list
    const countryIndex = visitedCountries.indexOf(countryCode);

    if (countryIndex !== -1) {
      // Country is already visited, remove it from the list
      const updatedVisitedCountries = [...visitedCountries];
      updatedVisitedCountries.splice(countryIndex, 1);
      setVisitedCountries(updatedVisitedCountries);
    } else {
      // Country is not visited, add it to the list
      setVisitedCountries((prevVisitedCountries) => [
        ...prevVisitedCountries,
        countryCode,
      ]);
    }
  };

  const getStyle = ({
    countryValue,
    countryCode,
    minValue,
    maxValue,
    color,
  }) => {
    const isVisited = visitedCountries.includes(countryCode);

    if (isVisited) {
      console.log(`${countryCode} is visited`);
    }
    
    return {
      fill: isVisited ? "blue" : "white",  // Change the fill color based on visited status
      stroke: "black",
      strokeWidth: 2,
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };

  // console log the selected country
  useEffect(() => {
    if (selectedCountry) {
      console.log(selectedCountry);
    }
  }, [selectedCountry]);

  return (
    <div classCodecountryCode="App">
      <div classCodecountryCode="flex w-screen">
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
          {visitedCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
