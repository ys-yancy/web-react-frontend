import {useState ,useEffect} from 'react';
import {fetchCommodities, type ICommodities} from './service';

const useCommodities = () => {
  const [
    commodities,
    setCommodities
  ] = useState<ICommodities>([]);

  useEffect(() => {
    fetchCommodities().then((response) => {
      setCommodities(response.content);
    });
  }, []);

  return commodities;
};

export {
  useCommodities,
}
