import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Smart Goal Planner heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Smart Goal Planner/i);
  expect(headingElement).toBeInTheDocument();
});
