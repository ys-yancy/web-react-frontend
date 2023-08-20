import React, {useMemo} from 'react';
import {AppService} from '@/services/Service';
import SessionService from '@/services/SessionService';
import Session from '../session/Session';

const SessionList: React.FC<{service: AppService}> = ({service}) => {
  const content = useMemo<Array<React.ReactElement>>(() => {
    const content: Array<React.ReactElement> = [];
    service?.invoke((accessor) => {
      accessor.get<SessionService>(SessionService.id)?.sessionList?.forEach((session) => {
        content.push(
          <Session session={session} key={session.accessor('id')} />
        );
      });
    })
    return content;
  }, [service]);

  return (
    <ul className="session-list">
      {content}
    </ul>
  );
};

export default SessionList;
