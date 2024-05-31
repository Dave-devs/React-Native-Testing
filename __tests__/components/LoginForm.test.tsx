import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginForm from "@/components/LoginForm";

describe('LoginForm', () => {
    it('show success message for correct credential', () => {
        const { getByTestId, getByText } = render(<LoginForm />);
        fireEvent.changeText(getByTestId('email'), 'test@example.com');
        fireEvent.changeText(getByTestId('password'), 'password');
        fireEvent.press(getByText('Login'));

        expect(getByTestId('message').props.children).toBe('Login successful');
    });

    it('sshows error message for incorrect credentials', () => {
        const { getByTestId, getByText } = render(<LoginForm />);
        fireEvent.changeText(getByTestId('email'), 'johndoe@example.com');
        fireEvent.changeText(getByTestId('password'), 'password');
        fireEvent.press(getByText('Login'));

        expect(getByTestId('message').props.children).toBe('Invalid credentials');
    });
});