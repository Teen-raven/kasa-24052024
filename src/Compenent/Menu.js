import '../assets/Style/menu.css';
import { NavLink } from "react-router-dom";
import logo from '../assets/LOGO.svg';
function Menu() {
    return (
      <div className="Menu">
<img src={logo} alt="Logo" className="logo-img" />
          <ul>
            <li>
              <NavLink to="/home">Accueil</NavLink >
            </li>
            <li>
              <NavLink to="/about">
                  A propos
              </NavLink >
            </li>
          </ul>
      </div>
    );
}

  export default Menu;