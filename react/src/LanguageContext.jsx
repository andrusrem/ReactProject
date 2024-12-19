import React, { createContext, useState, useContext } from "react";
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    // Function to change language
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="language-provider">
            <LanguageContext.Provider value={{ language, changeLanguage }}>
                {children}
            </LanguageContext.Provider>
        </div>

    );
};
