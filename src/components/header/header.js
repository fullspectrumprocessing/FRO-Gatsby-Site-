import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import posed from 'react-pose';
import { Container, WrappedImg } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, data }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <WrappedImg
          fluid={data ? data.homeJson.logo.image.childImageSharp.fluid : {}}
          alt={title}
        />
        <Title as="h1">A Collections Agency</Title>
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const HeaderWithQuery = props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        homeJson {
          logo {
            image {
              childImageSharp {
                fluid(maxHeight: 200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);

export default HeaderWithQuery;
