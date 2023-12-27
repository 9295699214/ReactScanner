import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [greetingName, setGreetingName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userSecurity, setUserSecurity] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [userTitle, setUserTitle] = useState('');
  const [status, setStatus] = useState('');
  const [currentLoggedIn, setCurrentLoggedIn] = useState(false);
  const [messageNotified, setMessageNotified] = useState(false);
  const [qrData, setQrData] = useState('');

  const handleGenerateQRCode = () => {
    // Your logic to generate QR code data
    // For example, generate QR code data from an object
    const dataObject = {
      firstname,
      lastname,
      greetingName,
      username,
      password,
      userSecurity,
      supervisor,
      userTitle,
      status,
      currentLoggedIn,
      messageNotified,
    };
    const jsonData = JSON.stringify(dataObject);
    setQrData(jsonData);
  };

  return (
    <div className="qrcode-generator-container">
      <h2>QR Code Generator</h2>
      <label htmlFor="firstname" className="qrcode-generator-label">First Name:</label>
      <input
        type="text"
        id="firstname"
        className="qrcode-generator-input"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <br />

      <label htmlFor="lastname" className="qrcode-generator-label">Last Name:</label>
      <input 
        type="text" 
        value={lastname} 
        className="qrcode-generator-input" 
        onChange={(e) => setLastname(e.target.value)} />
      <br />

      <label htmlFor="greetingName" className="qrcode-generator-label">Greeting Name:</label>
    <input
      type="text"
      id="greetingName"
      className="qrcode-generator-input"
      value={greetingName}
      onChange={(e) => setGreetingName(e.target.value)}
    />
    <br />

    <label htmlFor="username" className="qrcode-generator-label">Username:</label>
    <input
      type="text"
      id="username"
      className="qrcode-generator-input"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <br />

    <label htmlFor="password" className="qrcode-generator-label">Password:</label>
    <input
      type="password"
      id="password"
      className="qrcode-generator-input"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <label htmlFor="userSecurity" className="qrcode-generator-label">User Security:</label>
    <input
      type="text"
      id="userSecurity"
      className="qrcode-generator-input"
      value={userSecurity}
      onChange={(e) => setUserSecurity(e.target.value)}
    />
    <br />

    <label htmlFor="supervisor" className="qrcode-generator-label">Supervisor:</label>
    <input
      type="text"
      id="supervisor"
      className="qrcode-generator-input"
      value={supervisor}
      onChange={(e) => setSupervisor(e.target.value)}
    />
    <br />

    <label htmlFor="userTitle" className="qrcode-generator-label">User Title:</label>
    <input
      type="text"
      id="userTitle"
      className="qrcode-generator-input"
      value={userTitle}
      onChange={(e) => setUserTitle(e.target.value)}
    />
    <br />

    <label htmlFor="status" className="qrcode-generator-label">Status:</label>
    <input
      type="text"
      id="status"
      className="qrcode-generator-input"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    />
    <br />

      <label htmlFor="currentLoggedIn" className="qrcode-generator-label">Current Logged In:</label>
    <input
      type="checkbox"
      id="currentLoggedIn"
      className="qrcode-generator-checkbox"
      checked={currentLoggedIn}
      onChange={(e) => setCurrentLoggedIn(e.target.checked)}
    />
    <br />

    <label htmlFor="messageNotified" className="qrcode-generator-label">Message Notified:</label>
    <input
      type="checkbox"
      id="messageNotified"
      className="qrcode-generator-checkbox"
      checked={messageNotified}
      onChange={(e) => setMessageNotified(e.target.checked)}
    />
    <br />

    <button className="qrcode-generator-button" onClick={handleGenerateQRCode}>
    Generate QR Code
    </button>
      {qrData && <QRCode value={qrData} />}
    </div>
  );
};

export default QRCodeGenerator;
