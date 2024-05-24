import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import data from '../Compenent/data.json'; // Import your JSON file containing accommodation data

const Logement = () => {
    const [logementData, setLogementData] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const [showEquipments, setShowEquipments] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { id } = useParams(); // Get the ID from the URL
    
    useEffect(() => {
        // Search for the accommodation corresponding to the ID in the JSON file
        const logement = data.find(item => item.id === id);
        if (logement) {
            setLogementData(logement);
            setCurrentImageIndex(0); // Reset the image index when accommodation data changes
        }
    }, [id]); // Update the accommodation when ID changes

    const nextImage = () => {
        if (logementData) {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % logementData.pictures.length);
        }
    };

    const prevImage = () => {
        if (logementData) {
            setCurrentImageIndex(prevIndex =>
                prevIndex === 0 ? logementData.pictures.length - 1 : prevIndex - 1
            );
        }
    };

    const toggleDescription = () => {
        setShowDescription(!showDescription);
        setShowEquipments(false); // Fermer l'autre section lorsque celle-ci est ouverte
    };
    
    const toggleEquipments = () => {
        setShowEquipments(!showEquipments);
        setShowDescription(false); // Fermer l'autre section lorsque celle-ci est ouverte
    };

    if (!logementData) return <div>Loading...</div>;

    const { title, location, tags, equipments, description, host, rating } = logementData;
    const [firstName, lastName] = host.name.split(' ');

    return (
        <div className="Logement">
            <div className="apartment-carousel">
                <button onClick={prevImage}>&lt;</button>
                <img src={logementData.pictures[currentImageIndex]} alt="Apartment" className="carousel-image" />
                <button onClick={nextImage}>&gt;</button>
                  <div className="image-pagination">{currentImageIndex + 1}/{logementData.pictures.length}</div>
            </div>
            <div className="content-wrapper">
                <div className="left-content">
                    <h2 style={{ fontSize: "28px", color: "red" }}>{title}</h2>
                    <h2 style={{ fontSize: "15px", color: "black" }}>{location}</h2>
                </div>
            </div>
            <div className="tag-container">
                {tags.map((tag, index) => (
                    <h2 key={index} className="tag-item">{tag}</h2>
                ))}
            </div>
            <div className="rating-host-container"> 
                <div className="stars-container">
                    <h2>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                style={{ color: index < parseInt(rating) ? "#FF6060" : "#ccc" }}
                            />
                        ))}
                    </h2>
                </div>
                <div className="host-info-container">
                    <img
                        className="avatar"
                        src={host.picture}
                        alt={'Photo of ' + host.name}
                        style={{
                            width: host.imageSize,
                            height: host.imageSize
                        }}
                    />
                    <div className="host-details">
                        <h1>{firstName}</h1>
                        <h1>{lastName}</h1>
                    </div>
                </div>
            </div>
            <div className="sections-wrapper">
    <section className="section Description" style={{ flex: "1", marginRight: "10px" }}>
        <button className={`toggleBtn ${showDescription ? '' : 'rotate'}`} onClick={toggleDescription}>
            Description <span className="icon"></span>
            {!showDescription && <span className="arrow"></span>}
        </button>
        {showDescription && description && <p>{description}</p>}
    </section>

    <section className="section Equipments" style={{ flex: "1" }}>
        <button className={`toggleBtn ${showEquipments ? '' : 'rotate'}`} onClick={toggleEquipments}>
            Equipments <span className="icon"></span>
            {!showEquipments && <span className="arrow"></span>}
        </button>
        {showEquipments && (
            <ul className="equipments-list">
                {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
        )}
    </section>
</div>
        </div>
    );
};

export default Logement;
