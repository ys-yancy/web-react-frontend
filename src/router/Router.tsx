import React from 'react';
import WebRouter from './WebRouter';
import MobileRouter from './MobileRouter';

const runtimeIsMobile = false;

const Router: React.FC = (props) => {
  return runtimeIsMobile ? (
    <MobileRouter {...props} />
  ) : (
    <WebRouter {...props} />
  );
};

export default Router;
