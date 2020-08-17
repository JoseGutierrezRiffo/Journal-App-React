import React, { Fragment, useEffect, useRef } from "react";
import NotesAppBar from "./NotesAppBar";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {activeNote, startDeleting} from "../../redux/actions/notesAction";

const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleting(id))
  }

  return (
    <Fragment>
      <div className="notes__main-content">
        <NotesAppBar />

        <div className="notes__content">
          <input
            type="text"
            name="title"
            placeholder="Some awesome title"
            className="notes__title-input"
            value={title}
            onChange={handleInputChange}
          />
          <textarea
            name="body"
            id=""
            placeholder="What happen today"
            className="notes__textarea"
            value={body}
            onChange={handleInputChange}
          />
        </div>

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="imagen" />
          </div>
        )}

        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>

      </div>
    </Fragment>
  );
};

export default NoteScreen;
