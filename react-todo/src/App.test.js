import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); 
  expect(linkElement).toBeInTheDocument(); // Works after jest-dom setup
});