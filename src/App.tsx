import React, { ComponentProps, useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import ClockWithHook from "./components/ClockWithHook";
import GithubRepoStats from "./components/GithubRepoStats";
import { QueryClient, QueryClientProvider } from "react-query";
import GithubRepoStatsWithReactQuery from "./components/GithubRepoStatsWithReactQuery";

// Example on how to get the type of props of a component
// const welcomeProps: ComponentProps<typeof Welcome> = { city: "some city" };

const queryClient = new QueryClient();
function App() {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries([...timeEntries, timeEntry]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Toggle />
        <TimeEntryList timeEntries={timeEntries} />
        <hr />
        <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
        <hr />
        <ClockWithHook />
        <GithubRepoStats repoName="angular/angular" />
        <GithubRepoStats repoName="angular/angular" />
        <GithubRepoStatsWithReactQuery repoName="facebook/react" />
        <GithubRepoStatsWithReactQuery repoName="facebook/react" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
