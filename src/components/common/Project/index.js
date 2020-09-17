import React from 'react';
import PropTypes from 'prop-types';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import RcTweenOne from 'rc-tween-one';
import {
 Card, More, ThemeContext, Repository,
} from '..';
import {
 Wrapper, Work, Icon, Title,
} from './styles';

export const Project = ({
 title, projects, link, side, color, icon, github, footerSide,
}) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper theme={theme}>
        <RcTweenOne component={Title} theme={theme} style={{opacity: 0}} animation={{opacity: 1}}>
          {title}
        </RcTweenOne>
        <QueueAnim
          key="queue"
          component={Work}
          leaveReverse
          github={github}
          side={side}
        >
          {!github
            ? projects.edges.map(({ node }, index) => <Card key={node.id} {...node} />)
            : projects.map((project, index) => (
              <Repository key={project.node.id} id={index} {...project} />
              ))}
          {!side && (
            <More link={link} color={color}>
              <Icon as={icon} />
            </More>
          )}
        </QueueAnim>
        {footerSide && (
          <div className="footerSide">
            <More link={footerSide} target="_self" color={color}>
              <Icon as={icon} />
            </More>
          </div>
        )}
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

Project.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.any,
  link: PropTypes.string,
  side: PropTypes.any,
  footerSide: PropTypes.any,
  color: PropTypes.string,
  icon: PropTypes.any,
  github: PropTypes.any,
};
