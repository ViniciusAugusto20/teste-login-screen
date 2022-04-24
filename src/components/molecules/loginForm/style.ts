import styled from 'styled-components';
import { color } from '../../../assets/css/color';
import { typography } from '../../../assets/css/typography';
import { InputProps } from './types';

import IcoFacebook from '../../../assets/icons/icon-facebook.svg';
import IcoTwitter from '../../../assets/icons/icon-twitter.svg';
import IcoGoogle from '../../../assets/icons/icon-google.svg';

export const Title = styled.span`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3}px;
  margin: 25px 0px;
  color: ${color.blue};
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

export const ContainerInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  margin: 10px 0px;
  label {
    align-self: start;
    margin-bottom: 5px;
    color: ${color.blue};
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.s3}px;
  }

  input {
    cursor: pointer;
    display: inline-block;
    height: 50px;
    border: ${({ hasError }) =>
      hasError ? `1px solid ${color.red}` : `1px solid ${color.black}`};
    background: ${color.white};
    appearance: none;
    outline: none;
    border-radius: 5px;
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s2}px;

    padding: 0px 20px;
    &:focus {
      border: 1px solid ${color.mediumBlue};
    }
  }
`;

export const ButtonSubmit = styled.button`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${color.white};
  background-color: ${color.blue};
  border: none;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2}px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const ContainerError = styled.div`
  margin-top: 5px;
  color: ${color.red};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s0}px;
`;

export const ContainerSaveAndForgot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const ContainerSaveEmail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${color.gray};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s1}px;
  input {
    cursor: pointer;
  }
`;

export const ContainerResetPassword = styled.div`
  color: ${color.black};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.semiBold};
  font-size: ${typography.size.s1}px;
  cursor: pointer;
`;

export const ContainerSocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextInfoSocial = styled.span`
  margin-top: 50px;
  color: ${color.gray};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s0}px;
`;

export const IconFacebook = styled.i`
  background-image: url(${IcoFacebook});
  mask-size: cover;
  display: inline-block;
  width: 38px;
  height: 38px;
  margin-right: 10px;
`;

export const IconTwitter = styled.i`
  background-image: url(${IcoTwitter});
  mask-size: cover;
  display: inline-block;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  margin-right: 10px;
  color: transparent;
`;

export const IconGoogle = styled.i`
  background-image: url(${IcoGoogle});
  mask-size: cover;
  display: inline-block;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const ContainerIcon = styled.a`
  cursor: pointer;
`;
