import React from 'react';

const cacheComponents: {
  [key: string]: React.ComponentType<any>;
} = {};

const imports = (r: any) => {
  r.keys().forEach((key: string) => {
    const meta = r(key).default;
    if (meta?.router && meta?.component) {
      cacheComponents[meta.router] = React.lazy(meta.component);
    }
  });
};

imports(require.context('./', true, /index\.ts$/));

export default Object.entries(cacheComponents);
