import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ErrorState } from ".";
import { screen } from "@testing-library/react";

describe("Alert test", () => {
  it("renders alert with the correct message", () => {
    const errorMessage = "Something went wrong!";
    render(<ErrorState message={errorMessage} />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(
      screen.getByText("Виникла помилка під час запиту:")
    ).toBeInTheDocument();
  });
});
