import React, { useReducer } from 'react';
import Service from '@/services/Service';
import {ContextState, reducer, initState} from './State';

interface IContextProvider {
  service: typeof Service;
  children: React.ReactNode;
}

const ContextProvider: React.FC<IContextProvider> = ({service, children}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ContextState.Provider value={{state, dispatch, service}}>
      {children}
    </ContextState.Provider>
  );
};

export default ContextProvider;
