import React, { useState } from "react";
import { TimeEntry } from "./TimeEntry";
import Button from "../../components/Button";
import styled from "styled-components";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}

const Form = styled.form`
  border: 1px solid pink;
`;

// This is an entirely new button
const SomeButton = styled.button`
  border-radius: 20px;
`;

// This button customizes our imported button
const CustomizedButton = styled(Button)`
  border-radius: 20px;
`;

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onAddTimeEntry({
      id: new Date().toISOString(),
      comment: inputValue,
      start: new Date(),
      end: new Date(),
    });

    setInputValue("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Comment:
        <input onChange={handleChange} value={inputValue} />
      </label>
      {inputValue}
      <CustomizedButton type="submit">Submit</CustomizedButton>
    </Form>
  );
};

export default TimeEntryForm;
