import React from 'react';
import * as S from '../styledComps';
import Layout from 'components/layout';
const Success = () => {
  return (
    <>
      <Layout></Layout>
      <S.H1>Success Page</S.H1>
      <S.StyledDiv>
        <S.P>Thank You for submitting your message.</S.P>
        <S.P>
          Somone from our team will contact you shortly. Have a wonderful day!
        </S.P>
      </S.StyledDiv>
    </>
  );
};

export default Success;
