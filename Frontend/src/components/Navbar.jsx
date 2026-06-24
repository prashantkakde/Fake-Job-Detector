import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import bg from "/bg.jpg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar"
    style={{
    backgroundImage: `url(${bg})`
  }}>
     <div className="logo-container">
        <FaShieldAlt className="logo-icon" />
        <h2 className="logo">JobShield AI</h2>
    </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analyze">Analyze</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;