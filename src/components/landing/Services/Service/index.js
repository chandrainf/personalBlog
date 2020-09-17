import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { OverPack } from 'rc-scroll-anim';
import RcTweenOne from 'rc-tween-one';
import { Wrapper, Grow, Title } from './styles';

const ServiceItem = ({
 theme, icon, title, description, index,
}) => (
  <Col md={24}>
    <OverPack style={{ overflow: 'hidden' }}>
      <RcTweenOne
        key="0"
        animation={{
          x: 0,
          opacity: 1,
          duration: 600,
        }}
        style={{ transform: index % 2 ? 'translateX(300px)' : 'translateX(-300px)', opacity: 0 }}
      >
        <Row>
          {index % 2 !== 0 && <Col md={4} />}
          <Col md={20} xs={24}>
            <div>
              <Wrapper theme={theme} className={index % 2 === 0 ? 'row-reverse' : ''}>
                <Grow>
                  <img src={icon} alt={title} />
                </Grow>
                <div className="info">
                  <Title>{title}</Title>
                  <p className="subtitle">{description}</p>
                </div>
              </Wrapper>
            </div>
          </Col>
          {index % 2 === 0 && <Col md={4} />}
        </Row>
      </RcTweenOne>
    </OverPack>
  </Col>
);

ServiceItem.propTypes = {
  theme: PropTypes.any,
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number,
};

export default ServiceItem;
