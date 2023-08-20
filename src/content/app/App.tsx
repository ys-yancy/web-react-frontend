import React, {useContext} from 'react';
import {ContextState} from '@/context/State';
import SessionList from '@/business-components/session-list';
import './style';

const App: React.FC = (props, b) => {
  const {service} = useContext(ContextState);

  return (
    <div className="app-container">
      <SessionList service={service!} />
    </div>
  );
};

export default App;
