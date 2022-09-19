import {useContext, useCallback} from 'react';
import {ContextState} from '../State';

export default function useTest() {
  const {dispatch} = useContext(ContextState);

  return useCallback(async () => {
    dispatch({
      test: '2',
    });
  }, [dispatch]);
}
