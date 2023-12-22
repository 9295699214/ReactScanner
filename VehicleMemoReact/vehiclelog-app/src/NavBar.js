// NavigationBar.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavigationBar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Add this line to get the current location

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-content-right">
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={handleLogoutClick}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
