import React, { useState } from "react";
import './NaveBar.css';
import Flag from './images/flah.jpeg';

function NaveBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="nav">
                <img src={Flag} alt="indian flag" />
                <h1>HAPPY INDEPENDENCE DAY</h1>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                {/* Nav Links */}
                <div className={`nav-list ${menuOpen ? "active" : ""}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
                    <a href="#theme" onClick={() => setMenuOpen(false)}>Theme</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
                </div>
            </div>
        </>
    );
}

export default NaveBar;
