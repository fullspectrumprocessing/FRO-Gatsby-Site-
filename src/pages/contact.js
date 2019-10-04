import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import styled from 'styled-components';
import Title from 'components/title';

const StyledDiv = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
`;
const H1 = styled.h1`
  font-size: 50px;
  display: inherit;
`;
const StyledSpan = styled.span`
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <Layout>
      <StyledSpan>
        <H1>Contact Us</H1>
      </StyledSpan>
      <StyledDiv>
        <div>
          <h2> Phone:</h2>
          <h3>(215) 268 - 3594</h3>
        </div>
        <div>
          <h2>Address:</h2>
          <h3>20. N. 3rd Street Philadelphia, PA </h3>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Contact;
