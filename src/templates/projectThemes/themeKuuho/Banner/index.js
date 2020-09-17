import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import I18n from 'i18next';
import { BannerWrapper } from './styles';

const Banner = ({ title, subTitle, thumbnail }) => {
  return (
    <BannerWrapper>
      <div className="leftBanner">
        <h1 className="title">{title}</h1>
        <div className="subTitle">{subTitle}</div>
        <Button className="btn btnAppStore">
          <Icon theme="filled" type="apple" />
          {I18n.t('projects.appStore')}
        </Button>
        <Button className="btn btnGooglePlay">
          <img
            alt="https://kuuho.com/wp-content/uploads/2017/11/2.png"
            src="https://kuuho.com/wp-content/uploads/2017/11/2.png"
          />
          {I18n.t('projects.googlePlay')}
        </Button>
      </div>
      <img className="thumbnail" alt="thumbnail" src={thumbnail} />
    </BannerWrapper>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  thumbnail: PropTypes.string,
};
export default Banner;
