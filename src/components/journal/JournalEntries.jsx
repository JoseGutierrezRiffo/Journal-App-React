import React, { Fragment } from "react";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Fragment>
      <div className="journal__entries">
        {entries.map(item => (
          <JournalEntry key={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default JournalEntries;
