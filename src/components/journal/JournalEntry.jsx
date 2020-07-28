import React, { Fragment } from "react";

const JournalEntry = () => {
  return (
    <Fragment>
      <div className="journal__entry">
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://image.freepik.com/vector-gratis/ilustracion-cohete-espacio_72785-46.jpg)"
          }}
        />
        <div className="journal__entry-body">
          <p className="journal__entry-title">Nuevo día</p>
          <p className="journal__entry-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

          <div className="journal__entry-date-box">
              <span>Monday</span>
              <h4>27/07/2020</h4>
          </div>
      </div>
    </Fragment>
  );
};

export default JournalEntry;
