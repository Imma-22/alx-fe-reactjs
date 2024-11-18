/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
      // Simulate API call here
      setFormData({ username: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style = {{padding: '10px'}}>
        <label>Username:</label>
        <input style = {{marginLeft: '40px'}}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div style = {{padding: '10px'}}>
        <label>Email:</label>
        <input style = {{marginLeft: '80px'}}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div style = {{padding: '10px'}}>
        <label>Password:</label>
        <input style = {{marginLeft: '50px'}}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button style = {{marginTop: '20px'}} type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;