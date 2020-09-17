import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withI18n } from 'react-i18next';
import TweenOne from 'rc-tween-one';
import { Container, ThemeContext } from '../../common';
import Skill from './Skill';
import { Wrapper, Flex } from './styles';

export const Skills = withI18n()(({ t }) => (
  <StaticQuery
    query={graphql`
      query {
        skills: allContentYaml {
          edges {
            node {
              title
              intro
              items {
                description
                icon
                title
              }
            }
          }
        }
      }
    `}
    render={({ skills }) => (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Wrapper theme={theme}>
            <Container>
              <h2>{t('skills.title')}</h2>
              <Flex>
                {skills.edges[0].node.items.map((node, index) => (
                  <TweenOne
                    key={node.title}
                    animation={{
                      y: 0,
                      opacity: 1,
                      duration: 600,
                      delay: 600 + index * 80,
                    }}
                    style={{ transform: 'translateY(100px)', opacity: 0 }}
                  >
                    <Skill key={node.title} {...node} />
                  </TweenOne>
                ))}
              </Flex>
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    )}
  />
));
