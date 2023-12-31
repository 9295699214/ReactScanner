import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FindQR.css'

const initialState = {
  firstname: '',
  lastname: '',
  userSecurity: '',
  qrCode: '', // Add a property to store the found QR code
};

const FindQrComponent = () => {
  const [state, setState] = useState(initialState);

  const handleFindQRCode = async () => {
    try {
      const response = await fetch('http://localhost:3000/find', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: state.firstname,
          lastname: state.lastname,
          userSecurity: state.userSecurity,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.message === 'User found') {
          // Update the state with the found QR code
          setState({ ...state, qrCode: data.qr });
          toast.success('User found!'); // Show success toast
        } else {
          toast.error('User not found.'); // Show error toast
        }
      } else {
        console.log('HTTP error:', response.status, data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error finding user.'); // Show error toast
    }
  };

  const handleFindAnotherOne = () => {
    setState(initialState);
  };

  return (
        <div className="find-qr-container">
          {!state.qrCode && (
            <>
            <h2>Find QR Code</h2>
              <label>First Name:</label>
              <input
                className="find-qr-input"
                type="text"
                value={state.firstname}
                onChange={(e) => setState({ ...state, firstname: e.target.value })}
              />
              <br />
              <label>Last Name:</label>
              <input
                className="find-qr-input"
                type="text"
                value={state.lastname}
                onChange={(e) => setState({ ...state, lastname: e.target.value })}
              />
              <br />
              <label>User Security:</label>
              <input
                className="find-qr-input"
                type="text"
                value={state.userSecurity}
                onChange={(e) => setState({ ...state, userSecurity: e.target.value })}
              />
              <br />
              <button className="find-qr-button" onClick={handleFindQRCode}>
                Find QR Code
              </button>
            </>
          )}
          {state.qrCode && (
            <div>
              <h2>Found QR Code</h2>
              <QRCode value={state.qrCode} />
              <br />
              <button className="find-another-one-button" onClick={handleFindAnotherOne}>
                Find Another One
              </button>
            </div>
          )}
        </div>
      );
    };    

export default FindQrComponent;
