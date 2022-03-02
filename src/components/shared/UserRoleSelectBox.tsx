import { Select } from 'antd';
import { UserRole } from '../../types/users/UserRole';

const { Option } = Select;

interface Props {
  role?: UserRole;
}

export const UserRoleSelectBox: React.FC<Props> = ({ role }) => {
  return (
    <Select defaultValue={role} placeholder="회원권한">
      <Option value={UserRole.Admin}>관리자</Option>
      <Option value={UserRole.Owner}>점주</Option>
      <Option value={UserRole.Customer}>소비자</Option>
    </Select>
  );
};
