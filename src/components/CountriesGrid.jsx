import React from "react";
import "../styles/countries-grid.css";

const CountriesGrid = ({
  countries,
  darkMode,
  setCurrentCountry,
  setShowModal,
}) => {
  return (
    <main className="countries-grid">
      {countries.map((country) => {
        return (
          <button
            className="countries-grid__button"
            key={country.name + country.population + country.alpha3Code}
            style={{
              backgroundColor: darkMode
                ? "hsl(209, 23%, 22%)"
                : "hsl(0, 0%, 100%)",
              color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
            }}
            onClick={() => {
              setCurrentCountry(country);
              setShowModal(true);
            }}
          >
            <img
              src={country.flags.png}
              alt={country.name + "'s flag"}
              className="countries-grid__flag"
            />

            <div>
              <p className="countries-grid__name">{country.name}</p>

              <p className="countries-grid__infos">
                <span>Population: </span>
                <span>{country.population.toLocaleString()}</span>
              </p>

              <p className="countries-grid__infos">
                <span>Region: </span>
                <span>{country.region}</span>
              </p>

              {country.hasOwnProperty("capital") && (
                <p className="countries-grid__infos">
                  <span>Capital: </span>
                  <span>{country.capital}</span>
                </p>
              )}
            </div>
          </button>
        );
      })}
    </main>
  );
};

export default CountriesGrid;
