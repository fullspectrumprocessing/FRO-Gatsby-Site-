import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';

import * as S from '../styledComps';

const Terms = () => {
  return (
    <>
      <Layout>
        <S.StyledTitle>
          <S.H1>Terms & Conditions</S.H1>
        </S.StyledTitle>
        <S.StyledArticle>
          <S.StyledDiv>
            <S.P>
              Federal Recovery Operations or
              <abbr title="Fedral Recovery Operations">FRO</abbr> may make use
              of certain exclusive financial partnerships and Federal Recovery
              Operations may be compensated if consumers choose to accept the
              terms and conditions of a cash advance agreement.
            </S.P>
            <S.P>
              Federal Recovery Operations and its subsidiaries, affiliates,
              officers, and/or employees provide the information and materials
              on this Site to our visitors, and are subject to the Terms and
              Conditions. Federal Recovery Operations has the right to revise
              the Terms and Conditions at any time by updating the information
              posted at this webpage, and such revisions will be binding upon
              all visitors to the Site. Thus, we recommend that you visit the
              Terms and Conditions webpage each time you visit
              <S.A href="https://www.federalrecoveryoperations.com"></S.A>
            </S.P>
          </S.StyledDiv>
          <S.StyledDiv>
            <S.P>
              All of the content within the Site is made available only for your
              personal and lawful use in connection with seeking to obtain
              business working capital. Use of the Site by a competitor company
              or other non-consumer third party is strictly prohibited.
            </S.P>
          </S.StyledDiv>
        </S.StyledArticle>
      </Layout>
    </>
  );
};

Terms.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Terms;
