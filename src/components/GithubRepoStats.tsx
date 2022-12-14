import React, { useEffect, useState } from "react";
import { GithubRepoData } from "../domain/GithubRepoData";

const GithubRepoStats: React.FunctionComponent = () => {
  const [repoData, setRepoData] = useState<GithubRepoData>();

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react").then(function (
      response
    ) {
      response.json().then(function (data: GithubRepoData) {
        setRepoData(data);
      });
    });
  }, []);

  if (!repoData) {
    return <div>Loading…</div>;
  }

  return <div>facebook/react hat {repoData.stargazers_count} stars</div>;
};

export default GithubRepoStats;
