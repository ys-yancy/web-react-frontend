import fetch from 'base/fetch';

interface IBasicInfo {
  name: string;
  terminal: 'mobile' | 'web',
}

const fetchBasicInfo = async () => {
  const basicInfo = await fetch<IBasicInfo>('/main/oaBasicInfo', {
    method: 'get',
  });

  return basicInfo;
};

export {
  fetchBasicInfo,
}

export type {
  IBasicInfo
}
