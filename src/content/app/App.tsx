import React, {useContext, useMemo} from 'react';
import {getTime} from '@/base/time';
import SessionService from '@/services/SessionService';
import {ContextState} from '@/context/State';
import './style';

const App: React.FC = (props, b) => {
  const {service} = useContext(ContextState);

  // session content
  const content = useMemo<Array<React.ReactElement>>(() => {
    const content: Array<React.ReactElement> = [];
    service?.invoke(async (accessor) => {
      const {sessionList} = await accessor.get<SessionService>(SessionService.id);
      sessionList?.forEach((session) => {
        content.push(
          <li className="session" key={session.accessor('id')} data-id={session.accessor('id')}>
            <div className="name">
              <span className="name">{session.accessor('name')}</span>
              <span className="time">{getTime(session.accessor('updateTime'))}</span>
            </div>
            <p className="summary">你离开了</p>
          </li>
        );
      });
    })
    return content;
  }, [service]);

  return (
    <div className="app-container">
      <ul className="session-list">
        {content}
      </ul>
    </div>
  );
};

export default App;
