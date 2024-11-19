/* eslint-disable no-unused-vars */
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import './App.css'



function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Registration Form with Controlled Components</h1>
      <RegistrationForm />
      
      <h1>Registration Form with Formik</h1>
      <FormikForm />
    </div>
  );
}

export default App;

