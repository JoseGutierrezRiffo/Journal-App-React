import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";

const JournalScreen = () => {
  return (
    <Fragment>
      <div className="journal__main-content">
        <Sidebar />
        <main>
            {/*<NothingSelected/>*/}
            <NoteScreen/>
        </main>
      </div>
    </Fragment>
  );
};

export default JournalScreen;
