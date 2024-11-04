import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { CtProvider } from './context/Ct.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CtProvider>
      <App />
    </CtProvider>
  </StrictMode>
);