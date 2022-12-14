import React, { useEffect, useState } from "react";
import { GithubRepoData } from "../domain/GithubRepoData";

const GithubRepoStats: React.FunctionComponent = () => {
  const [repoData, setRepoData] = useState<GithubRepoData>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react").then(function (
      response
    ) {
      response.json().then(function (data: GithubRepoData) {
        if (response.status !== 200) {
          setRepoData(undefined);
          // I need to ignore a typescript error here,
          // because our typings do not contain the error case
          // @ts-expect-error
          setError(data?.message || "Something went wrong");
          return;
        }

        setError(undefined);
        setRepoData(data);
      });
    });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!repoData) {
    return <div>Loading…</div>;
  }

  return <div>facebook/react hat {repoData.stargazers_count} stars</div>;
};

export default GithubRepoStats;
