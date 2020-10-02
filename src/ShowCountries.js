import React from "react";

import "./App.css";

function ShowCountries({ data }) {
  const convertNumber = (numberToConvert) => {
    let arrNumberToConvert = String(numberToConvert).split("");

    let result = "";

    for (let i = 1; i < arrNumberToConvert.length; i++) {
      result =
        (i % 3 ? "" : ",") +
        arrNumberToConvert[arrNumberToConvert.length - i] +
        result;
    }
    return arrNumberToConvert[0] + result;
    // let strNumberToConvert = String(numberToConvert);
    // let result = [];
    // let i = Math.floor(strNumberToConvert.length / 3);

    // for (i; i >= 1; i--) {
    //   console.log(i);

    //   result.unshift(strNumberToConvert.slice(-3));

    //   strNumberToConvert = strNumberToConvert.slice(0, -3);
    // }
    // if (strNumberToConvert.length) {
    //   result.unshift(strNumberToConvert.slice(-3));
    // }
    // console.log(result);
    // return result.join(",");
  };
  return (
    <div className="countries">
      {data.map((data) => {
        return (
          <div className="country">
            <img src={data.flag} alt="" />
            <h4>{data.name}</h4>
            <h5>Population: {convertNumber(data.population)}</h5>
            <h5>Region: {data.region} </h5>
            <h5>Capital: {data.capital}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default ShowCountries;
