import 'whatwg-fetch';
import * as location from './location';

type IRequestInit = Parameters<typeof window.fetch>[1];

type IRequestQuery = {
  [key: string]: string | number;
}

type IFetchOptions = {
  baseUrl?: string;
  query?: IRequestQuery;
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
  const query = location.queryString(options.query);
  const baseUrl = options.baseUrl || (
    isDev ? 'http://localhost' : ''
  );
  const fetchUrl = (url.startsWith('http') ? '' : baseUrl) + url + (
    query ? `?${query}` : ''
  );

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
