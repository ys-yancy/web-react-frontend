import React from 'react';
import Meriter from './meriter/Meriter';

const WorkspaceTools: React.FC = () => {
  return (
    <div className="tools-container" style={{width: '70vw', }}>
      <Meriter/>
    </div>
  );
};

export default WorkspaceTools;