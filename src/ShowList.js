import React from "react";

const ShowList = ({dataArray, title}) => {

  return (
    <div>{title}
    <ul>
        {dataArray.map(item => <li key={item.name}>{item.name}</li>)}
    </ul>

    </div>
  );
};

export default ShowList;