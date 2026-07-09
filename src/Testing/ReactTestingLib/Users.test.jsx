//running api mock test
import { fireEvent, render, screen } from "@testing-library/react";

import Users from "./Users";

test("Api mock test", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ name: "Vignesh" }]),
    }),
  );

  render(<Users />);

  // if it's an asycn operation findByText
  // a definite component element getByText  - gives error if there's no element
  // queryBy if the item might be null if there's not any like that

  const user = await screen.findByText("Vignesh"); // if it's a async operation findBy or else getByText

  expect(user).toBeInTheDocument();
});

test("Conponent test ", () => {
  render(<Users />);

  expect(screen.getByText("Heading")).toBeInTheDocument();
});
