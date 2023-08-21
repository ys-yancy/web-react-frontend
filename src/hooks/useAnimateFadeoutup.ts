
import {useRef, useCallback} from 'react';
import {sleep} from '@/base/delay';

const useAnimateFadeoutup = <T extends HTMLElement>() => {
  const $interactive = useRef<T>(null);

  const handleClick = useCallback(async () => {
    if ($interactive.current) {
      $interactive.current.style.cssText = 'will-change: all; display: inline-block; opacity: 1;';

      await sleep(1100);
      
      $interactive.current.style.cssText = 'display: none;';
    }
  }, [$interactive]);


  return {$interactive, connect: handleClick};
};

export default useAnimateFadeoutup;