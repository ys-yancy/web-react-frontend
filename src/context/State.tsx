import React from 'react';

export type State = {
  name: string;
  terminal: 'mobile' | 'web';
};

export const noop = () => {};

export const initState = {
  name: 'Loading...',
  terminal: 'mobile' as const,
};

export const ContextState = React.createContext<{
  state: State;
  dispatch: React.Dispatch<State>;
}>({
  state: initState,
  dispatch: noop,
});

export const reducer = (state: State, action: State) => {
  return {
    ...state,
    ...action,
  };
};
