import React from 'react';
import MobileRouter from './MobileRouter';

const runtimeIsMobile = true;

const Router: React.FC = (props) => {
  return runtimeIsMobile && (
    <MobileRouter {...props} />
  );
};

export default Router;
