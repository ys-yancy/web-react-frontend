import 'whatwg-fetch';

type IRequestInit = Parameters<typeof window.fetch>[1];

type IFetchOptions = {
  baseUrl?: string;
} & IRequestInit;

const isDev = true;


const fetch = <T>(url: string, options: IFetchOptions): Promise<T> => {
  const baseUrl = options.baseUrl || (
    isDev ? 'http://localhost' : ''
  );
  const fetchUrl = baseUrl + url;

  const instance = window.fetch(fetchUrl, options);

  return instance.then((response) => {
    return response.text();
  }).catch((error) => {
    console['error'](error);
  }).finally(() => {
    console.log('fetch log');
  }) as Promise<T>;
};

export default fetch;
