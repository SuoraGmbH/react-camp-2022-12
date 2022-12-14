import React, { ComponentProps, useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";

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
    </div>
  );
}

export default App;
