import React from 'react';
import PropTypes from 'prop-types';
import { IphoneSketchWrapper } from './styles';

const IphoneSketch = ({ children }) => {
  return (
    <IphoneSketchWrapper>
      <div className="ip-content-wrapper">
        <div>
          <div className="gatsby-image-wrapper">
            <div className="ip-hender" />
            <img
              src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDAf/EABgBAAMBAQAAAAAAAAAAAAAAAAIDBAAB/9oADAMBAAIQAxAAAAGhXxksrduZyCqtAAf/xAAaEAADAQADAAAAAAAAAAAAAAAAARECAyEx/9oACAEBAAEFAoQhCJCeWcnTbcz5/8QAFxEBAQEBAAAAAAAAAAAAAAAAABMBAv/aAAgBAwEBPwGSblr/xAAYEQACAwAAAAAAAAAAAAAAAAAAEgEQMf/aAAgBAgEBPwFhidr/xAAZEAABBQAAAAAAAAAAAAAAAAAAARARIDH/2gAIAQEABj8CssGt/8QAGxABAQACAwEAAAAAAAAAAAAAAQARISAxcYH/2gAIAQEAAT8h4e9hCEyM3LJ5O2T9tb//2gAMAwEAAgADAAAAEPMwfP/EABcRAQEBAQAAAAAAAAAAAAAAAAAxARH/2gAIAQMBAT8QOVYp/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/ELjP/8QAHRAAAwACAgMAAAAAAAAAAAAAAAERIVExYUFxkf/aAAgBAQABPxC9F6L0T19FFUdsz5qzgTCBPCaTghkV8szAmPR//9k="
              alt=""
              className="ip-sketch"
            />
            <div className="ip-content">{children}</div>
          </div>
        </div>
        <div className="ip-footer-wrapper">
          <div className="ip-footer-content" />
        </div>
      </div>
      <div className="ip-footer-line" />
    </IphoneSketchWrapper>
  );
};

IphoneSketch.propTypes = {
  children: PropTypes.any,
};

export default IphoneSketch;
