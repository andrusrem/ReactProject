import React from "react";
import "./Footer.css";
import "./Logo.css";

const Footer = () => {
    return (
        <footer className="footer sticky">
            <div className="footer-container">
                {/* Navigation Section */}
                <div className="footer-section navigation">
                    <div className="logo-container">
                        <div className="circle"></div>
                        <div className="letter">A<sup>2</sup></div>
                    </div>
                    <div className="navigation-container"><h3>Navigation</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/activities">Activities</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="footer-section contact">
                    <h3>Contact</h3>
                    <p><strong>Fortuzen OÜ</strong></p>
                    <a href="mailto:fortuzenou@gmail.com">fortuzenou@gmail.com</a>
                </div>

                {/* Social Media Section */}
                <div className="footer-section social-media">
                    <h3>Social Media</h3>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon">📷</div>
                    </a>
                </div>

                {/* Book Button */}
                <div className="footer-section book">
                    <button className="book-button">Book</button>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; Copyright 2024 - Made by andrusrem</p>
            </div>
        </footer>
    );
};

export default Footer;
