import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { sizes } from '../../../assets/css/devices';

const customMedia = generateMedia({
  ...sizes,
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  width: fit-content;
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;

  ${customMedia.lessThan('smallTablet')`
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
  `}
`;
