import {useContext, useEffect} from 'react';
import fetch from 'base/fetch';
import {ContextState} from '../State';
import type {State} from '../State';

export default function useTest() {
  const {state, dispatch} = useContext(ContextState);

  useEffect(() => {
    fetch<State>('/main/oaBasicInfo', {
      method: 'get',
    }).then(({content}) => {
      dispatch(content);
    });
  }, [dispatch]);

  return state;
}
