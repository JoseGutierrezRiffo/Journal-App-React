import React, { Fragment } from "react";
import JournalEntry from "./JournalEntry";
import {useSelector} from "react-redux";

const JournalEntries = () => {
  const {notes} = useSelector(state => state.notes)


  return (
    <Fragment>
      <div className="journal__entries">
        {notes.map(item => (
          <JournalEntry key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
};

export default JournalEntries;
