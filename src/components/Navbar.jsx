import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">PostGram</h3>
      <ul>
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/followers">Follows</Link></li>
        <li><Link to="/">Logout</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
