// Automatic generated 
import React, {useCallback} from 'react';
import {Avatar, List, message} from 'antd';
import {useCommodities} from './hooks';

interface ICommoditiesProps {

}

const avatar = 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1993226712.jpg?x=0&y=0&h=150&w=242&vh=150.00&vw=242.00&oh=150.00&ow=242.00';

const Commodities: React.FC<ICommoditiesProps> = () => {
  const commodities = useCommodities();

  const handleClick = useCallback(() => {
    message.success('暂不支持');
  }, []);

  console.log(commodities);

  return (
    <List className="commodities">
      {commodities.map((item) => (
        <List.Item key={item.order} onClick={handleClick}>
          <List.Item.Meta
            title={item.name}
            description={item.storeName}
            avatar={<Avatar src={avatar} />}
          />
          <div>{item.price}</div>
        </List.Item>
      ))}
    </List>
  );
};

export default Commodities;
