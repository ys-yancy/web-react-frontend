// Automatic generated 
import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {Card, List, Image, Rate} from 'antd';
import Species from '@/components/species';
import {useCommodities} from './hooks';
import {gridLayout} from './shared';

import type {ICommodities} from './service';

import './style';

interface ICommoditiesProps {

}

const Commodities: React.FC<ICommoditiesProps> = () => {
  const commodities = useCommodities();

  const renderCommodities = useCallback((item: ICommodities[number]) => {
    return (
      <List.Item>
        <Link to={`/detail?id=${item.order}`}>
          <Card bodyStyle={{padding: 0}} bordered={false}>
            <Image preview={false} src={item.image} />
            <h3 className="store-name">{item.storeName}（{item.storeLocation}）</h3>
            <Rate disabled defaultValue={4} style={{fontSize: 16}} />
            <Species value={item.price} />
          </Card>
        </Link>
      </List.Item>
    );
  }, []);

  return (
    <List
      className="commodities"
      grid={gridLayout}
      dataSource={commodities}
      renderItem={renderCommodities}
    />
  );
};

export default Commodities;
