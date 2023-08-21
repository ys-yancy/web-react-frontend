import React from 'react';
import useTime from '@/hooks/useTime';
import './style';

interface ITimerProps {
  className?: string;
}

const Timer: React.FC<ITimerProps> = ({className}) => {
  const currentTime = useTime();

  return (
    <div className={`timer ${className || ''}`}>
      <p className="current-time">{currentTime}</p>
    </div>
  );
}

export default Timer;
