import { useLocation } from 'react-router-dom';
import logo from './Logo.png';
import './Navbar.css';

export default function Navbar () {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="navbar-title">Rick and Morty app</h1>
    </nav>
  )
}
