import React from 'react';
import '../assets/Style/banner.css';

function Banner(props) {
    console.log(props.text); // Vérifiez si le texte est correctement transmis
    return (
        <div className="banner-container" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="banner-overlay">
            <h1 className="custom-heading">{props.name}</h1>
            </div>
        </div>
    );
}

export default Banner;
