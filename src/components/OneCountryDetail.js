import React from "react";
function OneCountryDetail({ country, goBack, goToCountryByCode }) {
  return (
    <div>
      <button onClick={goBack}>home</button>
      <h5> {country.name} </h5>
      {country.borders &&
        country.borders.map((countryCode) => (
          <button
            onClick={() => {
              goToCountryByCode(countryCode);
            }}
          >
            {countryCode}
          </button>
        ))}
    </div>
  );
}

export default OneCountryDetail;
