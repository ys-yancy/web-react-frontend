import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from 'components/header';
import FixedCart from 'business-components/fixed-cart';
import useInitialize from 'context/hooks/use-initialize';
import contents from 'src/content';
import 'antd/dist/antd.min.css';
import './web-style.scss';

const content = contents.map(([path, Component]) => {
  return <Route path={path} element={<Component />} key={path} />;
});

// mobile router
const Router: React.FC = () => {
  const state = useInitialize();

  return (
    <BrowserRouter>
      <Header name={state?.name} />
      <div className="web-router-content">
        <Suspense fallback>
          <Routes>{content}</Routes>
        </Suspense>
      </div>
      <FixedCart />
    </BrowserRouter>
  );
};

export default Router;
