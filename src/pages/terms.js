import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

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

const Terms = ({ data }) => {
  return (
    <>
      <Layout>
        <StyledTitle>
          <H1>Terms & Conditions</H1>
        </StyledTitle>
        {/* <h1>{data.termsJson.content.childMarkdownRemark.rawMarkdownBody}</h1> */}
      </Layout>
    </>
  );
};

Terms.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Terms;

// export const query = graphql`
//   query TermsQuery {
//     termsJson {
//       title
//       content {
//         childMarkdownRemark {
//           html
//           rawMarkdownBody
//         }
//       }
//     }
//   }
// `;
