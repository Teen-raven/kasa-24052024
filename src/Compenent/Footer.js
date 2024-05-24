import React from 'react';
import '../assets/Style/footer.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

// Importez votre image SVG ici
import desktopSizeImage from '../assets/Size=Desktop.svg';

function Footer() {
  return (
    <div className="Footer">
      {/* Utilisez votre image importée */}
      <img src={desktopSizeImage} alt="basdepage" />
    </div>
  );
}

export default Footer;
