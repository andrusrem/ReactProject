import React, { useState } from "react";
import "./Header.css"; // Import the CSS file for styling
import "./Logo.css";

//Translation for header content
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

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

        {/* Language Switcher */}
        <div className="language-switcher">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="et">Eesti</option>
            <option value="ru">Русский</option>
          </select>
        </div>

        {/* Book Button */}
        <button className="book-button">{translations[language].book}</button>
      </div>

      {/* Expanded Menu (when menu is open) */}
      {menuOpen && (
        <nav className="nav-menu">
          <ul>
            <li>{translations[language].home}</li>
            <li>{translations[language].activities}</li>
            <li>{translations[language].accommodation}</li>
            <li>{translations[language].contact}</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
