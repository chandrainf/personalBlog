import React from 'react';
import { Link } from 'gatsby';
import {
  Container,
  Logo,
  Twitter,
  GithubIcon,
  Instagram,
  Unsplash,
  Linkedin,
  ThemeContext,
} from '../../common';
import Copyrights from './Copyrights';
import {
  Wrapper,
  FooterContainer,
  FullContainer,
  List,
  Brand,
  StyledLogo,
  Social,
  Grow,
} from './styles';

export const Footer = () => {
  const social = [
    {
      id: 0,
      name: 'Twitter',
      link: 'https://twitter.com/doananh234',
      icon: Twitter,
      last: false,
    },
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com/doananh234',
      icon: GithubIcon,
      last: false,
    },
    {
      id: 2,
      name: 'Instagram',
      link: 'https://instagram.com/doananh23419',
      icon: Instagram,
      last: false,
    },
    {
      id: 3,
      name: 'Unsplash',
      link: 'https://unsplash.com/doananh234',
      icon: Unsplash,
      last: false,
    },
    {
      id: 4,
      name: 'Linkedin',
      link: 'https://linkedin.com/in/ismail-ghallou-630149122',
      icon: Linkedin,
      last: false,
    },
  ];
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <FooterContainer theme={theme}>
          <FullContainer className="background-gradient">
            <Wrapper as={Container}>
              <List>
                <li>
                  <Brand as={Link} to="/">
                    <StyledLogo as={Logo} color="#fff" strokeWidth="2" />
                    {' '}
doananh234
                  </Brand>
                </li>
              </List>
              <List>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
              </List>
              <List>
                <li>Follow me on</li>
                <li>
                  {social.map(({
 id, name, link, icon, last,
}) => (
  <Social
    key={id}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`follow me on ${name}`}
    href={link}
    last={last}
  >
    <Grow as={icon} width="24" height="24" />
  </Social>
                  ))}
                </li>
              </List>
            </Wrapper>
          </FullContainer>
          <Copyrights />
        </FooterContainer>
      )}
    </ThemeContext.Consumer>
  );
};
