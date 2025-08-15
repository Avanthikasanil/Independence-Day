import React from "react";
import './Footer.css';
import indianflag from './images/redfort.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={indianflag} alt="flag" />
            <div className="footer-content">
                <p>🇮🇳 78th Independence Day Celebration | 15th August 2025</p>
                <p>© 2025 Proudly made for India❤️ by Avanthika</p>
            </div>
        </footer>
    );
}

export default Footer;
