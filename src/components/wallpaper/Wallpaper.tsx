import React from 'react';
import InternalWallpaper from './images/wallpaper.jpg';
import './style';

const Wallpaper: React.FC = () => {
  return (
    <img src={InternalWallpaper} className="wallpaper" />
  )
};

export default Wallpaper;