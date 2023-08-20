import React from 'react';
import {getTime} from '@/base/time';
import type {Session as SessionModal} from '@/services/SessionService/Session';

const Session: React.FC<{session: SessionModal;}> = ({session}) => {
  return (
    <li className="session" data-id={session.accessor('id')}>
      <div className="name">
        <span className="name">{session.accessor('name')}</span>
        <span className="time">{getTime(session.accessor('updateTime'))}</span>
      </div>
      <p className="summary">你离开了</p>
    </li>
  );
};

export default Session;
