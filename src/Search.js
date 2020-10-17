import React from "react";

const Search = ({ filterCountry, filterByRegion, regionArr, showDetail, setShowDetail, colorMode }) => {

  const goBack = () => {
    setShowDetail(false);
  };

  return (
    <form className={colorMode ? "form allNight":"form"}>

      <input
        type="text"
        id="chooseName"
        className="form-control"
        placeholder="Search for a country"
        onChange={filterCountry}
      />

      {showDetail && <button onClick={goBack}>Back</button> }

      <select onChange={filterByRegion} className="form-control">
        <option value="">Filter by Region</option>
        {regionArr.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>

    </form>
  );
};

export default Search;
