import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  UserOutlined,
  ShopOutlined,
  HomeOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

export const SideMenu: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Menu theme="dark" selectedKeys={[pathname.split('/')[1]]}>
      <Menu.Item icon={<HomeOutlined />} key="">
        <Link to="/">홈</Link>
      </Menu.Item>
      <Menu.Item icon={<NotificationOutlined />} key="notice">
        <Link to="/notices">공지사항</Link>
      </Menu.Item>
      <Menu.Item icon={<UserOutlined />} key="users">
        <Link to="/users">회원관리</Link>
      </Menu.Item>
      <Menu.Item icon={<ShopOutlined />} key="stores">
        <Link to="/stores">가게관리</Link>
      </Menu.Item>
    </Menu>
  );
};
