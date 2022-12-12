import React from "react";

interface Props {
  comment: string;
}

const TimeEntryView: React.FunctionComponent<Props> = ({ comment }) => {
  return <div>Kommentar: {comment}</div>;
};

export default TimeEntryView;
