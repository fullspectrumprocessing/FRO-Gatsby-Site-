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
const H2 = styled.h2`
  font-size: 25px;
  font-weight: 400;
  text-shadow: 0.5px 1px 1px grey;
`;
const P = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin: 0 40px;
  word-spacing: 5px;
  letter-spacing: 1px;
  line-height: 25px;
`;
const BDI = styled.bdi`
  text-decoration: underline;
  margin-right: 5px;
`;
const StyledDiv = styled.section`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
`;

const UL = styled.ul`
  list-style-type: disc;
  text-indent: 25px;
`;
const FRO = 'FRO';
const Policy = () => {
  return (
    <>
      <Layout>
        <StyledTitle>
          <H1>Privacy Policy</H1>
        </StyledTitle>
        <article>
          <StyledDiv>
            <P>
              {' '}
              Federal Recovery Operation and its subsidiaries (collectively,
              “Federal Recovery Operation”, <abbr>{FRO}</abbr>, “us”, “we”, or
              “our”) are committed to maintaining your confidence and trust as
              it relates to the privacy and usage of your information. Please
              read below and learn how we collect, protect, share, and use your
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
            <H2>Information We Collect</H2>
            <P>
              <BDI>Personally Identifiable Information</BDI>: We collect
              personally identifiable information that can identify you such as
              your name, address, telephone number, mobile number, email
              address, and Social Security Number (collectively, “Personally
              Identifiable Information” or “PII”). PII could also be information
              you provide on others, such as co-borrowers.
              <br />
              <BDI>Non-Personally Identifiable Information</BDI>: We also
              collect information such as demographic data, data about your
              online activity, and other information which could not be used to
              identify you (collectively, “Non-Personally Identifiable
              Information” or “NPII”).
              <br />
              <BDI>Information</BDI>: PII and NPII are known together as
              “Information”.
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>How We Collect Information</H2>
            <P>
              <BDI>Information Procided By You</BDI>: Information is collected
              from you when you enter information in connection with an inquiry
              into our services. This Information could be provided via an
              online form, over the phone, or via other means in which you
              interact with our services.
              <br />
              <BDI>Information from service providers</BDI>: Information is
              collected from third party service providers, such as credit
              bureaus and service providers who may have data on your financial
              profile, home, or other demographic information.
              <br />
              <BDI>
                Information from cookies and other tracking technologies
              </BDI>
              : Like many websites, we use cookies, web beacons, and similar
              technologies to record your preferences, track the use of our Site
              and collect Information. This information may include internet
              protocol (IP) addresses, browser type, internet service provider
              (ISP), referring/exit pages, operating system, date/time stamp,
              and/or clickstream data. We may combine this automatically
              collected log information with other Information we collect about
              you. You may choose to set your web browser to refuse cookies, or
              to alert you when cookies are being sent. If you do so, please
              note that some parts of our Site may not function properly.
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>How We Use Your Information</H2>
            <P>
              <BDI>We may use information to</BDI>:
              <UL>
                <li>Deliver the products and services you requested</li>
                <li>Improve customer service</li>
                <li> Improve our Site</li>
                <li>Personalize your user experience</li>
                <li>Communicate with you about products or services</li>
                <li>Manage your business</li>
              </UL>
            </P>
          </StyledDiv>
        </article>
      </Layout>
    </>
  );
};

export default Policy;
