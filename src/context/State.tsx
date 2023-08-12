import React from 'react';
import Service from '@/services/Service';

export type State = {
  id: string;
  name: string;
  terminal?: 'mobile' | 'web';
};

export const noop = () => {};

export const initState = {
  id: '',
  name: 'Loading...',
  terminal: 'mobile' as const,
};

export const ContextState = React.createContext<{
  state: State;
  dispatch: React.Dispatch<State>;
  service: Nullable<typeof Service>;
}>({
  state: initState,
  dispatch: noop,
  service: null,
});

export const reducer = (state: State, action: State) => {
  return {
    ...state,
    ...action,
  };
};
