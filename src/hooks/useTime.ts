import {useEffect, useState, useCallback} from 'react';

const useTime = () => {
  const [time, setTime] = useState('00:00:00');

  const formatTime = useCallback((time: number) => {
    return time <= 9 ? `0${time}` : time
  }, []);

  const calcTime = useCallback(() => {
    const date = new Date();
    return [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ].map(formatTime).join(':');
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calcTime);
    }, 1 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return time;
}

export default useTime;