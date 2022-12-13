import React from "react";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView: React.FunctionComponent<Props> = ({ timeEntry }) => {
  return (
    <div>
      Kommentar: {timeEntry.comment} ({timeEntry.start.toLocaleTimeString()})
    </div>
  );
};

export default TimeEntryView;
