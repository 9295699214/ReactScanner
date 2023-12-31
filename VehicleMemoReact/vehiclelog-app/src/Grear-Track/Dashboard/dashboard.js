// Dashboard.js
import React from 'react';
import QRScanner from '../QRScanner/QRScanner';
import './dashboard.css';

import DashboardIcon from '../DashboardIcon/DashboardIcon'
import QRGenerator_Icon from '../../assets/QR_Generator_Icon.png';
import Find_QR_Icon from '../../assets/Find_QR_Icon.png';
import vehicle_out from '../../assets/vehicleOut.png';

const Dashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    // Redirect to login page or handle unauthorized access
    return <p>Please log in to access the dashboard.</p>;
  }

  return (
    // <div>
    //   <QRScanner />
    // </div>
    <div className="dashboard-container">
      <DashboardIcon  icon={QRGenerator_Icon} text="QR Code Generator" to="/dashboard/QRCodeGenerator" />
      <DashboardIcon  icon={Find_QR_Icon} text="Find QR" to="/dashboard/FindQr" />
      <DashboardIcon  icon={vehicle_out} text="Vehicle Out" to="/dashboard/QRScanner" />
    </div>
  );
};

export default Dashboard;
