import { MessageType } from '../components/atoms/toast/types';

export type UserProps = {
  id?: number;
  email: string;
  password: string;
  blocked?: boolean;
  failureLogin?: number;
};

export type UserLoginProps = {
  type: MessageType;
  content: string;
};
