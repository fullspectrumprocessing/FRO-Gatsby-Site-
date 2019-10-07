import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Head from 'components/head';
const StyledTitle = styled.div`
  border-bottom: 2px grey solid;
  padding: 10px 50px;
  margin: 0 50px 0 4rem;
`;
const H1 = styled.h1`
  font-size: 50px;
  display: flex;
  font-weight: 600;
  text-shadow: 1px 1px 3px grey;
`;
const StyledDiv = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
`;
const Policy = () => {
  return (
    <>
      <Layout>
        <StyledTitle>
          <H1>Policy Page</H1>
        </StyledTitle>
        <StyledDiv />
      </Layout>
    </>
  );
};

export default Policy;
