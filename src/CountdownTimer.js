// CountdownTimer.js

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ redirectUrl }) => {
  const [timeLeft, setTimeLeft] = useState(30); // Initial time left set to 30 seconds

  useEffect(() => {
    // Define a function to handle the countdown
    const countdown = () => {
      if (timeLeft === 0) {
        // If timeLeft reaches 0, redirect to the specified URL
        window.location.href = redirectUrl;
      } else {
        // Otherwise, decrement timeLeft every second
        const timer = setTimeout(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);

        // Clear the timer when the component unmounts or when timeLeft becomes 0
        return () => clearTimeout(timer);
      }
    };

    // Call the countdown function initially
    countdown();

    // Set up the interval to update the countdown every second
    const interval = setInterval(countdown, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [redirectUrl, timeLeft]); // Include redirectUrl as a dependency

  return (
    <div className="countdown-timer">
      <div className="time-unit">
        <div className="time-value">{timeLeft}</div>
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
