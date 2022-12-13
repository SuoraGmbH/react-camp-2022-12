import React from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

interface Props {}
const TimeEntryList: React.FunctionComponent<Props> = () => {
  const timeEntries: TimeEntry[] = [
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
  ];

  return (
    <div>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </div>
  );
};

export default TimeEntryList;
