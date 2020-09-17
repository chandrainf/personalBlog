import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components/common';
import themeConfig from '../config/theme';
import '../i18n';

const IndexPage = () => (
  <ThemeProvider theme={themeConfig}>
    <Layout>
      <img src='/static/media/basin.jpg' />
      <img src='/static/media/forest.jpg' />
      <img src='/static/media/ruin.jpg' />
      <img src='/static/media/silversnow.jpg' />
      <img src='/static/media/yggdrasil.jpg' />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
