import {useContext, useEffect} from 'react';
import {once} from '@/base/functional';
import fetch from 'base/fetch';
import {ContextState} from '../State';
import type {State} from '../State';

export default function useInitialize() {
  const {state, dispatch} = useContext(ContextState);

  useEffect(once(() => {
    fetch<State>('/user/userInfo', {
      method: 'get',
    }).then(({content}) => {
      dispatch({
        ...content,
      } as State);
    });
  }), [dispatch]);

  return state;
}
