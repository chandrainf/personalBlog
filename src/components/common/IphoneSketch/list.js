import React from 'react';
import PropTypes from 'prop-types';
import IphoneSketch from '.';

const ListIphone = props => {
  return (
    <div id="DIV_1">
      <IphoneSketch className="div1" />
      <IphoneSketch className="div2" />
      <IphoneSketch className="div3" />
      <IphoneSketch className="div4" />
      <IphoneSketch className="div5" />
    </div>
  );
};

ListIphone.propTypes = {};
export default ListIphone;
