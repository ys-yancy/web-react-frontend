const queryString = (query?: {[key: string]: any}): string => {
  return Object.keys(query || {}).reduce((value, key) => {
    if (value) {
      return`${value}&${key}=${query![key]}`;
    }
    
    return`${key}=${query![key]}`;
  }, '');


}

export {
  queryString,
}

