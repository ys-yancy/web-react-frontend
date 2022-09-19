import React, { useReducer } from 'react';
import { ContextState, reducer, initState } from './State';

interface IContextProvider {
  children: React.ReactNode;
}

const ContextProvider: React.FC<IContextProvider> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ContextState.Provider value={{ state, dispatch }}>{children}</ContextState.Provider>
  );
};

export default ContextProvider;
