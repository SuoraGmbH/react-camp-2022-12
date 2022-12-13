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
  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    console.log(timeEntry, "hallo aus der app");
  };

  return (
    <div>
      <TimeEntryList />
      <hr />
      <TimeEntryForm
        onAddTimeEntry={(timeEntry: any) => console.log(timeEntry)}
      />
    </div>
  );
}

export default App;
