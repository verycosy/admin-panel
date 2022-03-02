import { UserRole } from './UserRole';

export interface User {
  id: number;
  role: UserRole;
  email: string;
  name: string;
  phoneNumber: string;
  createdAt: string;
  lastLoginTime: string;
}
