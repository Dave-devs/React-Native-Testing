import React from "react";
import { render } from "@testing-library/react-native";
import Profile from "@/components/Profile";

describe("Profile", () => {
    test('ensure name and age displayed correctly!', () => {
        const { getByTestId } = render(<Profile name={"David"} age={50} />);

        expect(getByTestId('name').props.children).toContain('David');
        expect(getByTestId('age').props.children).toContain(50);
    })
})