import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline} from 'antd-mobile-icons';

export const shouldShowMenus = [
  {
    key: '/home',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: '/todo',
    title: '待办',
    icon: <UnorderedListOutline />,
  },
  {
    key: '/message',
    title: '消息',
    icon: <MessageOutline />,
  },
  {
    key: '/me',
    title: '我的',
    icon: <UserOutline />,
  },
];