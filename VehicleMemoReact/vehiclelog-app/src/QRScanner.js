// QRScanner.js
import React, { useState, useRef } from 'react';
import QrScanner from 'react-qr-scanner';
import './QRScanner.css';

const QRScanner = () => {
  const [result, setResult] = useState('No result');
  const scannerRef = useRef(null);

  const handleScan = (data) => {
    if (data && data.text) {
      setResult(data.text);
      window.open(data.text, '_blank');

    }
  };

  const handleError = (err) => {
    console.error(err);
  };

//   const handleRefresh = () => {
//     setResult('No result');
//   };

  return (
    <div className="qr-scanner-container refresh-button-container">
      <div className="qr-scanner-content">
        <h2>To get more information Scan your Badge </h2>
        <QrScanner
          ref={scannerRef}
          onScan={handleScan}
          onError={handleError}
          className="qr-scanner"
        />
        {/* <button onClick={handleRefresh} className="refresh-button">
          Refresh
        </button> */}
        <p>{result}</p>
      </div>
    </div>
  );
};

export default QRScanner;
