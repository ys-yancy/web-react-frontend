import React from 'react';
import './style';

interface ICardProps {
  name?: string;
  className?: string;
  children?: React.ReactElement | React.ReactNode;
}

const Card: React.FC<ICardProps> = ({name, className, children}) => {
  return (
    <div className={`card-view ${className || ''}`}>
      {children}
      {name && (
        <p className="name">{name}</p>
      )}
    </div>
  );
};

export default Card;