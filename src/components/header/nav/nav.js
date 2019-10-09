import React from 'react';
import { Container, StyledLink } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <StyledLink to="/">Home</StyledLink>
        {/* <StyledLink to="/about">About</StyledLink>{' '} */}
        <StyledLink to="/contact">Contact</StyledLink>{' '}
        <StyledLink to="/terms">Terms and Conditions</StyledLink>
        <StyledLink to="/policy">Our Policy</StyledLink>
      </li>
      {/* <li>
        <a href="https://github.com/fabe/gatsby-universal">GitHub</a>
      </li> */}
    </ul>
  </Container>
);

export default Nav;
