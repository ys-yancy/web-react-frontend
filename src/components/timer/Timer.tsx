import React from 'react';
import useTime from '@/hooks/useTime';
import Loading from '@/components/loading';
import './style';

interface ITimerProps {
  className?: string;
}

const Timer: React.FC<ITimerProps> = ({className}) => {
  const currentTime = useTime();

  return currentTime === '00:00:00' ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <div className={`timer ${className || ''}`}>
      <p className="current-time">{currentTime}</p>
    </div>
  );
}

export default Timer;
