import React from 'react';
import Meriter from './meriter/Meriter';
import './index.scss';

const WorkspaceTools: React.FC = () => {
  return (
    <div className="tools-container">
      <Meriter/>
    </div>
  );
};

export default WorkspaceTools;