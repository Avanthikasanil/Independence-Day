import React from "react";
import './NaveBar.css';
import Flag from './images/flah.jpeg';



function NaveBar() {
    return (
        <>
            <div className="nav">
                <img src={Flag} alt="indian flag" />
                <h1>HAPPY INDEPENDENCE DAY</h1>
                <div className="nav-list">
                    <a href="#home">Home</a>
                    <a href="#events">Events</a>
                    <a href="#theme">Theme</a>
                    <a href="#about">About Us</a>
                </div>
            </div>
        </>

    );
}
export default NaveBar;