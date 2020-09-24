import React from "react";

import "./App.css";

function ShowCountries({datas}) {
  return (
 
        <div className="countries">
      {datas.map((data) => {
          return (
              <div className="country">
                
          <img src = {data.flag} alt=""/>
           <h4>{data.name}</h4>
          <h5>Population: {data.population}</h5>
          <h5>Region: {data.region} </h5>
        <h5>Capital: {data.capital}</h5>
        </div>)
})}
    </div>
  
  )
}

export default ShowCountries;
