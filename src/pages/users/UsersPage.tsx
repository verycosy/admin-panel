import { Link, Outlet } from 'react-router-dom';

export const UsersPage: React.FC = () => {
  return (
    <div>
      <Outlet />
      <Link to="1">회원관리</Link>
    </div>
  );
};
