import { Link } from 'react-router-dom';

export const SideMenu: React.FC = () => {
  return (
    <nav>
      <Link to="/users">회원관리</Link>
    </nav>
  );
};
