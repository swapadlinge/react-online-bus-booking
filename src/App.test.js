import { render, screen } from '@testing-library/react';
import App from './App';

import AdminLogin from './Components/admin/admin_login/AdminLogin'
import { BrowserRouter as Router } from 'react-router-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("login", () => {
  test('assert-test', () => {
    const text = 'text';
    expect(false).not.toBe(true)
  });


  test('Admin Login Form is rendered', () => {
    const component = render(<Router><AdminLogin /></Router>);
    const inputNode = component.getByText("Admin Login");
    expect(inputNode).toBeInTheDocument();
  })



})