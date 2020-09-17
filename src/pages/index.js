import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout, SEO } from '../components/common'
import { Intro, Skills, Work, Services, Github } from '../components/landing'
import themeConfig from '../config/theme'
import '../i18n'

const IndexPage = () => (
  <ThemeProvider theme={themeConfig}>
    <Layout>
      <SEO title="Hello world!" type="Organization" />
      <Intro />
      <Skills />
      <Services />
      <Work />
      <Github />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
