import React, { useState } from "react";
import "./Header.css";
import "./Logo.css";
import { useLanguage } from "../LanguageContext"; // Import useLanguage from LanguageContext
import { Link } from "react-router-dom";
import logo from './Logo_svg.svg';
import Home from "../Home";

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
    book: "Бронь",
    language: "RU",
  },
  fin: {
    menu: "VALIKKO",
    home: "Etusivu",
    activities: "Aktiviteetit",
    accommodation: "Majoitus",
    contact: "Yhteystiedot",
    book: "Varaa",
    language: "FIN",
},
};

const Header = () => {
  const { language, changeLanguage } = useLanguage(); // Use language from context
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang); // Change language in context
    setDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "et", name: "Eesti" },
    { code: "ru", name: "Русский" },
    { code: "fin", name: "Suomi" },
  ];

  return (
    <header className={`header ${menuOpen ? "menu-open pointer-events-auto" : "pointer-events-none"}`}>
      <div className="header-top">
        {/* Menu Button */}
        <button className="menu-button pointer-events-auto" onClick={toggleMenu} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          <h2>{menuOpen ? "✕" : translations[language].menu}</h2>
        </button>

        {/* Logo */}
        <div className="logo-container  pointer-events-auto m-auto md:w-10% xl:w-10% lg:w-10% justify-center">
          <Link className="w-80%" to='/' element={<Home/>}><img src={logo} alt="" className=""/></Link>
        </div>

        {/* Language and Book */}
        <div className="lang-book pointer-events-auto">
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
                    className={`dropdown-item ${lang.code === language ? "selected" : ""}`}
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
          <div className="nav-menu-div pointer-events-auto">
            <ul>
              <li><Link to="/">{translations[language].home}</Link></li>
              <li><Link to="/activities">{translations[language].activities}</Link></li>
              <li><Link to="/accommodations">{translations[language].accommodation}</Link></li>
              <li><Link to="/contact">{translations[language].contact}</Link></li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
