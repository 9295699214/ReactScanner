// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './dashboard';
import QRCodeGenerator from './QRCodeGenerator'
import NavigationBar from './NavBar'; // Import the NavigationBar component
import './App.css'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Assume successful login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Assume logout logic, reset the authentication status
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <hr />
        <NavigationBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
          <Route path="/dashboard/QRCodeGenerator" element={<QRCodeGenerator isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
