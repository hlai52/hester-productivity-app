import React, { useState, useReducer } from "react";
import "./Note.scss";
import { v4 as uuid } from "uuid";
import checkbox from "../../Assets/Images/checkbox.svg";

const initialState = {
  lastNoteCreatedAt: null,
  totalNotes: 0,
  notes: [],
};

const notesReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      const newNote = {
        lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
        totalNotes: prevState.notes.length + 1,
        notes: [...prevState.notes, action.payload],
      };
      // {console.log(newNote)}
      return newNote;

    case "DELETE_NOTE":
      const deleteNote = {
        ...prevState,
        totalNotes: prevState.notes.length - 1,
        notes: prevState.notes.filter((note) => note.id !== action.payload.id),
      };
      return deleteNote;

    default:
      return prevState;
  }
};

function Note() {
  const [notesState, dispatch] = useReducer(notesReducer, initialState);
  const [noteText, setNoteText] = useState("");

  const addNote = (e) => {
    e.preventDefault();

    if (!noteText) {
      return;
    }

    const newNote = {
      id: uuid(),
      text: noteText,
      rotate: Math.floor(Math.random() * 20),
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });
    setNoteText("");
  };

  const dropNote = (e) => {
    e.target.style.left = `${e.pageX - 50}px`;
    e.target.style.top = `${e.pageY - 50}px`;
  };

  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const deleteNote = (id) => {
    console.log("delete");
    dispatch({ type: "DELETE_NOTE", payload: id });
  };

  return (
    <div className="note" onDragOver={dragOver}>
      <div>
        <h1 className="note__title"> Work Corner</h1>
      </div>
      <div className="note__form">
        {notesState.notes.length > 0 && (
          <h3 className="note__length">
            Task focusing on right now : ({notesState.notes.length})
            <p> Last task completed: {notesState.lastNoteCreatedAt}</p>
          </h3>
        )}

        <form className="note__form-add" onSubmit={addNote}>
          <textarea
            placeholder="Add task to do right now.."
            className="note__form-text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
          <button className="note__add-btn">Add</button>
        </form>
        <div className="note__container-full">
          <div className="note__checkbox-container">
            <img
              className="note__checkbox"
              alt="small human girl with a pencil on books"
              src={checkbox}
            ></img>
          </div>
          <p className="note__completed-description">Almost there!</p>
        </div>
      </div>

      {console.log("My notes", notesState.notes)}
      {/* Display the added notes */}
      {notesState.notes.map((note) => (
        <div
          className="note__field"
          style={{ transform: `rotate(${note.rotate}deg)` }}
          key={note.id}
          draggable="true"
          onDragEnd={dropNote}
        >
          <h2 className="note__text">{note.text}</h2>
          <button className="note__delete" onClick={() => deleteNote(note)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Note;
