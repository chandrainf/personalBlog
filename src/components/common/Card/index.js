import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '..';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';
import { Wrapper, StyledCard } from './styles';

export const Card = ({
 id, link, title, image, description, frontmatter,
}) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper id={id} as="a" href={link}>
        <StyledCard className="shadow-super-light" theme={theme}>
          <CardHeader {...frontmatter} title={frontmatter.name || title} />
          <CardBody image={image} title={title} {...frontmatter} />
          <CardFooter description={description} {...frontmatter} />
        </StyledCard>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

Card.propTypes = {
  id: PropTypes.any,
  link: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.any,
  description: PropTypes.string,
  frontmatter: PropTypes.object,
};

Card.defaultProps = {
  frontmatter: {},
};
