import React from 'react';
import { LoginForm } from '../../components';

import * as S from './style';

const Login = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.Left />
      <S.Right>
        <S.Content>
          <LoginForm />
        </S.Content>
      </S.Right>
    </S.Wrapper>
  );
};

export default Login;
