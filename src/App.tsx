import Welcome from "./Welcome";
import { ComponentProps } from "react";

// Example on how to get the type of props of a component
// const welcomeProps: ComponentProps<typeof Welcome> = { city: "some city" };

function App() {
  return (
    <div>
      <h1>Hallo React aus anderer Datei!</h1>
      <Welcome city="Düsseldorf" />
    </div>
  );
}

export default App;
