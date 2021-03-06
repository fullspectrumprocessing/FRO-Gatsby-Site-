import styled from 'styled-components';

export const StyledTitle = styled.div`
  border-bottom: 2px grey solid;
  padding: 10px 50px 10px 50px;
  margin: 0 50px 5rem 4rem;
`;
export const H1 = styled.h1`
  font-size: 50px;
  display: flex;
  font-weight: 600;
  text-shadow: 1px 1px 3px grey;
`;
export const H2 = styled.h2`
  font-size: 35px;
  font-weight: 400;
  text-shadow: 0.5px 1px 1px grey;
  margin-bottom: 10px;
  @media (max-width: 450px) {
    font-size: 20px;
    padding: 15px;
    text-align: center;
  }
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
  margin-top: 25px;
`;

export const UL = styled.ul`
  list-style-type: disc;
  padding-top: 10px;
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
  padding: 10px 0;
`;

export const Wrapper = styled.div`
  width: 90%;
  color: black;
  margin: 0 auto;
  @media (max-width: 920px) {
    min-height: 500px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }

`;


export const TD = styled.td`
  border: 1px solid grey;
  // font-family: 'Varela Round', sans-serif;
  padding: 20px !important;
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const TDBig = styled.td`
  border: 1px solid grey;
  // font-family: 'Varela Round', sans-serif;
  padding: 20px !important;
  @media (max-width: 450px) {
    // max-width: 220px;
    font-size: 12px;
  }
`;
export const TDMed = styled.td`
  border: 1px solid grey;
  // font-family: 'Varela Round', sans-serif;
  padding: 20px !important;
  @media (max-width: 450px) {
    max-width: 168px;
    font-size: 10px;
    padding: 10px !important;
  }
`;

export const TDSmall = styled.td`
  border: 1px solid grey;
  // font-family: 'Varela Round', sans-serif;
  padding: 20px !important;
  @media (max-width: 450px) {
    max-width: 70px;
    font-size: 12px;
    padding: 10px !important;
  }
`;

export const Table = styled.table`
  margin-bottom: 0px;
  border: 1px solid grey;
`;

export const TH = styled.th`
  background: grey;
  color: white;
  // font-family: "Hind", sans-serif;
  padding: 20px !important;
  border: 1px solid grey;
  background: #1C3178;
`;
export const THSmall = styled.th`
  background: grey;
  color: white;
  // font-family: "Hind", sans-serif;
  padding: 20px !important;
  border: 1px solid grey;
  background: #1C3178;
  @media (max-width: 450px) {
    max-width: 85px;
    font-size: 12px;
    padding: 10px !important;
  }
`;
export const TDDark = styled.td`
  color: white;
  width: 150px;
  text-align: center;
  background: #1C3178;
  border: 1px solid grey;
  // font-family: "hind", sans-serif;
  @media (max-width: 450px) {
    // max-width: 100px;
    width: auto;
    padding: 15px !important;
  }
 
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '526px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1600px',
  desktopM: '1900px',
  desktopL: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopM: `(max-width: ${size.desktopM})`,
  desktopL: `(max-width: ${size.desktopL})`,
};
