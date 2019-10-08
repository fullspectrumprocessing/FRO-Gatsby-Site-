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
const P = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin: 0 40px;
  word-spacing: 5px;
  letter-spacing: 1px;
  line-height: 25px;
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
const FRO = 'FRO';
const Policy = () => {
  return (
    <>
      <Layout>
        <StyledTitle>
          <H1>Privacy Policy</H1>
        </StyledTitle>
        <StyledDiv>
          <P>
            {' '}
            Federal Recovery Operation and its subsidiaries (collectively,
            “Federal Recovery Operation”, <abbr>{FRO}</abbr>, “us”, “we”, or
            “our”) are committed to maintaining your confidence and trust as it
            relates to the privacy and usage of your information. Please read
            below and learn how we collect, protect, share, and use your
            information as part of our technology platforms, and all of our
            products and services.
          </P>
          <br />
          <P>
            This privacy policy applies to this site
            https://www.federalrecoveryoperations.com
          </P>
        </StyledDiv>

        <P />

        <StyledDiv>
          <h3>Information We Collect :</h3>
          <P>
            <p>Personally Identifiable Information: </p>
            We collect personally identifiable information that can identify you
            such as your name, address, telephone number, mobile number, email
            address, and Social Security Number (collectively, “Personally
            Identifiable Information” or “PII”). PII could also be information
            you provide on others, such as co-borrowers.
          </P>
          <P>
            <p>Non-Personally Identifiable Information:</p>
            We also collect information such as demographic data, data about
            your online activity, and other information which could not be used
            to identify you (collectively, “Non-Personally Identifiable
            Information” or “NPII”). Information: PII and NPII are known
            together as “Information”.
          </P>
        </StyledDiv>
      </Layout>
    </>
  );
};

export default Policy;
