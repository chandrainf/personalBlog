import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { IntroWrapper } from './styles';
import IntroItem from './IntroItem';

const Intro = ({ intro }) => {
  return (
    <IntroWrapper>
      <Row type="flex" gutter={10}>
        {intro.map((item, index) => (
          <Col className="itroItemWrapper" lg={6} md={12} xs={24} key={String(index)}>
            <IntroItem {...item} />
          </Col>
        ))}
      </Row>
    </IntroWrapper>
  );
};
Intro.propTypes = {};
export default Intro;
