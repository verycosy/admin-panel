import { Tag } from 'antd';
import { UserRole } from '../../types/users';

const userRoleTags = {
  [UserRole.Admin]: {
    color: 'red',
    text: '관리자',
  },
  [UserRole.Customer]: {
    color: 'geekblue',
    text: '소비자',
  },
  [UserRole.Owner]: {
    color: 'green',
    text: '점주',
  },
};

interface Props {
  role: UserRole;
}

export const UserRoleTag: React.FC<Props> = ({ role }) => {
  const tag = userRoleTags[role];

  return (
    <Tag color={tag.color} key={role}>
      {tag.text}
    </Tag>
  );
};
