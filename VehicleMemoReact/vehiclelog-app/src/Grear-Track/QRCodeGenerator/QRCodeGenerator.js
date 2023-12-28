import React, { useState } from 'react';
import './QRCodeGenerator.css';
import QRCode from 'qrcode.react'; 

const initialState = {
    firstname: '',
    lastname: '',
    greetingName: '',
    username: '',
    password: '',
    userSecurity: '',
    supervisor: '',
    userTitle: '',
    status: '',
    currentLoggedIn: false,
    messageNotified: false,
    qrGenerated: false,
    qrCodeImage: ''
  };


  const QRCodeGenerator = () => {
    const [state, setState] = useState(initialState);
  
    const handleGenerateQRCode = async () => {
      // Update your object as needed
     const updatedObject = {
      firstname: state.firstname,
      lastname: state.lastname,
      greetingName: state.greetingName,
      username: state.username,
      password: state.password,
      userSecurity: state.userSecurity,
      supervisor: state.supervisor,
      userTitle: state.userTitle,
      status: state.status,
      currentLoggedIn: state.currentLoggedIn,
      messageNotified: state.messageNotified,
      qrGenerated: true, 
      qrCodeImage: ''
    };
  
    const qrString = JSON.stringify(updatedObject);
    setState({ ...updatedObject, qr: qrString });
    console.log(updatedObject)
    };    
  
    const handleGenerateNewQRCode = () => {
      setState(initialState);
    };

  return (
    <div className="qrcode-generator-container">
      {state.qrGenerated ? (
        <div>
          <h2>Here is the QR Code</h2>
          <QRCode value={JSON.stringify(state)} />
          <br />
          <button className="qrcode-generator-button" onClick={handleGenerateNewQRCode}>
            Generate New QR Code
          </button>
        </div>
      ) : (
        <div>
          <h2>Enter User Data for QR Code Generation</h2>
      <label htmlFor="firstname" className="qrcode-generator-label">First Name:</label>
      <input
        type="text"
        id="firstname"
        className="qrcode-generator-input"
        value={state.firstname}
        onChange={(e) => setState({ ...state, firstname: e.target.value })} />
      <br />

      <label htmlFor="lastname" className="qrcode-generator-label">Last Name:</label>
      <input 
        type="text" 
        value={state.lastname} 
        className="qrcode-generator-input" 
        onChange={(e) => setState({ ...state, lastname: e.target.value })} />
      <br />

      <label htmlFor="greetingName" className="qrcode-generator-label">Greeting Name:</label>
    <input
      type="text"
      id="greetingName"
      className="qrcode-generator-input"
      value={state.greetingName}
      onChange={(e) => setState({ ...state, greetingName: e.target.value })}/>
    <br />

    <label htmlFor="username" className="qrcode-generator-label">Username:</label>
    <input
      type="text"
      id="username"
      className="qrcode-generator-input"
      value={state.username}
      onChange={(e) => setState({ ...state, username: e.target.value })}/>
    <br />

    <label htmlFor="password" className="qrcode-generator-label">Password:</label>
    <input
      type="password"
      id="password"
      className="qrcode-generator-input"
      value={state.password}
      onChange={(e) => setState({ ...state, password: e.target.value })}/>
    <br />
    <label htmlFor="userSecurity" className="qrcode-generator-label">User Security:</label>
    <input
      type="text"
      id="userSecurity"
      className="qrcode-generator-input"
      value={state.userSecurity}
      onChange={(e) => setState({ ...state, userSecurity: e.target.value })}
    />
    <br />

    <label htmlFor="supervisor" className="qrcode-generator-label">Supervisor:</label>
    <input
      type="text"
      id="supervisor"
      className="qrcode-generator-input"
      value={state.supervisor}
      onChange={(e) => setState({ ...state, supervisor: e.target.value })}
    />
    <br />

    <label htmlFor="userTitle" className="qrcode-generator-label">User Title:</label>
    <input
      type="text"
      id="userTitle"
      className="qrcode-generator-input"
      value={state.userTitle}
      onChange={(e) => setState({ ...state, userTitle: e.target.value })}
    />
    <br />

    <label htmlFor="status" className="qrcode-generator-label">Status:</label>
    <input
      type="text"
      id="status"
      className="qrcode-generator-input"
      value={state.status}
      onChange={(e) => setState({ ...state, status: e.target.value })}
    />
    <br />

      <label htmlFor="currentLoggedIn" className="qrcode-generator-label">Current Logged In:</label>
    <input
      type="checkbox"
      id="currentLoggedIn"
      className="qrcode-generator-checkbox"
      checked={state.currentLoggedIn}
      onChange={(e) => setState({ ...state, currentLoggedIn: e.target.checked })}
    />
    <br />

    <label htmlFor="messageNotified" className="qrcode-generator-label">Message Notified:</label>
    <input
      type="checkbox"
      id="messageNotified"
      className="qrcode-generator-checkbox"
      checked={state.messageNotified}
      onChange={(e) => setState({ ...state, messageNotified: e.target.checked })}
    />
    <br />

    <button className="qrcode-generator-button" onClick={handleGenerateQRCode}>
            Generate QR Code
    </button>
    </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
