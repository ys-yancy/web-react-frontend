import React from 'react';
import Meriter from './meriter';
import Calendar from './calendar';
import Buddha from './buddha';
import './index.scss';

const WorkspaceTools: React.FC = () => {
  return (
    <div className="tools-container">
      <Meriter />
      <Calendar />
      <Buddha />
    </div>
  );
};

export default WorkspaceTools;