import React from 'react';
import Layout from 'components/layout';
import Head from 'components/head';
import * as S from '../styledComps';

const Contact = () => {
  return (
    <Layout>
      <S.StyledTitle>
        <S.H1>Contact Us</S.H1>
      </S.StyledTitle>

      <S.StyledDiv>
        <S.ContactWrap>
          <S.H2> Phone:</S.H2>
          <S.H3>(215) 268-3594</S.H3>
        </S.ContactWrap>
        <S.ContactWrap>
          <S.H2>Address:</S.H2>
          <S.H3>20 North 3rd Street Philadelphia, PA </S.H3>
        </S.ContactWrap>
      </S.StyledDiv>
    </Layout>
  );
};

export default Contact;
