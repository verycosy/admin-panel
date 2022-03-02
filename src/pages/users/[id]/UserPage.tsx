import { useParams } from 'react-router-dom';

export const UserPage: React.FC = () => {
  const { userId } = useParams();

  return <div>회원 상세 #{userId}</div>;
};
