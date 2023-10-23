import React from 'react';
import './App.css';
import PublicIP from './PublicIP';
import PylonConnector from './PylonConnector';

const Banner = ({ title }) => (
  <div className="banner">
    <h1>{title}</h1>
  </div>
);

const Card = ({ data }) => (
  <div className="card">
    <p>{data}</p>
  </div>
);

const App = () => {
  const bannerTitle = "Sextent";
  const dataPoints = ["Data Point 1", "Data Point 2", "Data Point 3"];

  return (
    <div className="app">
      <Banner title={bannerTitle} />

      <div className="card-container">
        {dataPoints.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
      <PublicIP />
      <div className="packet-latency">
        <h2>Packet latency</h2>
        <PylonConnector />
      </div>
      
    </div>
  );
};

export default App;
