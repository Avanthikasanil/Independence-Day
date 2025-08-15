import React from "react";
import NaveBar from './NaveBar';
import './Freedom.css';
import background from './images/download (5).jpeg';
import themeImage from "./images/flyflag.jpeg";
import Footer from './Footer';

function Freedom() {

    const eventsList = [
        {
            Image: "https://ih1.redbubble.net/image.5126817511.9222/raf,360x360,075,t,fafafa:ca443f4786.jpg",
            title: "Flag Hoisting Ceremony",
            time: "8:00 AM",
            place: "Red Fort, Delhi",
            details: "Prime Minister will hoist the National Flag followed by the National Anthem."
        },
        {
            Image: "https://ih1.redbubble.net/image.5126817511.9222/raf,360x360,075,t,fafafa:ca443f4786.jpg",
            title: "Cultural Parade",
            time: "9:00 AM",
            place: "Red Fort & Rajpath",
            details: "Parade showcasing India's unity in diversity with cultural performances."
        },
        {
            Image: "https://ih1.redbubble.net/image.5126817511.9222/raf,360x360,075,t,fafafa:ca443f4786.jpg",
            title: "Award Ceremony",
            time: "11:00 AM",
            place: "Vigyan Bhawan, Delhi",
            details: "Honouring brave citizens and freedom fighters’ families."
        },
        {
            Image: "https://ih1.redbubble.net/image.5126817511.9222/raf,360x360,075,t,fafafa:ca443f4786.jpg",
            title: "Evening Light Show",
            time: "7:00 PM",
            place: "India Gate, Delhi",
            details: "Light and sound show celebrating India's journey of independence."
        }
    ];

    return (
        <div>
            <NaveBar />
            <div id="home" className="background">
                <img src={background} alt="background" />
                <div className="celebration">
                    <h1>Independence Day Celebration</h1>
                    <div className="para">
                        <p>The Independence Day of India, which is celebrated religiously throughout the Country
                            on the 15th of August every year, holds tremendous ground in the list of national days,
                            since it reminds every Indian about the dawn of a new beginning, the beginning of an era
                            of deliverance from the clutches of British colonialism of more than 200 years. It was on
                            15th August 1947 that India was declared independent from British colonialism, and the reins
                            of control were handed over to the leaders of the Country. India's gaining of independence was
                            a tryst with destiny, as the struggle for freedom was a long and tiresome one, witnessing the
                            sacrifices of many freedom fighters, who laid down their lives on the line.</p>
                    </div>
                </div>
            </div>
            <div id="events" className="events-section">
                <h2>78th Independence Day Events</h2>
                <div className="events-container">
                    {eventsList.map((event, index) => (
                        <div className="event-card" key={index}>
                            <img src={event.Image} alt={event.title} className="event-image" />
                            <h3>{event.title}</h3>
                            <p><strong>Time:</strong> {event.time}</p>
                            <p><strong>Place:</strong> {event.place}</p>
                            <p>{event.details}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div id="theme" className="theme-section">
                <h2>Theme of 78th Independence Day </h2>
                <div className="theme-content">
                    <img src={themeImage} alt="Viksit Bharat 2047" className="theme-image" />
                    <div className="theme-text">
                        <h3>Viksit Bharat @ 2047</h3>
                        <p>
                            The theme <strong>"Viksit Bharat @ 2047"</strong> reflects India's vision to become a developed nation by the centenary of its independence.
                        </p>
                        <ul>
                            <li><strong>Inclusive Growth:</strong> Opportunities and benefits for all citizens.</li>
                            <li><strong>Sustainable Development:</strong> Long-term environmental and economic sustainability.</li>
                            <li><strong>Technological Advancement:</strong> Promoting innovation and digital transformation.</li>
                            <li><strong>Infrastructure Development:</strong> Building robust infrastructure to support economic activities.</li>
                            <li><strong>Social Justice:</strong> Upholding equality and justice for all.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="about" className="about-section">
                <h2>About Us</h2>
                <div className="about-content">
                    <p>
                        We are a group of passionate individuals committed to celebrating and preserving
                        the rich heritage and spirit of India. Our mission is to organize events, create
                        engaging experiences, and spread awareness about the importance of our nation's
                        independence and the values it stands for.
                    </p>
                    <p>
                        Every year, we bring together communities, cultural groups, and citizens from
                        across the country to participate in Independence Day celebrations, honoring
                        the sacrifices of our freedom fighters and inspiring future generations.
                    </p>
                    <p>
                        Together, we believe in building a united, developed, and vibrant India for all.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Freedom;