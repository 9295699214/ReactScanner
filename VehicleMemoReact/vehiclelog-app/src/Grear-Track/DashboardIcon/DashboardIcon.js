// DashboardIcon.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardIcon.css'

const DashboardIcon = ({ icon, text, to }) => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate(to);
    };
  
  return (
    <div onClick={handleClick}>
        <img className="icon-image" src={icon} alt={text} />
        <p>{text}</p>
    </div>
  );
};

export default DashboardIcon;
