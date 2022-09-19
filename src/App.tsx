import React from 'react';
import { createRoot } from 'react-dom/client';
import ContextProvider from './context/Context';
import Router from './Router';
import './scss/reset.css';

export default function startRun() {
  createRoot(
    document.getElementById('root')!
  ).render(
    <React.StrictMode>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </React.StrictMode>
  );
}
