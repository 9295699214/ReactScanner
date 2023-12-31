// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Grear-Track/Signup/Signup';
import Login from './Grear-Track/Login/Login';
import Dashboard from './Grear-Track/Dashboard/dashboard';
import QRCodeGenerator from './Grear-Track/QRCodeGenerator/QRCodeGenerator'
import FindQR from './Grear-Track/FindQR/FindQR'
import NavigationBar from './Grear-Track/Navbar/NavBar';
import './App.css'; 
import QRScanner from './Grear-Track/QRScanner/QRScanner';

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
          <Route path="/dashboard/FindQr" element={<FindQR isLoggedIn={isLoggedIn} />} />
          <Route path="/dashboard/QRScanner" element={<QRScanner isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
