import React, { useState } from 'react';
import './App.css';
import { WorldMap } from 'world-svg';
import countryCodesToNames from "./countryCodesToNames.json";

function App() {
  const [selectedCountryName, setSelectedCountryName] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleCountryClick = (countryId) => {
    if (countryCodesToNames.hasOwnProperty(countryId)) {
      const countryName = countryCodesToNames[countryId];
      setSelectedCountryName(countryName);
      toggleVisited(countryName);
    } else {
      setSelectedCountryName("Country not found");
    }
  }

  const toggleVisited = (countryName) => {
    if (visitedCountries.includes(countryName)) {
      setVisitedCountries(visitedCountries.filter(country => country !== countryName));
    } else {
      setVisitedCountries([...visitedCountries, countryName]);
    }
  }

  return (
    <>
      <div className='p-5'>{selectedCountryName
        ? selectedCountryName
        : "Click on a country to display its name!"}</div>

      <WorldMap
        tooltip={"off"}
        onCountryClick={handleCountryClick}
        landColor={"#ffffff"}
        hoverColor={"#3881ff"}
        countryClassName={(country) =>
          visitedCountries.includes(country.name) ? "visited" : ""
        }
      />

      <div>
        <h3>Visited Countries:</h3>
        <ul>
          {visitedCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
