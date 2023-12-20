// QRScanner.js
import React, { useState, useRef } from 'react';
import QrScanner from 'react-qr-scanner';

const QRScanner = () => {
  const [result, setResult] = useState('No result');
  const scannerRef = useRef(null);

  const handleScan = (data) => {
    if (data && data.text) {
      setResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  const handleRefresh = () => {
    setResult('No result');
  };

  return (
    <div>
      <h2>QR Scanner</h2>
      <QrScanner
        ref={scannerRef}
        onScan={handleScan}
        onError={handleError}
        style={{ width: '50%', margin: 'auto' }}
      />
      <p>Result: {result}</p>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default QRScanner;
