import React from "react";
import Button from "@/components/Button";
import { render, fireEvent } from "@testing-library/react-native";

describe("Button Test", () => {
  it("Button component renders correctly!", () => {
    const { getByText } = render(<Button title="ClickMe" onPress={() => {}} />);

    expect(getByText("ClickMe")).toBeTruthy();
  });

  it("Button click works correctly!", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="ClickMe" onPress={onPressMock} />
    );

    fireEvent.press(getByText("ClickMe"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
