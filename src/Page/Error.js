// Import des dépendances nécessaires
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Style/index.css'; // Assurez-vous d'avoir un fichier Error.css correspondant

// Définition du composant Error
export default function Error() {
  return (
    <div className="Error">
      <h1 className="ErrorTitle">404</h1>
      <p className="ErrorMessage">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/Home" className="HomeLink">Retourner sur la page d'accueil</Link>
    </div>
  );
}

