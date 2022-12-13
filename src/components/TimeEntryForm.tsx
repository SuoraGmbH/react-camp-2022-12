import React, { useState } from "react";

const TimeEntryForm: React.FunctionComponent<any> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    console.log("Hello World");
    event.preventDefault();
    setInputValue("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value.toUpperCase().replace("A", "B"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <input onChange={handleChange} value={inputValue} />
      </label>
      {inputValue}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TimeEntryForm;
