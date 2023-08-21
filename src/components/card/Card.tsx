import React from 'react';
import './style';

interface ICardProps {
  className?: string;
  children?: React.ReactElement | React.ReactNode;
}

const Card: React.FC<ICardProps> = ({className, children}) => {
  return (
    <div className={`card-view ${className || ''}`}>
      {children}
    </div>
  );
};

export default Card;