import React from "react";
import ConvertNumber from "./ConvertNumber";
import ShowList from "./ShowList";

const ShowDetail = ({showDetailCountry, showMore, allCountries}) => {

  const showNeighbour = (e) => {
    console.log(e.target.key);
    console.log(e.target.alt);
    showMore(e.target.innerText ? e.target.innerText:e.target.alt);
  };
let borderCountry = allCountries.filter(item => showDetailCountry.borders.includes(item.alpha3Code));
  return (
    <div className="countries">

    <div className="countryDetail" >
            <img src={showDetailCountry.flag} alt="" />
            <h4>{showDetailCountry.name}</h4>
            <h5>Population: <ConvertNumber numberToConvert={showDetailCountry.population} /></h5>
            <h5>Region: {showDetailCountry.region} </h5>
            <h5>Capital: {showDetailCountry.capital}</h5>
            <ShowList dataArray={showDetailCountry.languages} title="Languages:" />
            <ShowList dataArray={showDetailCountry.currencies} title="Currencies:" />
            <ul>
              {borderCountry.map(item => <li onClick={showNeighbour} className="listItem" key={item.alpha3Code}><img src={item.flag} className="smallFlag" alt={item.name} />{item.name}</li>)}
            </ul>
          </div>
   </div>
  );
};

export default ShowDetail;