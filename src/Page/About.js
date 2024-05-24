import React, { useState } from 'react';
import IMG from '../assets/img2.jpg';
import Banner from '../Compenent/Banner';
import '../assets/Style/about.css';
function About() {
  // Utilisation d'un état local pour gérer la visibilité de chaque section
  const [sectionsVisibility, setSectionsVisibility] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false
  });

  // Fonction pour basculer la visibilité d'une section
  const toggleSectionVisibility = (section) => {
    setSectionsVisibility(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="About">
      <Banner name="" image={IMG} />
   
      <section className="section">
        <button className={`toggleBtn ${sectionsVisibility.fiabilite ? '' : 'rotate'}`} onClick={() => toggleSectionVisibility('fiabilite')}>
          Fiabilité <span className="icon"></span>
        </button>
        <p style={{ display: sectionsVisibility.fiabilite ? 'block' : 'none' }}>
          Les annonces postées sur KASA garantissent une fiabilité totale. Les photos sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </p>
      </section>
      <section className="section">
        <button className={`toggleBtn ${sectionsVisibility.respect ? '' : 'rotate'}`} onClick={() => toggleSectionVisibility('respect')}>
          Respect <span className="icon"></span>
        </button>
        <p style={{ display: sectionsVisibility.respect ? 'block' : 'none' }}>
          La bienveillance fait partie des valeurs fondatrices de KASA. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </p>
      </section>
      <section className="section">
        <button className={`toggleBtn ${sectionsVisibility.service ? '' : 'rotate'}`} onClick={() => toggleSectionVisibility('service')}>
          Service <span className="icon"></span>
        </button>
        <p style={{ display: sectionsVisibility.service ? 'block' : 'none' }}>
          La bienveillance fait partie des valeurs fondatrices de KASA. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </p>
      </section>
      <section className="section">
        <button className={`toggleBtn ${sectionsVisibility.securite ? '' : 'rotate'}`} onClick={() => toggleSectionVisibility('securite')}>
          Sécurité <span className="icon"></span>
        </button>
        <p style={{ display: sectionsVisibility.securite ? 'block' : 'none' }}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos équipes de vérifier que nos standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </p>
      </section>
    </div>
  );
  
}

export default About;
