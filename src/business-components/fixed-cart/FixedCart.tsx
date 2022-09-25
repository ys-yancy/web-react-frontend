// Automatic generated 
import React, {useState, useCallback} from 'react';
import {Drawer, Space, Button, message} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import {delay} from 'base/delay';
import Commodities from 'business-components/commodities';
import './style';

const FixedCart: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [cartPanelVisible, setCartPanelVisible] = useState(false);

  const showCartPanel = useCallback(() => {
    setCartPanelVisible(true);
  }, []);

  const hideCartPanel = useCallback(() => {
    setCartPanelVisible(false);
  }, []);

  const handlePurchase = useCallback(() => {
    hideCartPanel();
    delay().then(() => {
      message.success('购买成功');
    });
  }, [hideCartPanel]);

  const extraContent = (
    <Space>
      <Button
        type="primary"
        onClick={handlePurchase}>
        购买
      </Button>
    </Space>
  );

  return (
    <div className="fixed-cart">
      <div className="cart-content" onClick={showCartPanel}>
        {children}
        <ShoppingCartOutlined />
      </div>
      <Drawer
        title="Cart"
        width={500}
        extra={extraContent}
        open={cartPanelVisible}
        onClose={hideCartPanel}
      >
        <Commodities />
      </Drawer>
    </div>
  );
};

export default FixedCart;

