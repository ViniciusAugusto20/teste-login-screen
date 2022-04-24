import styled from 'styled-components';
import devices from '../../assets/css/devices';
import LoginImg from '../../assets/img/loginImg.jpg';

export const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #ffffff;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  background-image: url(${LoginImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;

  @media ${devices.tablet} {
    display: none;
  }
  @media ${devices.laptop} {
    width: 50%;
  }
`;

export const Right = styled.div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const Help = styled.a`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-self: flex-end;
  align-items: center;
  text-transform: uppercase;
  margin-top: 20px;
  margin-right: 10px;
  @media ${devices.mobileS} {
    margin-right: 0;
  }
  & span {
    color: #64c19b;
    font-weight: 700;
    font-size: 12px;
    display: block;
    margin-left: 8px;
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 64px 0px;
  margin: auto;
`;
