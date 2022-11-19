// Automatic generated 
import React from 'react';
import './style';

interface ISpecies {
  value: number | string;
}

const Species: React.FC<ISpecies> = ({value}) => {
  return (
    <div className="species">
      <span className="symbol">¥</span>
      <span className="value">{value}</span>
    </div>
  );
};

export type {
  ISpecies,
}

export default Species;