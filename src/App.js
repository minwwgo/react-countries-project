import React, { useState, useEffect } from "react";
import InputData from "./components/InputData";
import Allcountries from "./components/Allcountries";
import SelectRegion from "./components/SelectRegion";
import OneCountryDetail from "./components/OneCountryDetail";
function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(null);
  // let error = null
  // .catch((err) => {
  //   error = err;
  // });
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch(setError);
  }, []);
  if (error) {
    return (
      <div>
        <h2>Error </h2>
        {error.message}
      </div>
    );
  }

  const filteredData = countries
    .filter(
      (eachCountry) =>
        selectedRegion === "all" || eachCountry.region === selectedRegion
    )
    .filter(
      (eachCountry) =>
        eachCountry.name.toLowerCase().includes(searchCountry) ||
        eachCountry.capital.toLowerCase().includes(searchCountry)
    );
  // const setSelectedCountrybyCountryCode = (countryCode) => {
  //   setSelectedCountry(
  //     countries.find((country) => country.alpha3Code === countryCode)
  //   );
  // };
  //fetch with api
  const setSelectedCountrybyCountryCode = (countryCode) => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then((res) => res.json())
      .then(setSelectedCountry);
  };

  return (
    <div className="App ">
      <h1> Where in the world ? </h1>
      {selectedCountry ? (
        <OneCountryDetail
          goToCountryByCode={setSelectedCountrybyCountryCode}
          goBack={() => {
            setSelectedCountry(null);
          }}
          country={selectedCountry}
        />
      ) : (
        <div>
          <div>
            <InputData
              searchCountry={searchCountry}
              setSearchCountry={setSearchCountry}
            />
            <SelectRegion
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          </div>

          <div className="container-new">
            <div className="row">
              {filteredData.map((eachCountry) => (
                <Allcountries
                  key={eachCountry.alpha3Code}
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  eachCountry={eachCountry}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
