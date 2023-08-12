import React from 'react';
import { createRoot } from 'react-dom/client';
import ContextProvider from './context/Context';
import InstantiationService from './services/InstantiationService';
import SessionService from './services/SessionService';
import service from './services/Service';
import Router from './router';
import './scss/variables.scss';
import './scss/reset.css';

export default function startRun() {

  const render = (_service: typeof service) => {
    createRoot(
      document.getElementById('root')!
    ).render(
      <React.StrictMode>
        <ContextProvider service={service}>
          <Router />
        </ContextProvider>
      </React.StrictMode>
    );
  };
  
  service.invoke((accessor) => {
    accessor.get<InstantiationService>(InstantiationService.id).ready(() => {
      service.invoke(async (accessor) => {
        await accessor.get<SessionService>(SessionService.id);
        render(service);
      });
    })
  });
}
