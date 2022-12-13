import Welcome from "./components/Welcome";
import React, { ComponentProps } from "react";
import TimeEntryView from "./components/TimeEntryView";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import GithubRepoStats from "./components/GithubRepoStats";
import TimeEntryList from "./components/TimeEntryList";

// Example on how to get the type of props of a component
// const welcomeProps: ComponentProps<typeof Welcome> = { city: "some city" };

function App() {
  const timeEntry: TimeEntry = {
    id: "123",
    comment: "DSDSA",
    start: new Date(),
    end: new Date(),
  };

  return (
    <div>
      <TimeEntryList />
      <hr />
      <TimeEntryView timeEntry={timeEntry} />
      <TimeEntryForm />
    </div>
  );
}

export default App;
