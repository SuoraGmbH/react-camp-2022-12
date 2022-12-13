import React, { ComponentProps } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";

// Example on how to get the type of props of a component
// const welcomeProps: ComponentProps<typeof Welcome> = { city: "some city" };

function App() {
  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    console.log({ timeEntry }, "hallo aus der app");
  };

  return (
    <div>
      <TimeEntryList />
      <hr />
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
    </div>
  );
}

export default App;
