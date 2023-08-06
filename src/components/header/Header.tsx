import React from 'react';
import {NavBar} from 'antd-mobile';
import './style';

export interface IHeaderProps {
  name?: string;
}

const Header: React.FC<IHeaderProps> = ({
  name,
}) => {
  return (
    <NavBar className="mobile-header" back={null}>
      <span>{name || '加载中...' }</span>
    </NavBar>
  );
};

export default Header;
