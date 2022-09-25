import fetch from 'base/fetch';

type ICommodities = {
  order: number;
  name: string;
  price: string;
  arrivalTime: string;
  storeName: string;
  storeLocation: string;
}[];


const fetchCommodities = async () => {
  const commodities = await fetch<ICommodities>('/main/commodities', {
    method: 'get',
    query: {
      count: 25,
      test: 'value',
    }
  });

  return commodities;
};

export {
  fetchCommodities,
}

export type {
  ICommodities
}
