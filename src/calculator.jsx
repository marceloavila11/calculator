import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [calls, setCalls] = useState(100);
  const conversionRates = {
    spoken: 0.2,
    offers: 0.5,
    sent: 0.4,
    signed: 0.35,
  };
  const costPerCall = 0.5; // Ajusta este valor según sea necesario
  const baseCost = 100; // Ajusta este valor según sea necesario

  const calculateMetrics = (calls) => {
    const spoken = Math.floor(calls * conversionRates.spoken);
    const offers = Math.floor(spoken * conversionRates.offers);
    const sent = Math.floor(offers * conversionRates.sent);
    const signed = Math.floor(sent * conversionRates.signed);
    const closed = Math.floor(signed * 0.55);
    const ratio = signed > 0 ? closed / signed : 0;
    const totalCost = baseCost + (calls * costPerCall);
    return { spoken, offers, sent, signed, closed, ratio, totalCost };
  };

  const metrics = calculateMetrics(calls);

  return (
    <div className="calculator">
      <h2>Business Metrics Calculator</h2>
      <label>
        Calls: <span className="calls-value">{calls}</span>
        <input
          type="range"
          min="100"
          max="5000"
          value={calls}
          onChange={(e) => setCalls(parseInt(e.target.value))}
        />
      </label>
      <div className="metrics">
        <p>Spoken: <span>{metrics.spoken}</span></p>
        <p>Offers: <span>{metrics.offers}</span></p>
        <p>Sent: <span>{metrics.sent}</span></p>
        <p>Signed: <span>{metrics.signed}</span></p>
        <p>Closed: <span>{metrics.closed}</span></p>
        <p>Ratio: <span>{metrics.ratio.toFixed(2)}</span></p>
      </div>
      <div className="cost">
        <p>Estimated Cost per Month:</p>
        <p className="total-cost">${metrics.totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Calculator;
