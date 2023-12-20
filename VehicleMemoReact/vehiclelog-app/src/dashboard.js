// Dashboard.js
import React from 'react';
import QRScanner from './QRScanner';

const Dashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    // Redirect to login page or handle unauthorized access
    return <p>Please log in to access the dashboard.</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <QRScanner />
      {/* Other dashboard content goes here */}
    </div>
  );
};

export default Dashboard;
