// App.js

import React, { useState, useEffect } from 'react';
import './App.css'; // You can style this component
import CountdownTimer from './CountdownTimer';
import AppContent from './AppContent';

function App() {
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCountdown(false);
    }, 10000); // Hide countdown after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {showCountdown ? (
          <CountdownTimer />
        ) : (
          <AppContent />
        )}
      </header>
    </div>
  );
}

export default App;
