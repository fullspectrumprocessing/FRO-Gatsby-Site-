import styled from 'styled-components';
import { accent } from 'constants/theme';
import { device } from '../../styledComps';

export const Container = styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;

  background-color: ${({ isVisible }) => (isVisible ? accent : ' #fff')};
`;

export const StyledImg = styled.img`
  width: 40%;
`;
export const H3 = styled.h3`
  @media ${device.desktopL} {
    font-size: 45px;
  }
  @media ${device.desktopM} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`;
