import React from 'react'
function Allcountries({ eachCountry, setSelectedCountry }) {
  
  return (
    <div className="col-xl-3" >
      <div
        onClick={() => {
          console.log(eachCountry);

          setSelectedCountry(eachCountry);
        }}
        className="card mt-5 m-2 "
        style={{ height:340,width:274 ,cursor:"pointer"}}
      >
        <img
          src={eachCountry.flag}
          style={{ height: 160 }}
          className="card-img-top"
          alt="country-flag"
        />
        <div className="card-body text-center">
          <h5 className="card-title text-left">{eachCountry.name}</h5>
          <p className="card-text text-left">
            Population : {eachCountry.population.toLocaleString()}
          </p>
          <p className="card-text text-left"> Region : {eachCountry.region}</p>
          <p className="card-text text-left">Capital : {eachCountry.capital}</p>
        </div>
      </div>
    </div>
  );
}
export default Allcountries;