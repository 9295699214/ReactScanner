// Dashboard.js
import React from 'react';
// import QRScanner from './QRScanner';
import './dashboard.css';
import DashboardIcon from './DashboardIcon';
import qrCodeIcon from '../src/assets/qricon.png';

const Dashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    // Redirect to login page or handle unauthorized access
    return <p>Please log in to access the dashboard.</p>;
  }

  return (
    // <div>
    //   <QRScanner />
    // </div>
    <div>
      <DashboardIcon icon={qrCodeIcon} text="QR Code Generator" to="/dashboard/QRCodeGenerator" />
    </div>
  );
};

export default Dashboard;
