import React from 'react';
import { graphql } from 'gatsby';
import { withI18n } from 'react-i18next';
import { Container } from '../../common';
import SideProjects from './SideProjects';

export const imageFields = graphql`
  fragment imageFields on ImageSharp {
    fluid(maxWidth: 630) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
`;

export const Work = withI18n()(({ t }) => (
  <Container>
    <h2>{t('work.sideProjects')}</h2>
    <SideProjects />
  </Container>
));
