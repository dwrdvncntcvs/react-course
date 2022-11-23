import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  //Arrange, Act, Assert
  test("Renders 'Hello World' as text.", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //... nothing

    //Assert
    const text = screen.getByText("Hello World", { exact: false });
    expect(text).toBeInTheDocument();
  });

  test("renders 'It's good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);

    const text = screen.getByText("It's good to see you!");
    expect(text).toBeInTheDocument();
  });

  test("renders 'Change' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const text = screen.getByText("Changed!");
    expect(text).toBeInTheDocument();
  });

  test("check if text should be visible", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const text = screen.queryByText("It's good to see you");
    expect(text).toBeNull();
  });
});
