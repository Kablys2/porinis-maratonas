import React from 'react';
import ReactDOM from 'react-dom/client'; // Naudojame naujesnį createRoot API
import './index.css'; // Galite sukurti bazinį CSS failą
import WeightLossTracker from './WeightLossTracker'; // Įsitikinkite, kad kelias teisingas

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeightLossTracker />
  </React.StrictMode>
);
