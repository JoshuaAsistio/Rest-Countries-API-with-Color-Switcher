import React from "react";
import "../styles/header.css";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
        color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      }}
    >
      <h1 className="header__title">Where in the world?</h1>

      <button
        className="header__button"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
