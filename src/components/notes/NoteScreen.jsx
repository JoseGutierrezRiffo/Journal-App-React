import React, { Fragment } from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <Fragment>
      <div className="notes__main-content">
          <NotesAppBar />

          <div className="notes__content">
              <input type="text" placeholder="Some awesome title" className="notes__title-input"/>
              <textarea name="" id=""  placeholder="What happen today" className="notes__textarea" />
          </div>

          <div className="notes__image">
              <img src="https://image.freepik.com/vector-gratis/ilustracion-cohete-espacio_72785-46.jpg" alt="img"/>
          </div>
      </div>
    </Fragment>
  );
};

export default NoteScreen;
