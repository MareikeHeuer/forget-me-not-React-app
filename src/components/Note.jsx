import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Note(props) {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");

  function onClickDelete() {
    props.onDelete(props.id);
  }

  function onClickEdit() {
    setIsEditingMode(true);
  }

  function onClickSave() {
    setIsEditingMode(false);
    props.onSave(newNoteTitle, newNoteContent);
  }

  return (
    <div className="note">
      <form className="note-content">
        {isEditingMode ? (
          <>
            <input
              type="text"
              name="title"
              onChange={(event) => setNewNoteTitle(event.target.value)}
              value={newNoteTitle}
              placeholder="Write your new title..."
            />
            <textarea
              name="content"
              onChange={(event) => setNewNoteContent(event.target.value)}
              value={newNoteContent}
              placeholder="Write your new note..."
              rows={3}
            />
          </>
        ) : (
          <>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
          </> // fragment: returns group of elements
        )}
      </form>
      {isEditingMode ? (
        <div className="note-buttons">
          <button onClick={onClickSave}>
            <CheckCircleIcon />
          </button>
        </div>
      ) : (
        <div className="note-buttons">
          <button onClick={onClickEdit}>
            <EditIcon />
          </button>
          <button onClick={onClickDelete}>
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;
