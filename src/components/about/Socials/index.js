import React from 'react';
import { ThemeContext } from '../../common';

// Dark icons
import twitter from '../../../../static/social/twitter.svg';
import unsplash from '../../../../static/social/unsplash.svg';
import instagram from '../../../../static/social/instagram.svg';
import linkedin from '../../../../static/social/linkedin.svg';
import dribbble from '../../../../static/creative/dribbble.svg';
import behance from '../../../../static/creative/behance.svg';
import github from '../../../../static/creative/github.svg';
import medium from '../../../../static/creative/medium.svg';
import youtube from '../../../../static/creative/youtube.svg';
import codepen from '../../../../static/creative/codepen.svg';

// Light icons
import twitterWhite from '../../../../static/social/twitter-white.svg';
import unsplashWhite from '../../../../static/social/unsplash-white.svg';
import instagramWhite from '../../../../static/social/instagram-white.svg';
import linkedinWhite from '../../../../static/social/linkedin-white.svg';
import dribbbleWhite from '../../../../static/creative/dribbble-white.svg';
import behanceWhite from '../../../../static/creative/behance-white.svg';
import githubWhite from '../../../../static/creative/github-white.svg';
import mediumWhite from '../../../../static/creative/medium-white.svg';
import youtubeWhite from '../../../../static/creative/youtube-white.svg';
import codepenWhite from '../../../../static/creative/codepen-white.svg';
import SocialIcon from './SocialIcon';

import { Wrapper, Title, Social } from './styles';

const Socials = () => (
  <ThemeContext.Consumer>
    {({ theme }) => {
      const socials = [
        {
          id: 0,
          name: 'Twitter',
          icon: theme === 'dark' ? twitterWhite : twitter,
          link: 'https://twitter.com/doananh234',
        },
        {
          id: 1,
          name: 'Unsplash',
          icon: theme === 'dark' ? unsplashWhite : unsplash,
          link: 'http://unsplash.com/doananh234',
        },
        {
          id: 2,
          name: 'Instagram',
          icon: theme === 'dark' ? instagramWhite : instagram,
          link: 'https://www.instagram.com/doananh23419',
        },
        {
          id: 3,
          name: 'Linkedin',
          icon: theme === 'dark' ? linkedinWhite : linkedin,
          link: 'https://www.linkedin.com/in/doananh234',
        },
      ];
      const creatives = [
        {
          id: 0,
          name: 'Dribbble',
          icon: theme === 'dark' ? dribbbleWhite : dribbble,
          link: 'https://dribbble.com/doananh234',
        },
        {
          id: 1,
          name: 'Behance',
          icon: theme === 'dark' ? behanceWhite : behance,
          link: 'https://www.behance.net/doananh234',
        },
        {
          id: 2,
          name: 'Github',
          icon: theme === 'dark' ? githubWhite : github,
          link: 'https://github.com/doananh234',
        },
        {
          id: 3,
          name: 'Medium',
          icon: theme === 'dark' ? mediumWhite : medium,
          link: 'https://medium.com/@doananh234',
        },
        {
          id: 4,
          name: 'Youtube',
          icon: theme === 'dark' ? youtubeWhite : youtube,
          link: 'https://youtube.com/user/doananh234',
        },
        {
          id: 5,
          name: 'Codepen',
          icon: theme === 'dark' ? codepenWhite : codepen,
          link: 'https://codepen.io/doananh234',
        },
      ];
      return (
        <Wrapper theme={theme}>
          <Title theme={theme}>Or somewhere else on the web</Title>
          <Social>
            {socials.map(social => (
              <SocialIcon theme={theme} key={social.id} {...social} />
            ))}
          </Social>
          <Social>
            {creatives.map(creative => (
              <SocialIcon theme={theme} key={creative.id} {...creative} />
            ))}
          </Social>
        </Wrapper>
      );
    }}
  </ThemeContext.Consumer>
);

export { Socials };
