import styled from 'styled-components';
import { Link } from 'gatsby';
export const StyledLink = styled(Link)`
  margin-right: 10px;
  :hover {
    border-bottom: 2px grey solid;
  }
`;
export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
