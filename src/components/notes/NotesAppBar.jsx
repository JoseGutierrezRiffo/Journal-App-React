import React, { Fragment } from "react";

const NotesAppBar = () => {
  return (
    <Fragment>
      <div className="notes__appbar">
        <span>27 de Julio 2020</span>

        <div>
          <button className="btn">Picture</button>
          <button className="btn">Save</button>
        </div>
      </div>
    </Fragment>
  );
};

export default NotesAppBar;

