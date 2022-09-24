import {useState, useEffect} from 'react';
import * as api from './mobile-service';
import type {
  IBasicInfo
} from './mobile-service';

export const useInitialize = () => {
  const [basicInfo, setBasicInfo] = useState<Nullable<IBasicInfo>>(null);

  useEffect(() => {
    api.fetchBasicInfo().then((response) => {
      setBasicInfo(response.content);
    });
  }, []);

  return basicInfo;
};