import { Button, Card, Input, Select, Space, Table } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserRoleSelectBox } from '../../components/shared/UserRoleSelectBox';
import { UserRoleTag } from '../../components/shared/UserRoleTag';
import { useGetUsers } from '../../hooks/api/useGetUsers';
import { UserRole } from '../../types/users';

const { Option } = Select;

export const UsersPage: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useGetUsers();

  if (isLoading) {
    return <div>Loading ... </div>;
  }

  if (error) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <Space direction="vertical" size="large">
      <Outlet />

      <Card title="회원 목록">
        <Space direction="vertical">
          <Space>
            <UserRoleSelectBox />
            <Select placeholder="검색기준">
              <Option value="name">이름</Option>
              <Option value="email">이메일</Option>
              <Option value="phoneNumber">휴대폰번호</Option>
            </Select>
            <Input placeholder="검색 키워드를 입력해주세요." />
            <Button type="primary">검색</Button>
          </Space>
          <Table
            dataSource={data}
            columns={columns}
            rowKey={(record) => record.id}
            onRow={(record) => {
              return {
                onClick: () => navigate(`${record.id}`),
              };
            }}
          />
        </Space>
      </Card>
    </Space>
  );
};

const columns = [
  {
    title: '회원번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '권한',
    dataIndex: 'role',
    key: 'role',
    render: (role: UserRole) => <UserRoleTag role={role} />,
  },
  {
    title: '이메일',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '휴대폰 번호',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: '가입일',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '최종 접속',
    dataIndex: 'lastLoginTime',
    key: 'lastLoginTime',
  },
];
