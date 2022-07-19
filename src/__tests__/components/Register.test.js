import { render, fireEvent } from "@testing-library/react";
import RegisterStudent from "../../components/Register";

describe("Student Register Component", () => {
  it("should render Student Register component", () => {
    render(<RegisterStudent />);
  });

  it("click on handle submit button", () => {
    const { getByTestId } = render(<RegisterStudent />);
    const submitButton = getByTestId(/formSubmitButton/);
    fireEvent.click(submitButton);
    expect(submitButton).toBeDefined();
  });
});
