import { render, screen } from "@testing-library/react";
import GithubRepoStats from "./GithubRepoStats";
import { setupServer } from "msw/node";
import { githubRepoFacebookReactSuccessMock } from "../../mocks/api.github.com/repos/facebook/react/success";
import { githubRepoFacebookReactRateLimitMock } from "../../mocks/api.github.com/repos/facebook/react/rateLimit";

const mockServer = setupServer();
beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: "error" });
});

beforeEach(() => {
  mockServer.resetHandlers();
});

afterAll(() => {
  mockServer.close();
});

describe("<GithubRepoStats />", () => {
  // test("Smoke Test", () => {
  //   render(<GithubRepoStats />);
  // });
  //
  // test("Initially shows the loading indicator", () => {
  //   render(<GithubRepoStats />);
  //
  //   expect(screen.getByText(/loading/i)).toBeInTheDocument();
  // });

  test("The loading indicator should disappear", async () => {
    mockServer.resetHandlers(githubRepoFacebookReactSuccessMock);
    render(<GithubRepoStats />);

    await screen.findByText(/facebook\/react/i);
  });
  test("The number of stargazers should be visible", async () => {
    mockServer.resetHandlers(githubRepoFacebookReactSuccessMock);
    const { container } = render(<GithubRepoStats />);

    // Wait for loading indicator to disappear
    await screen.findByText(/facebook\/react/i);

    expect(container).toMatchSnapshot();
  });

  test("Display an error if we are rate limitted", async () => {
    mockServer.resetHandlers(githubRepoFacebookReactRateLimitMock);
    const { container } = render(<GithubRepoStats />);

    expect(container).toMatchSnapshot();
  });
});
