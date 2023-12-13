import React from "react";
import "../styles/search-and-select.css";

const SearchAndSelect = ({
  darkMode,
  setSearchCountry,
  setCountries,
  searchCountry,
  showOptions,
  setShowOptions,
  data,
}) => {
  return (
    <section className="search-and-select">
      <input
        type="text"
        className="search-and-select__search"
        placeholder="Search for a country..."
        style={{
          backgroundColor: darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
          color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)",
        }}
        onChange={(e) => {
          setSearchCountry(e.target.value);
          if (e.target.value.length !== 0) {
            const filtered = data.filter(
              (item) =>
                item.name.toLowerCase().slice(0, e.target.value.length) ===
                e.target.value.toLowerCase()
            );
            setCountries(filtered);
          } else setCountries(data);
        }}
        value={searchCountry}
      />

      <div className="search-and-select__select">
        <button
          style={{
            backgroundColor: darkMode
              ? "hsl(209, 23%, 22%)"
              : "hsl(0, 0%, 100%)",
            color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          }}
          className="search-and-select__select__button"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          Filter by Region
        </button>

        <div
          className="search-and-select__select__options"
          style={{
            backgroundColor: darkMode
              ? "hsl(209, 23%, 22%)"
              : "hsl(0, 0%, 100%)",
            color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          }}
          // eslint-disable-next-line
          role="dropdown-menu"
          hidden={showOptions ? false : true}
          aria-hidden={showOptions ? false : true}
        >
          <button
            className="search-and-select__select__options__button"
            onClick={() => {
              const filtered = data.filter((item) => item.region === "Africa");
              setCountries(filtered);
              setShowOptions(false);
            }}
          >
            Africa
          </button>
          <button
            className="search-and-select__select__options__button"
            onClick={() => {
              const filtered = data.filter(
                (item) => item.region === "Americas"
              );
              setCountries(filtered);
              setShowOptions(false);
            }}
          >
            America
          </button>
          <button
            className="search-and-select__select__options__button"
            onClick={() => {
              const filtered = data.filter((item) => item.region === "Asia");
              setCountries(filtered);
              setShowOptions(false);
            }}
          >
            Asia
          </button>
          <button
            className="search-and-select__select__options__button"
            onClick={() => {
              const filtered = data.filter((item) => item.region === "Europe");
              setCountries(filtered);
              setShowOptions(false);
            }}
          >
            Europe
          </button>
          <button
            className="search-and-select__select__options__button"
            onClick={() => {
              const filtered = data.filter((item) => item.region === "Oceania");
              setCountries(filtered);
              setShowOptions(false);
            }}
          >
            Oceania
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchAndSelect;
