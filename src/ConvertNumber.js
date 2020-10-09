import React from "react";

const ConvertNumber = ({numberToConvert}) => {
    let arrNumberToConvert = String(numberToConvert).split("");

    let result = "";

    for (let i = 1; i < arrNumberToConvert.length; i++) {
      result =
        (i % 3 ? "" : ",") +
        arrNumberToConvert[arrNumberToConvert.length - i] +
        result;
    }
    
  return (
    <span>
        {arrNumberToConvert[0] + result}
    </span>
  );
};

export default ConvertNumber;