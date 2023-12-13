import React from "react";
import "../styles/modal.css";

const Modal = ({ darkMode, setShowModal, currentCountry, data }) => {
  const getCurrenciesAndLanguages = (array) => {
    if (array.length === 1) return array[0].name;

    let currenciesString = "";

    for (let i = 0; i < array.length; i++) {
      if (currenciesString.length === 0) currenciesString += `${array[i].name}`;
      else currenciesString += `, ${array[i].name}`;
    }

    return currenciesString;
  };

  const getCountryFromCode = (alpha3code) => {
    for (let countries of data) {
      if (countries.alpha3Code === alpha3code) {
        return countries.name;
      }
    }
  };

  return (
    <main
      className="modal"
      style={{
        color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      }}
    >
      <button
        className="modal__close"
        style={{
          backgroundColor: darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
          color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
        }}
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </button>

      <div className="modal__country-details">
        <img
          src={currentCountry.flags.png}
          alt={`${currentCountry.name}'s flag`}
          className="modal__country-details__flag"
        />

        <div className="modal__country-details__infos">
          <h2 className="modal__country-details__infos__name">
            {currentCountry.name}
          </h2>

          <p>
            <span>
              <span>Native name: </span>
              <span>{currentCountry.nativeName}</span>
            </span>

            <span>
              <span>Top Level Domain: </span>
              <span>{currentCountry.topLevelDomain}</span>
            </span>
          </p>

          <p>
            <span>
              <span>Population: </span>
              <span>{currentCountry.population.toLocaleString()}</span>
            </span>

            {currentCountry.hasOwnProperty("currencies") && (
              <span>
                <span>Currencies: </span>
                <span>
                  {getCurrenciesAndLanguages(currentCountry.currencies)}
                </span>
              </span>
            )}
          </p>

          <p>
            <span>
              <span>Region: </span>
              <span>{currentCountry.region}</span>
            </span>

            <span>
              <span>Languages: </span>
              <span>{getCurrenciesAndLanguages(currentCountry.languages)}</span>
            </span>
          </p>

          <p>
            <span>Subregion: </span>
            <span>{currentCountry.subregion}</span>
          </p>

          {currentCountry.hasOwnProperty("capital") && (
            <p>
              <span>Capital: </span>
              <span>{currentCountry.capital}</span>
            </p>
          )}

          {currentCountry.hasOwnProperty("borders") && (
            <>
              <p>Border Countries: </p>

              <div className="modal__country-details__infos__border-countries">
                {currentCountry.borders.map((item) => (
                  <p
                    key={item}
                    style={{
                      backgroundColor: darkMode
                        ? "hsl(209, 23%, 22%)"
                        : "hsl(0, 0%, 98%)",
                      color: darkMode
                        ? "hsl(0, 0%, 100%)"
                        : "hsl(200, 15%, 8%)",
                    }}
                  >
                    {getCountryFromCode(item)}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Modal;
