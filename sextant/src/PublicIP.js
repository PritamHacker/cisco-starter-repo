import React, { useState, useEffect } from 'react';

const PublicIP = () => {
  const [publicIP, setPublicIP] = useState(null);

  useEffect(() => {
    // Fetch public IP from an API
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setPublicIP(data.ip))
      .catch(error => console.error('Error fetching public IP:', error));
  }, []);

  return (
    <div className="public-ip">
      <h2>Your Public IP Address</h2>
      {publicIP ? (
        <p>{publicIP}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PublicIP;
