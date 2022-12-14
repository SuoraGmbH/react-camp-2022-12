import React, { ComponentProps, useState } from "react";
import { TimeEntry } from "./TimeTracking/TimeEntry/TimeEntry";
import TimeEntryForm from "./TimeTracking/TimeEntry/TimeEntryForm";
import TimeEntryList from "./TimeTracking/TimeEntry/TimeEntryList";
import Clock from "./Clock/Clock";
import Toggle from "./misc/Toggle";
import ClockWithHook from "./Clock/ClockWithHook";
import GithubRepoStats from "./GitHub/GithubRepoStats";

// Example on how to get the type of props of a component
// const welcomeProps: ComponentProps<typeof Welcome> = { city: "some city" };

function App() {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries([...timeEntries, timeEntry]);
  };

  return (
    <div>
      <Toggle />
      <TimeEntryList timeEntries={timeEntries} />
      <hr />
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <hr />
      <ClockWithHook />
      <GithubRepoStats repoName="facebook/reahuisduhdasuosct" />
    </div>
  );
}

export default App;
