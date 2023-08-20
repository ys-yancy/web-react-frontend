import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from '@/components/header';
import useInitialize from '@/context/hooks/initialize';
import contents from 'src/content';

const routes = contents.map(([path, Component]) => {
  return <Route path={path} element={<Component />} key={path} />;
});

const Router: React.FC = () => {
  const state = useInitialize();

  return (
    <BrowserRouter>
      <Header name={state?.name} />
      <div className="root-content">
        <Suspense fallback>
          <Routes>
            {routes}
            <Route path="*" element={<Navigate replace={true} to="/message" />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default Router;
