import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MobileHeader from 'business-components/mobile-header';
import MobileMenu from 'business-components/mobile-menu';
import contents from 'src/content';
import {useInitialize} from './mobile-hooks';
import './mobile-style.scss';

const content = contents.map(([path, Component]) => {
  return <Route path={path} element={<Component />} key={path} />;
});

// mobile router
const Router: React.FC = () => {
  const basicInfo = useInitialize();

  return (
    <BrowserRouter>
      <MobileHeader name={basicInfo?.name} />
      <div className="mobile-router-content">
        <Suspense fallback>
          <Routes>{content}</Routes>
        </Suspense>
      </div>
      <MobileMenu />
    </BrowserRouter>
  );
};

export default Router;
