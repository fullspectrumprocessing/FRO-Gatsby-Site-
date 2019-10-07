import React from 'react';
import Layout from '../components/layout/layout';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 50px;
  display: flex;
  font-weight: 600;
  text-shadow: 1px 1px 3px grey;
`;
const StyledTitle = styled.div`
  border-bottom: 2px grey solid;
  padding: 10px 50px;
  margin: 0 50px 0 4rem;
`;

const Terms = () => {
  return (
    <>
      <Layout>
        <StyledTitle>
          <H1>Terms & Conditions</H1>
        </StyledTitle>
      </Layout>
    </>
  );
};

export default Terms;
