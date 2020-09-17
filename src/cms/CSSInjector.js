import React from 'react';
import { StyleSheetManager } from 'styled-components';
import CMS from 'netlify-cms';
import PropTypes from 'prop-types';

export default class CSSInjector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iframeRef: '',
    };
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem });
  }

  render() {
    const { iframeRef } = this.state;
    const { children } = this.props;
    return (
      <div>{iframeRef && <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>}</div>
    );
  }
}

CSSInjector.propTypes = {
  children: PropTypes.any,
};

export const registerPreviewTemplate = (templateName, children) => {
  CMS.registerPreviewTemplate(templateName, props => (
    <CSSInjector>{React.cloneElement(children, props)}</CSSInjector>
  ));
};
