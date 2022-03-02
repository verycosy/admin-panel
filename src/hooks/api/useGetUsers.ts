import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { User, UserRole } from '../../types/users';

export const useGetUsers = () => {
  return useQuery<User[], AxiosError>('get-users', () =>
    Promise.resolve([
      {
        id: 1,
        name: '테스터1',
        role: UserRole.Admin,
        email: 'tester1@tester.com',
        phoneNumber: '010-1111-1111',
        createdAt: new Date().toLocaleTimeString(),
        lastLoginTime: new Date().toLocaleTimeString(),
      },
      {
        id: 2,
        name: '테스터2',
        role: UserRole.Customer,
        email: 'tester2@tester.com',
        phoneNumber: '010-1111-2222',
        createdAt: new Date().toLocaleTimeString(),
        lastLoginTime: new Date().toLocaleTimeString(),
      },
      {
        id: 3,
        name: '테스터3',
        role: UserRole.Owner,
        email: 'tester3@tester.com',
        phoneNumber: '010-1111-3333',
        createdAt: new Date().toLocaleTimeString(),
        lastLoginTime: new Date().toLocaleTimeString(),
      },
    ] as User[])
  );
};
