import React from "react";

const Search = ({ filterCountry, filterByRegion, regionArr }) => {
  return (
    <form className="form">
      <input
        type="text"
        id="chooseName"
        className="form-control"
        placeholder="Search for a country"
        onChange={filterCountry}
      />
      <select onChange={filterByRegion}>
        <option value="">Filter by Region</option>
        {regionArr.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </form>
  );
};

export default Search;
