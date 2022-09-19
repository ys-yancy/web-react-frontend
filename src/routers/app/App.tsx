import React, {useEffect} from 'react';
import fetch from '../../base/fetch';

const App: React.FC = (props, b) => {
  useEffect(() => {
    fetch<string>('/test', {
      method: 'get',
    }).then((response) => {
      console.log(JSON.parse(response));
    })
  }, []);

  return <div>App</div>;
};

export default App;
