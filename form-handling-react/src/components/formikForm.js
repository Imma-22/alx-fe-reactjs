/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    // Simulate API call here
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div style = {{padding: '10px'}}>
            <label>Username:</label>
            <Field style = {{marginLeft: '20px'}}type="text" name="username" />
            <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
          </div>
          <div style = {{padding: '10px'}}>
            <label>Email:</label>
            <Field style = {{marginLeft: '55px'}}type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
          </div>
          <div style = {{padding: '10px'}}>
            <label>Password:</label>
            <Field style = {{marginLeft: '30px'}} type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
          </div>
          <button style = {{marginTop: '20px'}}type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
