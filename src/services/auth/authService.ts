import { BASE_URL } from '../../config/env';
import { UserLoginProps, UserProps } from '../../models/user';
import { putData, getData } from '../defaultServices';

export const getUsers = async (): Promise<UserProps[]> => {
  const response = await getData(`${BASE_URL}/users`);
  return response;
};

export const updateUserLoginInfo = async (
  userInfos: UserProps,
): Promise<UserProps> => {
  const response = await putData(
    `${BASE_URL}/users/${userInfos.id}`,
    userInfos,
  );
  return response;
};

const handleSecurityAccess = (user: UserProps): UserLoginProps => {
  if (user.failureLogin === 3) {
    const updateParams = {
      ...user,
      failureLogin: user.failureLogin + 1,
    };
    updateUserLoginInfo(updateParams);
    return {
      type: 'error',
      content: 'Notice! One more fail try and the account will be blocked.',
    };
  }

  if (user.failureLogin === 4) {
    const updateParams = {
      ...user,
      failureLogin: user.failureLogin + 1,
      blocked: true,
    };
    updateUserLoginInfo(updateParams);
    return {
      type: 'error',
      content: 'User blocked by security. Please click on Forgot password.',
    };
  }

  const updateParams = {
    ...user,
    failureLogin:
      user.failureLogin === undefined || user.failureLogin === 0
        ? 1
        : user.failureLogin + 1,
  };
  updateUserLoginInfo(updateParams);

  return { type: 'error', content: 'E-mail or password is invalid.' };
};

const validateLoginUser = async (
  userLogin: UserProps,
): Promise<UserLoginProps> => {
  const allUsers = await getUsers();
  const findedUser = allUsers.find(
    (currentUser) => currentUser.email === userLogin.email,
  );

  if (!findedUser) {
    return { type: 'error', content: 'User not found.' };
  }

  if (
    findedUser.blocked ||
    (findedUser.failureLogin && findedUser.failureLogin >= 5)
  ) {
    return {
      type: 'error',
      content: 'User blocked by security. Please click on Forgot password.',
    };
  }

  if (userLogin.password !== findedUser.password) {
    return handleSecurityAccess(findedUser);
  }
  return { type: 'success', content: 'Login successfully.' };
};

export const login = async (
  userToLogin: UserProps,
): Promise<UserLoginProps> => {
  return validateLoginUser(userToLogin);
};
