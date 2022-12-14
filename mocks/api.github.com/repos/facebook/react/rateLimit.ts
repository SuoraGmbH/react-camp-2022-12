import { rest } from "msw";

export const githubRepoFacebookReactRateLimitMock = rest.get(
  "https://api.github.com/repos/facebook/react",
  (req, res, context) => {
    return res(
      context.status(403),
      context.delay(5000),
      context.json({
        message:
          "API rate limit exceeded for 93.245.109.13. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
        documentation_url:
          "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting",
      })
    );
  }
);
