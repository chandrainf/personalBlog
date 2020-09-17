import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const CardBody = ({ title, image, thumbnail }) => (
  <Wrapper>
    {image ? <Img fluid={image.childImageSharp.fluid} alt={title} />: <div className='gatsby-image-wrapper'><img alt={title} src={thumbnail} /></div>}
  </Wrapper>
);

CardBody.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  thumbnail: PropTypes.any,
};

const Wrapper = styled.div`
  overflow: visible;
  flex: 1;
  .gatsby-image-wrapper {
    transition: 0.3s;
    height: 100%;
  }

  img {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    display: block;
    transition: 0.3s;
  }
`;

export default CardBody;
