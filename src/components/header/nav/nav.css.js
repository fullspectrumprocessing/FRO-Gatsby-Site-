import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../../../styledComps';

export const StyledLink = styled(Link)`
  margin-right: 10px;
  margin-left: 10px;
  :hover {
    border-bottom: 2px grey solid;
  }
`;
export const Container = styled.nav`
  @media ${device.tablet} {
    padding-top: 20px;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
