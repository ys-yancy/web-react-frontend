// Automatic generated 
import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {shouldShowMenus} from './shared';
import './style';

interface IHeaderProps {
  name?: string;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const menuItems = shouldShowMenus.map((item) => ({
    key: item.key,
    label: <Link to={item.key}>{item.title}</Link>
  }));
  return (
    <Menu mode="horizontal" className="menu" items={menuItems} />
  );
};

export default Header;
