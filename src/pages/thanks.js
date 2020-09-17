import React from 'react';
import ThanksContent from '../components/contact/ThanksContent';
import { Layout, SEO } from '../components/common';

const Thanks = () => (
  <Layout>
    <SEO title="Thanks!" type="Organization" location="/thanks" />
    <ThanksContent />
  </Layout>
);

export default Thanks;
