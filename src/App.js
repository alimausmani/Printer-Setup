import React from 'react';
import './App.css';
import Header from './components/Header';
import PrinterSetup from './components/PrinterSetup';
import Support from './components/Support';

function App() {
  return (
    <div className="App">
      <Header />
      <PrinterSetup />
      <Support />
    </div>
  );
}

export default App;
