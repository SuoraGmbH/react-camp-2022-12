import React, { useEffect, useState } from "react";
import { GithubRepoData } from "./GithubRepoData";
import useGithubRepoStats from "./useGithubRepoStats";

interface Props {
  repoName: string;
}

const GithubRepoStats: React.FunctionComponent<Props> = ({ repoName }) => {
  const { repoData, error } = useGithubRepoStats(repoName);

  if (error) {
    return (
      <div>
        Error for repo {repoName}: {error}
      </div>
    );
  }

  if (!repoData) {
    return <div>Loading…</div>;
  }

  return <div>facebook/react hat {repoData.stargazers_count} stars</div>;
};

export default GithubRepoStats;
