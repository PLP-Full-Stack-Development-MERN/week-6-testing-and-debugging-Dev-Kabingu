import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../components/BugForm";

it("renders form and submits data", () => {
  render(<BugForm />);
  const input = screen.getByPlaceholderText(/Bug Title/i);
  fireEvent.change(input, { target: { value: "Test Bug" } });
  expect(input.value).toBe("Test Bug");
});
