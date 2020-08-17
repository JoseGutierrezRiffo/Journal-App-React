import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
import { useSelector } from "react-redux";

const JournalScreen = () => {
  const { active } = useSelector(state => state.notes);

  return (
    <Fragment>
      <div className="journal__main-content">
        <Sidebar />
        <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
      </div>
    </Fragment>
  );
};

export default JournalScreen;
