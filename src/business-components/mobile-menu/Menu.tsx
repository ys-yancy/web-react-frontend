import React from 'react';
import {Link} from 'react-router-dom';
import {TabBar} from 'antd-mobile';
import {shouldShowMenus} from './shared';
import './style';

interface IMobileMenuProps {

}

const MobileMenu: React.FC<IMobileMenuProps> = () => {
  const menuContent = shouldShowMenus.map((item) => {
    return (
      <TabBar.Item
        key={item.key}
        icon={item.icon}
        title={<Link to={item.key}>{item.title}</Link>}
      />
    )
  });
  console.log(12121212);
  return (
    <TabBar className="mobile-menu">
      {menuContent}
    </TabBar>
  );
};

export default MobileMenu;
