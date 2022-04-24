import React, { useEffect, useMemo, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useToast } from '../../../context/toast';
import { UserProps } from '../../../models/user';
import { login } from '../../../services/auth/authService';

import { formSchema } from './rules/schema';

import * as S from './style';

const LoginForm: React.FC = () => {
  const { addToast } = useToast();

  const initialValuesForm = useMemo<UserProps>(
    () => ({
      email: localStorage.getItem('app:email') || '',
      password: '',
    }),
    [],
  );

  const [saveEmail, setSaveEmail] = useState(false);

  const storageEmail = (emailToSave: string): void => {
    localStorage.setItem('app:email', emailToSave);
  };

  const formik = useFormik({
    validationSchema: formSchema,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: initialValuesForm,

    onSubmit: async () => {
      try {
        const response = await login(formik.values);
        addToast({
          type: response.type,
          content: response.content,
        });
        if (saveEmail) {
          storageEmail(formik.values.email);
        } else {
          localStorage.removeItem('app:email');
        }
      } catch (error) {
        throw new Error('Failed to connect to server.');
      }
    },
  });

  useEffect(() => {
    if (initialValuesForm.email !== '') setSaveEmail(true);
  }, [initialValuesForm]);

  return (
    <FormikProvider value={formik}>
      <S.FormBox onSubmit={formik.handleSubmit}>
        <S.Title>Login to continue</S.Title>
        <S.ContainerInput hasError={formik.errors.email}>
          <label htmlFor="qa-email-input">E-mail</label>
          <input
            type="text"
            name="email"
            id="qa-email-input"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <S.ContainerError id="qa-email-input-error">
              {formik.errors.email}
            </S.ContainerError>
          )}
        </S.ContainerInput>
        <S.ContainerInput hasError={formik.errors.password}>
          <label htmlFor="qa-password-input">Password</label>
          <input
            type="password"
            name="password"
            id="qa-password-input"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          {formik.errors.password && (
            <S.ContainerError id="qa-password-input-error">
              {formik.errors.password}
            </S.ContainerError>
          )}
        </S.ContainerInput>
        <S.ContainerSaveAndForgot>
          <S.ContainerSaveEmail>
            <input
              type="checkbox"
              id="qa-checkbox-input"
              onChange={() => setSaveEmail(!saveEmail)}
              checked={saveEmail}
            />
            <label htmlFor="qa-checkbox-input">Remember me</label>
          </S.ContainerSaveEmail>
          <S.ContainerResetPassword>
            <span>Forgot Password?</span>
          </S.ContainerResetPassword>
        </S.ContainerSaveAndForgot>
        <S.ButtonSubmit id="qa-submit-button" type="submit">
          LOGIN
        </S.ButtonSubmit>
        <S.TextInfoSocial>or sign up using</S.TextInfoSocial>
        <S.ContainerSocialIcons>
          <S.ContainerIcon href="https://www.facebook.com/" target="_blank">
            <S.IconFacebook />
          </S.ContainerIcon>
          <S.ContainerIcon
            href="https://twitter.com/login?lang=pt/"
            target="_blank"
          >
            <S.IconTwitter />
          </S.ContainerIcon>
          <S.ContainerIcon href="https://mail.google.com/" target="_blank">
            <S.IconGoogle />
          </S.ContainerIcon>
        </S.ContainerSocialIcons>
      </S.FormBox>
    </FormikProvider>
  );
};

export default LoginForm;
