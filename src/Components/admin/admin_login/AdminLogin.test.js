import { render, screen } from '@testing-library/react';
import AdminLogin from './AdminLogin'
import { BrowserRouter as Router } from 'react-router-dom';

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

    test('Admin login username field should be present', () => {
        const component = render(<Router><AdminLogin /></Router>);
        const inputNode = component.getByText("Username");
        expect(inputNode).toBeInTheDocument();

    })

    test('Admin login password field should be present', () => {
        const component = render(<Router><AdminLogin /></Router>);
        const inputNode = component.getByText("Password");
        expect(inputNode).toBeInTheDocument();

    })

    test('Admin login button field should be present', () => {
        const component = render(<Router><AdminLogin /></Router>);
        const inputNode = component.getByText("Log In");
        expect(inputNode).toBeInTheDocument();

    })

})