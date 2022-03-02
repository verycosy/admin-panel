import {
  DollarOutlined,
  ScanOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Card, Space, Statistic, Table, Typography } from 'antd';

const { Title } = Typography;

export const HomePage: React.FC = () => {
  return (
    <Space size="large" align="start" direction="vertical">
      <Card>
        <Title level={3}>
          <UserOutlined /> 회원
        </Title>
        <Space size="large">
          <Card title="오늘">
            <Space size="large">
              <Statistic title="점주" value={200} suffix="명" />
              <Statistic title="소비자" value={1000} suffix="명" />
            </Space>
          </Card>

          <Card title="이번 달">
            <Space size="large">
              <Statistic title="점주" value={200} suffix="명" />
              <Statistic title="소비자" value={1000} suffix="명" />
            </Space>
          </Card>

          <Card title="누적">
            <Space size="large">
              <Statistic title="점주" value={200} suffix="명" />
              <Statistic title="소비자" value={1000} suffix="명" />
            </Space>
          </Card>
        </Space>
      </Card>

      <Card>
        <Title level={3}>
          <ShopOutlined /> 가맹점
        </Title>
        <Space size="large">
          <Table
            pagination={false}
            title={() => '광주'}
            columns={[
              {
                title: '동 이름',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '가게 수',
                dataIndex: 'count',
                key: 'count',
              },
            ]}
            dataSource={[
              {
                id: 1,
                name: '동명동',
                count: 30,
              },
            ]}
          />

          <Table
            pagination={false}
            title={() => '시흥'}
            columns={[
              {
                title: '동 이름',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '가게 수',
                dataIndex: 'count',
                key: 'count',
              },
            ]}
            dataSource={[
              {
                id: 1,
                name: '배곧',
                count: 30,
              },
            ]}
          />
        </Space>
      </Card>

      <Card>
        <Title level={3}>
          <ScanOutlined /> 기프티콘
        </Title>
        <Space size="large">
          <Card title="오늘">
            <Space size="large">
              <Statistic title="발행" value={200} suffix="건" />
              <Statistic title="취소" value={200} suffix="건" />
              <Statistic title="사용" value={1000} suffix="건" />
              <Statistic title="환불" value={1000} suffix="건" />
            </Space>
          </Card>

          <Card title="이번 달">
            <Space size="large">
              <Statistic title="발행" value={200} suffix="건" />
              <Statistic title="취소" value={200} suffix="건" />
              <Statistic title="사용" value={1000} suffix="건" />
              <Statistic title="환불" value={1000} suffix="건" />
            </Space>
          </Card>

          <Card title="누적">
            <Space size="large">
              <Statistic title="발행" value={200} suffix="건" />
              <Statistic title="취소" value={200} suffix="건" />
              <Statistic title="사용" value={1000} suffix="건" />
              <Statistic title="환불" value={1000} suffix="건" />
            </Space>
          </Card>
        </Space>
      </Card>

      <Card>
        <Title level={3}>
          <DollarOutlined /> 주문
        </Title>
        <Space size="large">
          <Card title="오늘">
            <Space size="large">
              <Statistic title="주문금액" value={2750000} suffix="원" />
              <Statistic title="취소금액" value={130000} suffix="원" />
              <Statistic title="사용금액" value={1500000} suffix="원" />
            </Space>
          </Card>

          <Card title="이번 달">
            <Space size="large">
              <Statistic title="주문금액" value={2750000} suffix="원" />
              <Statistic title="취소금액" value={130000} suffix="원" />
              <Statistic title="사용금액" value={1500000} suffix="원" />
            </Space>
          </Card>

          <Card title="누적">
            <Space size="large">
              <Statistic title="주문금액" value={2750000} suffix="원" />
              <Statistic title="취소금액" value={130000} suffix="원" />
              <Statistic title="사용금액" value={1500000} suffix="원" />
            </Space>
          </Card>
        </Space>
      </Card>
    </Space>
  );
};
