
import React from 'react';
import './PrinterSetup.css';
import printerImage from '../assets/printer.png'; // Ensure this path is correct
import hpLogo from '../assets/hp-logo.png'; // Import HP logo

const PrinterSetup = () => {
  return (
    <div className="printer-setup">
      <div className="text-content">
        <h1>123 PRINTER SETUP</h1>
        <ul>
          <li>Make sure your printer is powered on</li>
          <li>Select Download to install the recommended printer software to complete setup</li>
        </ul>
        <button className="setup-button"> Click Here for Setup
          <img src={hpLogo} alt="HP Logo" className="hp-logo" />
         
        </button>
      </div>

      <img src={printerImage} alt="Printer" className="printer-image" />
    </div>
  );
};

export default PrinterSetup;

