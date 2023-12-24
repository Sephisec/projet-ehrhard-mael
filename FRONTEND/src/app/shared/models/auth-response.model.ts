import { User } from './user.model';

export class AuthResponse {
  access_token: string;
  user: User;
}
