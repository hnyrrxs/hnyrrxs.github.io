import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PortfolioPage } from './pages/Portfolio';

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<PortfolioPage />);
}