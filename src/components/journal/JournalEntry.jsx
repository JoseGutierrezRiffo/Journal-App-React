import React, { Fragment } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch } from "react-redux";
import { activeNote } from "../../redux/actions/notesAction";

const JournalEntry = ({ id, body, title, date, url }) => {
  const dispatch = useDispatch();

  const noteDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { body, title, date, url }));
  };

  return (
    <Fragment>
      <div className="journal__entry animate__animated animate__fadeIn animate__faster" onClick={handleEntryClick}>
        {url !== undefined && (
          <div
            className="journal__entry-picture"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${url})`
            }}
          />
        )}

        <div className="journal_ _entry-body">
          <p className="journal__entry-title">{title}</p>
          <p className="journal__entry-content">{body}</p>
        </div>

        <div className="journal__entry-date-box">
          <span>{noteDate.format("dddd")}</span>
          <h4>{noteDate.startOf("seconds").fromNow()}</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default JournalEntry;
