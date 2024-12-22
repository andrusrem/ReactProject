import React from "react";
import { useLanguage } from "../LanguageContext"; // Import the useLanguage hook
import "./Footer.css";
import "./Logo.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language } = useLanguage(); // Get the current language from context

  // Language content for different languages
  const content = {
    en: {
      navigation: "Navigation",
      home: "Home",
      activities: "Activities",
      accommodation: "Accommodation",
      privacyPolicy: "Privacy Policy",
      contact: "Contact",
      company: "Fortuzen OÜ",
      email: "fortuzenou@gmail.com",
      socialMedia: "Social Media",
      instagram: "Instagram",
      bookButton: "Book",
      copyright: "Copyright 2024 - Made by andrusrem"
    },
    et: {
      navigation: "Navigeerimine",
      home: "Kodu",
      activities: "Tegevused",
      accommodation: "Majutus",
      privacyPolicy: "Privaatsuspoliitika",
      contact: "Kontakt",
      company: "Fortuzen OÜ",
      email: "fortuzenou@gmail.com",
      socialMedia: "Sotsiaalmeedia",
      instagram: "Instagram",
      bookButton: "Broneeri",
      copyright: "Autoriõigus 2024 - Tehtud andrusrem poolt"
    },
    ru: {
      navigation: "Навигация",
      home: "Главная",
      activities: "Деятельности",
      accommodation: "Размещение",
      privacyPolicy: "Политика конфиденциальности",
      contact: "Контакт",
      company: "Fortuzen OÜ",
      email: "fortuzenou@gmail.com",
      socialMedia: "Социальные сети",
      instagram: "Instagram",
      bookButton: "Бронь",
      copyright: "Авторские права 2024 - Сделано andrusrem"
    },
    fin: {
      navigation: "Navigointi",
      home: "Etusivu",
      activities: "Aktiviteetit",
      accommodation: "Majoitus",
      privacyPolicy: "Tietosuojakäytäntö",
      contact: "Yhteystiedot",
      company: "Fortuzen OÜ",
      email: "fortuzenou@gmail.com",
      socialMedia: "Sosiaalinen media",
      instagram: "Instagram",
      bookButton: "Varaa",
      copyright: "Tekijänoikeus 2024 - Tehnyt andrusrem"
  },
  };

  return (
    <footer className="footer sticky">
      <div className="footer-container">
        {/* Navigation Section */}
        <div className="footer-section">
          <div className="logo-container">
            <div className="circle"></div>
            <div className="letter">A<sup>2</sup></div>
          </div>
          <div className="navigation-container">
            <h3>{content[language].navigation}</h3>
            <ul>
              <li><Link to="/">{content[language].home}</Link></li>
              <li><Link to="/activities">{content[language].activities}</Link></li>
              <li><Link to="/accommodations">{content[language].accommodation}</Link></li>
              <li><Link to="/contact">{content[language].contact}</Link></li>
              <li><Link to="/privacy-policy">{content[language].privacyPolicy}</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="contact">
            <h3>{content[language].contact}</h3>
            <p><strong>{content[language].company}</strong></p>
            <a href={`mailto:${content[language].email}`}>{content[language].email}</a>
          </div>

          {/* Social Media Section */}
          <div className="social-media">
            <h3>{content[language].socialMedia}</h3>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <h3 className="social-icon">📷 {content[language].instagram}</h3>
            </a>
          </div>

          {/* Book Button */}
          <div className="book">
            <button className="book-button">{content[language].bookButton}</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {content[language].copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
