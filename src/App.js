import { defaultCountry } from "./defaulCountry";
import React from "react";
import Header from "./components/Header";
import SearchAndSelect from "./components/SearchAndSelect";
import CountriesGrid from "./components/CountriesGrid";
import Modal from "./components/Modal";

import data from "./data.json";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [countries, setCountries] = useState(data);
  const [showOptions, setShowOptions] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(defaultCountry);
  const [showModal, setShowModal] = useState(false);
  const [searchCountry, setSearchCountry] = useState("");

  document.getElementsByTagName("body")[0].style.backgroundColor = darkMode
    ? "hsl(207, 26%, 17%)"
    : "hsl(0, 0%, 98%)";

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {showModal === false && (
        <>
          <SearchAndSelect
            darkMode={darkMode}
            setSearchCountry={setSearchCountry}
            setCountries={setCountries}
            searchCountry={searchCountry}
            showOptions={showOptions}
            setShowOptions={setShowOptions}
            data={data}
            setCurrentCountry={setCurrentCountry}
          />

          <CountriesGrid
            countries={countries}
            darkMode={darkMode}
            setCurrentCountry={setCurrentCountry}
            setShowModal={setShowModal}
          />
        </>
      )}

      {showModal && (
        <Modal
          darkMode={darkMode}
          setShowModal={setShowModal}
          currentCountry={currentCountry}
          data={data}
        />
      )}
    </div>
  );
};

export default App;
