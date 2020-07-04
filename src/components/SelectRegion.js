import React from 'react'

function SelectRegion({ selectedRegion, setSelectedRegion }) {
  
  return (
    <select
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}>
      <option value="all">filter by region</option>
      <option value="Asia"> Asia</option>
      <option value="Africa"> Africa</option>
      <option value="Americas"> America</option>
      <option value="Europe"> Europe</option>
      <option value="Oceania"> Oceania</option>
    </select>
  );
}

export default SelectRegion