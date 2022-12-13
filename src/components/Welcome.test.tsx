import Welcome from "./Welcome";
import { render, screen } from "@testing-library/react";

describe("<Welcome />", () => {
  test("Smoke test", () => {
    render(<Welcome />);
  });

  test("That the passed city is visible on the screen", () => {
    render(<Welcome city="Nürnberg" />);

    expect(screen.getByText("nürnberg", { exact: false })).toBeInTheDocument();
    expect(screen.getByText(/nürnberg/i)).toBeInTheDocument();
  });

  test("If no city is passed, we should display Köln", () => {
    render(<Welcome />);

    expect(screen.getByText(/köln/i)).toBeInTheDocument();
  });

  test("It renders according to snapshot", () => {
    const { container } = render(<Welcome />);

    expect(container).toMatchSnapshot();
  });
});
