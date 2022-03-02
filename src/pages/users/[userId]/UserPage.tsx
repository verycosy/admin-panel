import { Button, Card, Descriptions, Form, Input, Space } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserRoleSelectBox } from '../../../components/shared/UserRoleSelectBox';
import { useGetUsers } from '../../../hooks/api/useGetUsers';

export const UserPage: React.FC = () => {
  const [form] = Form.useForm();
  const { userId } = useParams();
  const { data: users } = useGetUsers();
  const user = users?.find((user) => user.id === Number(userId));

  useEffect(() => {
    form.setFieldsValue(user);
  }, [form, user]);

  const onFinish = (value: any) => {
    console.log(value);
  };

  if (!user) {
    return <div>존재하지 않는 회원</div>;
  }

  return (
    <Card>
      <Form form={form} onFinish={onFinish}>
        <Space direction="vertical" size="middle">
          <Descriptions title={`회원 정보 수정 #${userId}`} column={4} bordered>
            <Descriptions.Item label="권한">
              <Form.Item name="role">
                <UserRoleSelectBox role={user.role} />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="이름">
              <Form.Item name="name">
                <Input />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="이메일">{user.email}</Descriptions.Item>
            <Descriptions.Item label="휴대폰 번호">
              <Form.Item name="phoneNumber">
                <Input />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="새 비밀빈호">
              <Form.Item name="password">
                <Input type="password" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="새 비밀번호 확인">
              <Form.Item name="retypedPassword">
                <Input type="password" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions />
          </Descriptions>
          <Button type="primary" htmlType="submit">
            수정
          </Button>
        </Space>
      </Form>
    </Card>
  );
};
