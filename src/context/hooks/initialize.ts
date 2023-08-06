import {useContext, useEffect} from 'react';
import {once} from '@/base/functional';
import fetch from 'base/fetch';
import {SessionManager} from '../session/SessionManager';
import {ContextState} from '../State';
import type {State} from '../State';

export default function useInitialize() {
  const {state, dispatch} = useContext(ContextState);

  useEffect(once(() => {
    fetch<State>('/user/userInfo', {
      method: 'get',
    }).then(({content}) => {
      SessionManager.instance().then(((sessionManager) => {
        dispatch({
          ...content,
          sessionManager, 
        } as State);
      }));
    });
  }), [dispatch, SessionManager]);

  return state;
}
