import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import QrScanner from 'react-qr-scanner';
import './QRScanner.css';

const QRScanner = forwardRef((props, ref) => {
  const [UserQRResult, setUserQRResult] = useState('No result');
  const [KeyQRResult, setKeyQRResult] = useState('No result');
  const [scanMode, setScanMode] = useState('user'); // 'user' or 'key'
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [showResults, setShowResults] = useState(false);


  const userScannerRef = useRef(null);
  const keyScannerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    resetScanner: () => {
      if (userScannerRef.current) {
        userScannerRef.current.reset();
      }

      if (keyScannerRef.current) {
        keyScannerRef.current.reset();
      }
    },
  }), []);
  

  const handleScan = (data) => {
    console.log('Scanning...', data);
    if (data && data.text && data.text.trim() !== '') {
      if (scanMode === 'user') {
        setUserQRResult(data.text);
        setNextButtonDisabled(false);
      } else {
        setKeyQRResult(data.text);
        setShowResults(true);
        // Optionally, switch back to 'user' mode or perform other actions
        // setScanMode('user');
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleRefresh = () => {
    // ... (your existing code)
  };

  const handleBack = () => {
    setShowResults(false);
    setScanMode('user');
  };

  const handleNext = () => {
    setScanMode('key');
  };

  return (
    <div className="qr-scanner-container refresh-button-container">
      <div className="qr-scanner-content">
        {!showResults ? (
          <>
            {scanMode === 'user' ? (
              <>
                <h2>To get more information Scan your Badge </h2>
                <QrScanner
                  ref={userScannerRef}
                  onScan={handleScan}
                  onError={handleError}
                  className="qr-scanner"
                />
              </>
            ) : (
              <>
                <h2>Next Scan your key QR</h2>
                <QrScanner
                  ref={keyScannerRef}
                  onScan={handleScan}
                  onError={handleError}
                  className="qr-scanner"
                />
              </>
            )}
            <button onClick={handleRefresh} className="refresh-button">
              Refresh
            </button>
            {(scanMode === 'key' || showResults) && (
              <button onClick={handleBack} className="back-button">
                Back
              </button>
            )}
            {scanMode === 'user' && (
              <button
                onClick={handleNext}
                className={`next-button ${nextButtonDisabled ? 'disabled' : ''}`}
                disabled={nextButtonDisabled}
              >
                Next
              </button>
            )}
          </>
        ) : (
          <>
            <h2>User QR Result</h2>
            <p>{UserQRResult}</p>
            <h2>Key QR Result</h2>
            <p>{KeyQRResult}</p>
          </>
        )}
      </div>
    </div>
  );
});

export default QRScanner;
