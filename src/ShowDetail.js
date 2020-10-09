import React from "react";
import ConvertNumber from "./ConvertNumber";

const ShowDetail = ({showDetailCountry, showMore}) => {

  const showNeighbour = (e) => {
    showMore(e.target.innerText);
  };

  return (
    <div className="countries">

    <div className="country" >
            <img src={showDetailCountry.flag} alt="" />
            <h4>{showDetailCountry.name}</h4>
            <h5>Population: <ConvertNumber numberToConvert={showDetailCountry.population} /></h5>
            <h5>Region: {showDetailCountry.region} </h5>
            <h5>Capital: {showDetailCountry.capital}</h5>
            <ul>
              {showDetailCountry.borders.map(item => <li onClick={showNeighbour} className="listItem">{item}</li>)}
            </ul>
          </div>
   </div>
  );
};

export default ShowDetail;