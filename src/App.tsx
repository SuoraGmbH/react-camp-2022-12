import Welcome from "./Welcome";
import React, { ComponentProps } from "react";
import TimeEntryView from "./components/TimeEntryView";

// Example on how to get the type of props of a component
// const welcomeProps: ComponentProps<typeof Welcome> = { city: "some city" };

function App() {
  return (
    <>
      <h1>Hallo React aus anderer Datei!</h1>
      <Welcome city="Düsseldorf" />
      <TimeEntryView comment="React lernen" />
      <TimeEntryView comment="React meistern" />
    </>
  );
}

export default App;
