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
  margin-bottom: 10px;
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
  width: 75%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
`;

const UL = styled.ul`
  list-style-type: disc;
  // text-indent: 25px;
`;

const StyledArticle = styled.article`
  padding-bottom: 50px;
`;

const A = styled.a`
  color: #1c3178;
`;
const Address = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
`;
const Policy = () => {
  return (
    <>
      <Layout>
        <Head pageTitle="Privacy Policy" />
        <StyledTitle>
          <H1>Privacy Policy</H1>
        </StyledTitle>
        <StyledArticle>
          <StyledDiv>
            <P>
              {' '}
              Federal Recovery Operation and its subsidiaries (collectively,
              “Federal Recovery Operation”,{' '}
              <abbr title="Federal Recovery Operations">FRO</abbr>, “us”, “we”,
              or “our”) are committed to maintaining your confidence and trust
              as it relates to the privacy and usage of your information. Please
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
              Identifiable Information” or “
              <abbr title="Personally Identifiable Information">PII</abbr>”).{' '}
              <abbr title="Personally Identifiable Information">PII</abbr> could
              also be information you provide on others, such as co-borrowers.
              <br />
              <BDI>Non-Personally Identifiable Information</BDI>: We also
              collect information such as demographic data, data about your
              online activity, and other information which could not be used to
              identify you (collectively, “Non-Personally Identifiable
              Information” or “
              <abbr title="Non-Personally Identifiable Information">NPII</abbr>
              ”).
              <br />
              <BDI>Information</BDI>:{' '}
              <abbr title="Personally Identifiable Information">PII</abbr> and
              <abbr title="Non-Personally Identifiable Information">
                NPII
              </abbr>{' '}
              are known together as “Information”.
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
          <StyledDiv>
            <H2>Who Do We Share Your Information With?</H2>
            <P>
              <BDI>
                <abbr title="Complete Businedd Solutions Group">CBSG</abbr>{' '}
                (Complete Business Solutions Group)
              </BDI>
              : We may share information with the Complete Business Solutions
              Group, which is our holding company.
              <br />
              <BDI>Network Partners</BDI>: In submitting an inquiry for a
              financial product or other service provided through this website,
              you agree that{' '}
              <abbr title="Federal Recovery Operations">FRO</abbr> may share
              your Information with lenders and other third parties which
              provide services to our consumers (including, for example, real
              estate agents or debt relief companies) in our network
              (collectively, “Network Partners”) to deliver the products and
              services you requested. PLEASE NOTE:the Network Partners with
              which you are matched may retain or use your Information whether
              or not you use their services. You should contact these Network
              Partners directly concerning their privacy and information sharing
              practices.
              <br />
              <BDI>
                <abbr title="Federal Recovery Operations">FRO</abbr> Vendors
              </BDI>
              : We may share your Information with vendors that perform certain
              services on our behalf (“
              <abbr title="Federal Recovery Operations">FRO</abbr> Vendors”)
              including, but not limited to, credit bureaus, marketing partners,
              or entities providing business analysis and/or website or product
              support.
              <br />
              <BDI>Other Situations</BDI> : <br />
              We may also disclose your information at our sole discretion:
              <UL>
                <li>
                  In response to a subpoena or similar investigative demand, a
                  court order, a request for cooperation from a law enforcement
                  agency, self-regulatory body, or other governmental agency; to
                  establish or exercise our legal rights; to defend against
                  legal claims; or as we reasonably believe is required by law.
                  In such cases, we may raise or waive any legal objection or
                  right available to us.{' '}
                </li>
                <li>
                  {' '}
                  When we believe disclosure is appropriate in order to
                  investigate, prevent, or take action regarding actual or
                  suspected illegal activity or other wrongdoing; to protect and
                  defend the rights, property, or safety of the{' '}
                  <abbr title="Federal Recovery Operations">FRO</abbr> Business,
                  our users, our employees, or others; or to enforce our Site’s
                  terms and condition or other agreements or policies.
                </li>
                <li>
                  {' '}
                  In connection with a substantial corporate transaction
                  involving the{' '}
                  <abbr title="Federal Recovery Operations">FRO</abbr>
                  Business, such as a sale of{' '}
                  <abbr title="Federal Recovery Operations">FRO</abbr> or any
                  entity, brand or division thereof, a divestiture, merger,
                  consolidation, asset sale, or bankruptcy.
                </li>
                <li>
                  {' '}
                  In connection with state and/or federal licensing requirements
                  regarding the reporting of Information contained in the
                  advance inquiries we receive from you. You authorize{' '}
                  <abbr title="Federal Recovery Operations">FRO</abbr> to obtain
                  any and all required information from the Network Partners you
                  were matched with in order for{' '}
                  <abbr title="Federal Recovery Operations">FRO</abbr> to comply
                  with current laws and regulations as well as with any requests
                  from state or federal regulators. This information could
                  include, but is not necessarily limited to, the advance you
                  selected and the terms of the advance you selected.
                </li>
                <li>
                  We may share Non-Personally Identifiable Information with
                  third parties in our discretion.
                </li>
              </UL>
            </P>
          </StyledDiv>

          <StyledDiv>
            <H2>Subscriptions</H2>
            <P>
              <BDI>Unsubscribe</BDI>:
              <br />
              If at any time you do not wish to receive communications from the{' '}
              <abbr title="Federal Recovery Operations">FRO</abbr> Business, you
              may email{' '}
              <a href="mailto:unsubscribe@federalrecoveryoperations.com">
                {' '}
                FRO{' '}
              </a>{' '}
              to unsubscribe. There may be an unsubscribe link at the bottom of
              emails sent from the{' '}
              <abbr title="Federal Recovery Operations">FRO</abbr> Business.
              <br />
              <BDI>Advertising on third party sites</BDI>:
              <br />
              We may use third-party tracking technology. This technology allows
              targeted advertisements to you from{' '}
              <abbr title="Federal Recovery Operations">FRO</abbr> Business.
              Some of these advertising companies may be networks that are
              members of the Network Advertising Initiative which offers a
              single location to opt out of ad targeting from member companies.
              The opt-out is available at
              http://optout.networkadvertising.org/#!/
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>Updating and Accessing Your Information</H2>
            <P>
              The appropriate method(s) for accessing your Information, if any,
              will depend on which Site or services you have used. Depending on
              the respective Site or service, you may have the ability to view
              or edit some of your Information online. If you have submitted a
              funding request with a{' '}
              <abbr title="Federal Recovery Operations">FRO</abbr> Business, you
              can update your personal information by contacting our Customer
              Care Department at:
              <Address>
                <br />
                <A
                  href="https://www.federalrecoveryoperations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@www.federalrecovery.com
                </A>{' '}
                20 North 3rd St, Philadelphia, PA 19106.
              </Address>
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>How We Protect Your Information</H2>
            <P>
              We take what we believe to be industry standard security measures
              (including physical, electronic, and procedural measures) to help
              safeguard your Information from unauthorized access and
              disclosure. We also require employees to comply with information
              security safeguards, we use encryption in the transmission of your
              Information between your system and ours, and we use firewalls and
              other intrusion detection and prevention controls to help prevent
              unauthorized persona from gaining access to your Information. No
              system can be completely secure. Therefore, although we take steps
              to secure your Information, we cannot guarantee that your
              Information, searches, or other communication will always remain
              secure.
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>Changes to This Privacy Policy</H2>
            <P>
              <abbr title="Federal Recovery Operations">FRO</abbr> has the
              discretion to update this privacy policy at any time. When we do,
              we will revise the date at the bottom of this page. We encourage
              you to frequently check this page for any changes to stay informed
              about how we are helping to protect the Information we collect.
              You acknowledge and agree that it is your responsibility to review
              this privacy policy periodically and become aware of
              modifications.
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>Visiting Our Websites From Outside the United States</H2>
            <P>
              The Site is governed by the laws of the United States, and is
              intended for the enjoyment of residents of the United States only.
              We make no representation that the Site is governed by or operated
              in accordance with the laws of any other nation.
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>
              Compliance With Children&apos;s Online Privacy Protection Rule
            </H2>
            <P>
              We do not knowingly collect, use or disclose personally
              identifiable information from anyone under 13 years of age. If we
              determine upon collection that a user is under this age, we will
              not use or maintain his/her PII without the parent/guardian’s
              consent. If we become aware that we have unknowingly collected PII
              from a child under the age of 13, we will make reasonable efforts
              to delete such information from our records.
            </P>
          </StyledDiv>
          {/* NOT USING CHATBOX SERVICE NO NEED FOR CHATBOT DISCLOSURE */}

          <StyledDiv>
            <H2>
              Calls To and From{' '}
              <abbr title="Fedral Recovery Operations">FRO</abbr>
            </H2>
            <P>
              Calls to and from{' '}
              <abbr title="Federal Recovery OPerations">FRO</abbr> may be
              recorded and/or monitored for quality and training purposes.
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>
              <abbr title="Federal Recoevery Operations">FRO</abbr> Uses Plaid
              Technologies
            </H2>
            <P>
              <abbr title="Federal Recovery Operations">FRO</abbr> uses Plaid
              Technologies, Inc. (“
              <abbr title="Plaid Technologies, Inc">Plaid</abbr>”) to gather End
              User’s data from financial institutions. By using our service, you
              grant <abbr title="Federal Recovery Operations">FRO</abbr> and
              <abbr title="Plaid Technologies, Inc">Plaid</abbr> the right, the
              power, and authority to act on your behalf to access and transmit
              your personal and financial information from the relevant
              financial institution. You agree to your personal and financial
              information being transferred, stored and processed by Plaid in
              accordance with the Plaid Privacy Policy. See{' '}
              <abbr title="Plaid Technologies, Inc">Plaid</abbr> Privacy Policy
              for more details.
            </P>
          </StyledDiv>
          <StyledDiv>
            <H2>How To Contact Us</H2>
            <P>
              If you have any questions about this privacy policy, the practices
              of any <abbr title="Federal Recovery Operations">FRO</abbr>{' '}
              Business, or your dealings with an{' '}
              <abbr title="Federal Recovery Operations">FRO</abbr> Business,
              please contact us at:
              <Address>
                <br />
                <p>Compliance Officer </p>
                Federal Recovery Operations <br />
                <p>
                  20 North 3<sup>rd</sup> Street
                </p>
                Philadelphia, PA 19106
                <br />
                <br />
                <p>OR</p>
                <br />
                Email Us: 
                <A href="mailto:unsubscribe@federalrecoveryoperations.com">
                  <abbr title="Federal Recovery Operations">FRO</abbr>
                </A>
              </Address>
            </P>
          </StyledDiv>
        </StyledArticle>
      </Layout>
    </>
  );
};

export default Policy;
