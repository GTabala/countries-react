import React from "react";

import "./App.css";
// import Header from "./Header";
import AllCountries from "./countriesAll.json";
import ShowCountries from "./ShowCountries";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <ShowCountries datas={AllCountries} />
    </div>
  );
}

export default App;
