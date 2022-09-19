import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import routers from './routers';

const content = routers.map(([path, Component]) => {
  return <Route path={path} element={<Component />} key={path} />;
});

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback>
        <Routes>{content}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
