// App.js
import React from 'react';
import './App.css';

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
    </div>
  );
};

export default App;
