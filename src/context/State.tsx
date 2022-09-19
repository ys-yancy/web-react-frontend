import React from 'react';

export type State = {
  test: string;
};

export const noop = () => {};

export const initState = {
  test: '1',
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
