import React, { ComponentProps, useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";

// Example on how to get the type of props of a component
// const welcomeProps: ComponentProps<typeof Welcome> = { city: "some city" };

function App() {
  const [timeEntries, setTimeEntries] = useState([
    {
      id: "dsahuoadsudaosuhhdoaus",
      comment: "React lernen",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "kocxokpxcyopkxycopkcxy",
      comment: "React meistern",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "cp9xyjnbu3",
      comment: "React lehren",
      start: new Date(),
      end: new Date(),
    },
  ]);

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries([timeEntry]);
  };

  return (
    <div>
      <TimeEntryList timeEntries={timeEntries} />
      <hr />
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
    </div>
  );
}

export default App;
