import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Head from 'components/head'
// import IOExample from 'components/io-example';
// import Modal from 'containers/modal';

const StyledImg = styled(Img)`
  // display: flex;
  // align-self: center;
`;
const Wrapper = styled.figure`
  display: block;
  justify-content: center;
  margin: 5% 10%;
  align-items: center;
`;

import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Head pageTitle={data.homeJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>

    {/* <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal> */}
    {/* <Gallery item={data.homeJson.gallery[5]} /> */}
    <Wrapper>
      <StyledImg fluid={data.homeJson.gallery[5].image.childImageSharp.fluid} />
    </Wrapper>
    <div style={{ height: '50vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      logo {
        image {
          childImageSharp {
            fluid(maxHeight: 50, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
