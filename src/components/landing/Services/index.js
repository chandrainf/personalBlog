import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import { StaticQuery, graphql } from 'gatsby';
import { withI18n } from 'react-i18next';
import RcTweenOne from 'rc-tween-one';
import { Container, ThemeContext } from '../../common';
import Service from './Service';
import { Wrapper } from './styles';

const ServicesUI = ({ t }) => (
  <StaticQuery
    query={graphql`
      query {
        services: allServicesYaml {
          edges {
            node {
              id
              title
              icon
              description
            }
          }
        }
      }
    `}
    render={({ services }) => (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Wrapper theme={theme}>
            <Container>
              <RcTweenOne key="0" component="h2" animation={{ opacity: 1 }} style={{ opacity: 0 }}>
                {t('services.title')}
              </RcTweenOne>
              <Row type="flex">
                {services.edges.map(({ node }, index) => (
                  <Service index={index} theme={theme} key={node.id} {...node} />
                ))}
              </Row>
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    )}
  />
);

ServicesUI.propTypes = {
  t: PropTypes.func,
};

export const Services = withI18n()(ServicesUI);
