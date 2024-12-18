import React, { useState } from "react";
import "./Header.css"; // Import the CSS file for styling
import "./Logo.css";

// Translation for header content
const translations = {
  en: {
    menu: "MENU",
    home: "Home",
    activities: "Activities",
    accommodation: "Accommodation",
    contact: "Contact",
    book: "Book",
    language: "EN",
  },
  et: {
    menu: "MENU",
    home: "Avaleht",
    activities: "Tegevused",
    accommodation: "Majutus",
    contact: "Kontakt",
    book: "Broneeri",
    language: "EE",
  },
  ru: {
    menu: "МЕНЮ",
    home: "Главная",
    activities: "Досуг",
    accommodation: "Размещение",
    contact: "Контакт",
    book: "Забронировать",
    language: "RU",
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "et", name: "Eesti" },
    { code: "ru", name: "Русский" },
  ];

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-top">
        {/* Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          <h2>{menuOpen ? "✕" : translations[language].menu}</h2>
        </button>

        {/* Logo */}
        <div className="logo-container">
          <div className="circle"></div>
          <div className="letter">A<sup>2</sup></div>
        </div>

        {/* Language and Book */}
        <div className="lang-book">
          {/* Custom Language Switcher */}
          <div className="custom-dropdown">
            <div
              className="dropdown-header"
              onClick={toggleDropdown}
            >
              {languages.find((lang) => lang.code === language)?.name}
            </div>

            {dropdownOpen && (
              <ul className="dropdown-list">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`dropdown-item ${
                      lang.code === language ? "selected" : ""
                    }`}
                  >
                    {lang.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Book Button */}
          <button className="book-button">
            {translations[language].book}
          </button>
        </div>
      </div>

      {/* Expanded Menu */}
      {menuOpen && (
        <nav className="nav-menu">
          <div className="nav-menu-div">
            <ul>
              <li><p>{translations[language].home}</p></li>
              <li><p>{translations[language].activities}</p></li>
              <li><p>{translations[language].accommodation}</p></li>
              <li><p>{translations[language].contact}</p></li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
