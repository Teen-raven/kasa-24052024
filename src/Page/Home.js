import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../Compenent/data.json'; // Importez le fichier JSON
import Banner from '../Compenent/Banner';
import IMG from '../assets/IMG.jpg'; // Importez l'image correctement


const Home = () => {
  const [selectedLogementId, setSelectedLogementId] = useState(null);

  const handleLogementClick = (id) => {
    setSelectedLogementId(id);
  };

  // Répétez les données des logements pour qu'il y en ait au moins 6
  const repeatedLogements = [...data];
  while (repeatedLogements.length < 9) {
    repeatedLogements.push(...data);
  }

  return (
   <div>
      <Banner name="Chez vous, partout et ailleurs" image={IMG} />


      <section id="location">
        <ul>
          {repeatedLogements.slice(0, 9).map((logement, index) => (
            <li key={index} id={`log-${logement.id}`} onClick={() => handleLogementClick(logement.id)} className={selectedLogementId === logement.id ? 'selected' : ''}>
              <Link to={`/logement/${logement.id}`} className="square">
                <div className="logement-container">
                  <img src={logement.cover} alt={logement.title} />
                  <p>{logement.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {selectedLogementId && <p>Logement sélectionné : {selectedLogementId}</p>}
      </section>
    </div>
  );
};

export default Home;
