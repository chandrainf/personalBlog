import React from 'react';
import { compose } from 'recompose';
import {
 Form, FastField, ErrorMessage, withFormik,
} from 'formik';
import * as Yup from 'yup';
import Recaptcha from 'react-google-recaptcha';
import { navigate } from 'gatsby';
import { SmallerContainer, CustomButton, ThemeContext } from '../../common';
import {
 ContactWrapper, Wrapper, InputField, Center, Error, Text,
} from './styles';

const ContactForm = ({
 errors, touched, setFieldValue, isSubmitting,
}) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <ContactWrapper as={SmallerContainer}>
        <Text theme={theme}>
          Feel free to email me via
          {' '}
          <a href="mailto:doananh234@gmail.com" target="_top">
            doananh234@gmail.com
          </a>
        </Text>
        <Text as="p" theme={theme}>
          Or fill in the contact form down below
        </Text>
        <Form
          method="post"
          name="doananh234"
          data-netlify="true"
          data-netlify-recaptcha="true"
          data-netlify-honeypot="bot-field"
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <Wrapper theme={theme}>
            <label htmlFor="name" aria-label="please insert your name">
              Full name:
              <InputField
                component="input"
                as={FastField}
                type="text"
                error={touched.name && errors.name ? 1 : 0}
                name="name"
              />
            </label>
            <ErrorMessage component={Error} name="name" />
          </Wrapper>
          <Wrapper theme={theme}>
            <label htmlFor="email" aria-label="please insert your email">
              Your email:
              <InputField
                component="input"
                as={FastField}
                type="email"
                error={touched.email && errors.email ? 1 : 0}
                name="email"
              />
            </label>
            <ErrorMessage component={Error} name="email" />
          </Wrapper>
          <Wrapper theme={theme}>
            <label htmlFor="message" aria-label="please insert your message">
              Message:
              <InputField
                component="textarea"
                as={FastField}
                error={touched.message && errors.message ? 1 : 0}
                name="message"
                textarea="true"
              />
            </label>
            <ErrorMessage component={Error} name="message" />
          </Wrapper>
          {/* <FastField
            component={Recaptcha}
            sitekey="6Lcs6lQUAAAAAEwhNH2IsobIe2csdda4TU3efpMN"
            name="recaptcha"
            onChange={value => setFieldValue('recaptcha', value)}
          /> */}
          {/* <ErrorMessage component={Error} name="recaptcha" /> */}
          <Center>
            <CustomButton type="submit" disabled={isSubmitting}>
              Send
            </CustomButton>
          </Center>
        </Form>
      </ContactWrapper>
    )}
  </ThemeContext.Consumer>
);

const enhance = compose(
  withFormik({
    mapPropsToValues: () => ({
      name: '',
      email: '',
      message: '',
      recaptcha: '',
    }),
    validationSchema: () => Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .email('Please enter a valid email!')
          .required('Email is required!'),
        message: Yup.string().required('Message is required'),
        recaptcha: Yup.string().required('Robots are not welcome yet!'),
      }),
    handleSubmit: async({
 name, email, message, recaptcha,
}, { setSubmitting, resetForm }) => {
      try {
        const encode = data => {
          return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');
        };
        await fetch('/?no-cache=1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'doananh234',
            name,
            email,
            message,
            'g-recaptcha-response': recaptcha,
          }),
        });
        setSubmitting(false);
        resetForm();
        navigate('/thanks/');
      } catch (err) {
        setSubmitting(false);
        alert('Something went wrong, please try again!') // eslint-disable-line
      }
    },
  }),
);

export default enhance(ContactForm);
