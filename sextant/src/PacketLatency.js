// PacketLatency.js
import React, { useState, useEffect } from 'react';
import * as WebSocket from 'websocket';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const ws = new WebSocket.w3cwebsocket('ws://localhost:55455', 'echo-protocol');

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (message) => {
      console.log('Received message:', message.data);

      try {
        const packetTimestamp = JSON.parse(message.data).timestamp;
        if (!isNaN(packetTimestamp)) {
          const currentTimestamp = Date.now();
          const packetLatency = currentTimestamp - packetTimestamp;

          setLatency(packetLatency);
        } else {
          console.error('Invalid timestamp:', packetTimestamp);
        }
      } catch (error) {
        console.error('Error parsing message data:', error);
      }
    };

    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event);

      if (event.code === 1006) {
        console.error('Connection Error');
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="packet-latency-container">
      <h2>Packet Latency</h2>
      {latency !== null ? (
        <p>{`Latency: ${latency} ms`}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PacketLatency;
