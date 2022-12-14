import { useEffect, useState } from "react";
import { GithubRepoData } from "./GithubRepoData";

const useGithubRepoStats = (repoName: string) => {
  const [repoData, setRepoData] = useState<GithubRepoData>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    setRepoData(undefined);
    fetch("https://api.github.com/repos/" + repoName).then((response) =>
      response.json().then(function (data) {
        if (response.status === 200) {
          setRepoData(data);
          setError(undefined);
        } else {
          setError(data.message);
        }
      })
    );
  }, [repoName]);

  return {
    error: error,
    repoData: repoData,
  };
};

export default useGithubRepoStats;
