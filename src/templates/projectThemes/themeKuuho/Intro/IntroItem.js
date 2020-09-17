import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const IntroItem = ({ title, description, color }) => {
  return (
    <Card className="introItem">
      <h2>{title}</h2>
      <div className="divider" style={{ background: color || 'red' }} />
      <p>{description}</p>
    </Card>
  );
};
IntroItem.propTypes = {};

export default IntroItem;
