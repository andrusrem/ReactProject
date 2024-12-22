import React from "react";
import "./Button.css";

import { useLanguage } from "../LanguageContext"; 


// Translation for header content
const translations = {
    en: {
      book: "Book",
    },
    et: {
      book: "Broneeri",
    },
    ru: {
      book: "Бронь",
    },
    fin: {
      book: "Varaa",
  },
  };
const BookButton = () => {
    const { language } = useLanguage();
    return (
        <div className="small-screen-button-container">
            <button className="small-screen-button">{translations[language].book}</button>
        </div>
        
    )
}

export default BookButton;