import React from 'react';
import './style';

const Loading: React.FC = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;