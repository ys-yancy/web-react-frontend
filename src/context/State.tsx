import React from 'react';
import {SessionManager} from './session/SessionManager';

export type State = {
  id: string;
  name: string;
  terminal?: 'mobile' | 'web';
  sessionManager: Nullable<SessionManager>;
};

export const noop = () => {};

export const initState = {
  id: '',
  name: 'Loading...',
  terminal: 'mobile' as const,
  sessionManager: null,
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
