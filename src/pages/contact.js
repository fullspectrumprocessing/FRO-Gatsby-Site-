import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import Head from 'components/head';

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
  display: flex;
  font-weight: 600;
  text-shadow: 1px 1px 3px grey;
`;
const H2 = styled.h2`
  font-size: 30px;
  display: inherit;
  margin: 10px 0;
  font-weight: 500;
`;
const H3 = styled.address`
  font-size: 25px;
  display: inherit;
  font-weight: 200;
`;
const StyledTitle = styled.div`
  border-bottom: 2px grey solid;
  padding: 10px 50px;
  margin: 0 50px 0 4rem;
`;
const ContactWrap = styled.div`
  margin: 20px 0;
  :hover {
    background-color: grey;
  }
`;

const StyledForm = styled.form``;

const Contact = () => {
  return (
    <Layout>
      <StyledTitle>
        <H1>Contact Us</H1>
      </StyledTitle>

      <StyledDiv>
        <ContactWrap>
          <H2> Phone:</H2>
          <H3>(215) 268-3594</H3>
        </ContactWrap>
        <ContactWrap>
          <H2>Address:</H2>
          <H3>20 North 3rd Street Philadelphia, PA </H3>
        </ContactWrap>
      </StyledDiv>
    </Layout>
  );
};

export default Contact;
