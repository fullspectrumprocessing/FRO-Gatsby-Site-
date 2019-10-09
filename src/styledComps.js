import styled from 'styled-components';

export const StyledTitle = styled.div`
  border-bottom: 2px grey solid;
  padding: 10px 50px;
  margin: 0 50px 0 4rem;
`;
export const H1 = styled.h1`
  font-size: 50px;
  display: flex;
  font-weight: 600;
  text-shadow: 1px 1px 3px grey;
`;
export const H2 = styled.h2`
  font-size: 25px;
  font-weight: 400;
  text-shadow: 0.5px 1px 1px grey;
  margin-bottom: 10px;
`;
export const H3 = styled.address`
  font-size: 25px;
  display: inherit;
  font-weight: 200;
`;
export const P = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin: 0 40px;
  word-spacing: 2.5px;
  letter-spacing: 0.5px;
  line-height: 25px;
`;

export const BDI = styled.bdi`
  text-decoration: underline;
  margin-right: 5px;
`;
export const StyledDiv = styled.section`
  display: flex;
  width: 75%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
`;

export const UL = styled.ul`
  list-style-type: disc;
  // text-indent: 25px;
`;

export const StyledArticle = styled.article`
  padding-bottom: 50px;
`;

export const A = styled.a`
  color: #1c3178;
`;
export const Address = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
`;
export const ContactWrap = styled.div`
  margin: 20px 0;
  :hover {
    background-color: grey;
  }
`;

const StyledForm = styled.form`
  padding: 10px;
`;
