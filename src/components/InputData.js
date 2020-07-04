import React from "react";

function InputData({ searchCountry, setSearchCountry }) {
  return (
    <input
      value={searchCountry}
      onChange={(e) => {
        setSearchCountry(e.target.value);
      }}
    />
  );
}
export default InputData;
