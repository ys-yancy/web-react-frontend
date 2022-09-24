import 'whatwg-fetch';

type IRequestInit = Parameters<typeof window.fetch>[1];

type IFetchOptions = {
  baseUrl?: string;
} & IRequestInit;

interface IFetchResponseContent<T> {
  code: number;
  message: string;
  content: T;
}

const isDev = true;


const fetch = <T = object>(url: string, options: IFetchOptions): Promise<
  IFetchResponseContent<T>
> => {
  const baseUrl = options.baseUrl || (
    isDev ? 'http://localhost' : ''
  );
  const fetchUrl = baseUrl + url;

  const instance = window.fetch(fetchUrl, options);

  return instance.then((response) => {
    return response.text().then((content) => {
      return JSON.parse(content);
    });
  }).catch((error) => {
    console['error'](error);
  }).finally(() => {
    console.log('fetch log');
  });
};

export default fetch;
