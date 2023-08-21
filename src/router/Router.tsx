import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import contents from 'src/content';

const routes = contents.map(([path, Component]) => {
  return <Route path={path} element={<Component />} key={path} />;
});

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback>
        <Routes>
          {routes}
          <Route path="*" element={<Navigate replace={true} to="/workspace" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
