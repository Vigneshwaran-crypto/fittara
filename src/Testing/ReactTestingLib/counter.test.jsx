import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("First Component Test : ", () => {
  const mockFn = jest.fn(); // whenever you needed to pass the funtion as the props

  render(<Counter />);

  const button = screen.getByText("Add");
  //   const heading = screen.getByText("0");

  fireEvent.click(button);

  expect(screen.getByText("1")).toBeInTheDocument();
});

test("api test", async () => {
  render(<Counter />);

  fireEvent.click(screen.getByText("Add"));

  expect(screen.getByText("1")).toBeInTheDocument();
});
