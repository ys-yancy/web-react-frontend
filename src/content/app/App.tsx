import React, {useContext, useMemo} from 'react';
import {ContextState} from '@/context/State';

const App: React.FC = (props, b) => {
  const {state: {sessionManager}} = useContext(ContextState);

  // session content
  const content = useMemo<Array<React.ReactElement>>(() => {
    const content: Array<React.ReactElement> = [];
    sessionManager?.sessionList.forEach((session) => {
      content.push(
        <li className="session" key={session.accessor('id')} data-id={session.accessor('id')}>
          <span className="name">{session.accessor('name')}</span>
          <span className="time">{session.accessor('updateTime')}</span>
        </li>
      );
    });
    return content;
  }, [sessionManager]);

  return (
    <div className="app-container">
      <ul className="session-list">
        {content}
      </ul>
    </div>
  );
};

export default App;
