import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import HeaderContainer from './Header';
import Intro from './Intro';

const ThemeKuuho = ({ project }) => {
  const { frontmatter } = project;
  const {
 logo, name, title, subTitle, thumbnail, intro,
} = frontmatter;
  return (
    <div
      style={{
        background:
          'url(https://kuuho.com/wp-content/uploads/2018/05/background3-copy-FILEminimizer.png) no-repeat white',
      }}
    >
      <HeaderContainer logo={logo} name={name} />
      <Banner title={title} subTitle={subTitle} thumbnail={thumbnail} />
      <Intro intro={intro} />
    </div>
  );
};

ThemeKuuho.propTypes = {
  project: PropTypes.object,
};

export default ThemeKuuho;
