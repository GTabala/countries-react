import React from "react";

import "./App.css";

function Header({setColorMode, colorMode}) {
  return <header className="App-header">Where in the world
  <button id="lightMode" onClick={setColorMode} className={colorMode ? "day":"night"} >{colorMode ? "Day":"Night"}</button></header>;
}

export default Header;
