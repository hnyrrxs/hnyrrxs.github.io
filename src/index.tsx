import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDom from 'react-dom';

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<h1>Hello World</h1>);
}