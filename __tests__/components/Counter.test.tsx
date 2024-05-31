import { render, fireEvent } from "@testing-library/react-native";
import Counter from "@/components/Counter";

describe("Counter", () => {
  test("Counter component initializes with count 0", () => {
    const { getByText } = render(<Counter />);

    expect(getByText("Count: 0")).toBeTruthy();
  });

  test("On Increment button click, Counter component renders with count 1", () => {
    const { getByText } = render(<Counter />);

    fireEvent.press(getByText("Increment"));
    expect(getByText("Count: 1")).toBeTruthy();
  });

  test("On Decrement button click, Counter component renders with count 0", () => {
    const { getByText } = render(<Counter />);

    fireEvent.press(getByText("Decrement"));
    expect(getByText("Count: -1")).toBeTruthy();
  });

  test("Counter component decrement count", () => {
    const { getByText } = render(<Counter />);

    fireEvent.press(getByText("Increment"));
    fireEvent.press(getByText("Increment"));
    fireEvent.press(getByText("Increment"));
    fireEvent.press(getByText("Decrement"));
    expect(getByText("Count: 2")).toBeTruthy();
  });
});
