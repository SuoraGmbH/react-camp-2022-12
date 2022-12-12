import React from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    console.log("Hello World");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TimeEntryForm;
