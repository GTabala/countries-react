import React, { useState } from "react";

import "./App.css";
import Header from "./Header";
import AllCountries from "./countriesAll.json";
import ShowCountries from "./ShowCountries";
import Search from "./Search";

function App() {
  const [countryList, setCountryList] = useState(AllCountries);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const filterCountry = (e) => {
    setCountryList(
      AllCountries.filter(
        (item) =>
          (item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.capital
              .toLowerCase()
              .includes(e.target.value.toLowerCase())) &&
          (region ? item.region === region : true)
      )
    );
    setSearch(e.target.value.toLowerCase());
  };

  const filterByRegion = (e) => {
    console.log(e.target.value);
    setCountryList(
      AllCountries.filter(
        (item) =>
          (item.name.toLowerCase().includes(search) ||
            item.capital.toLowerCase().includes(search)) &&
          (e.target.value ? item.region === e.target.value : true)
      )
    );
    setRegion(e.target.value);
  };

  let mySet = new Set();
  AllCountries.forEach((item) => mySet.add(item.region));
  let regionArr = Array.from(mySet)
    .sort()
    .filter((item) => item);

  return (
    <div className="App">
      <Header />
      <Search
        filterCountry={filterCountry}
        filterByRegion={filterByRegion}
        regionArr={regionArr}
      />
      <ShowCountries data={countryList} />
    </div>
  );
}

export default App;
