import React, { useEffect, useState } from "react";
import useGithubRepoStats from "../hooks/useGithubRepoStats";
import { useQuery } from "react-query";

interface Props {
  repoName: string;
}

const GithubRepoStats: React.FunctionComponent<Props> = ({ repoName }) => {
  // alternative to react-query would be useSwr
  const { data: repoData, error } = useQuery(
    ["repoData", repoName],
    async () => {
      const response = await fetch("https://api.github.com/repos/" + repoName);
      return response.json();
    }
  );

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
