import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Toggle from "@/components/Toggle";

describe('Toggle', () => {
    it('initiallly shows Off', () => {
        const { getByTestId } = render(<Toggle />);
        expect(getByTestId('status').props.children).toBe('Off');
    });

    it('to switch to On after toggle', () => {
        const { getByTestId } = render(<Toggle />);
        fireEvent(getByTestId('switch'), 'onValueChange', true);
        expect(getByTestId('status').props.children).toBe('On');
    });
});