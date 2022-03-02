import { Layout as AntdLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { SideMenu } from './SideMenu';

const { Header: AntdHeader, Footer: AntdFooter, Sider, Content } = AntdLayout;

export const Layout: React.FC = () => {
  return (
    <AntdLayout>
      <AntdHeader>
        <Header />
      </AntdHeader>
      <AntdLayout>
        <Sider>
          <SideMenu />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </AntdLayout>
      <AntdFooter>
        <Footer />
      </AntdFooter>
    </AntdLayout>
  );
};
