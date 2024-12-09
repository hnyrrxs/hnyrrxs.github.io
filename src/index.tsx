import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './pages/App';

window.onload = async () => {
  // configure store here
  const rootElement = document.getElementById('app');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  }
};
