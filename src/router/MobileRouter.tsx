import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MobileHeader from '@/components/header';
import MobileMenu from '@/components/menu';
import useInitialize from '@/context/hooks/initialize';
import contents from 'src/content';

const content = contents.map(([path, Component]) => {
  return <Route path={path} element={<Component />} key={path} />;
});

// mobile router
const Router: React.FC = () => {
  const state = useInitialize();

  return (
    <BrowserRouter>
      <MobileHeader name={state?.name} />
      <div className="root-content">
        <Suspense fallback>
          <Routes>{content}</Routes>
        </Suspense>
      </div>
      <MobileMenu />
    </BrowserRouter>
  );
};

export default Router;
