import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function saveEditedNote(title, content, index) {
    setNotes((prevNotes) => {
      const nextNotes = [...prevNotes]; // spread inside brackets creates new array
      nextNotes[index].title = title;
      nextNotes[index].content = content;
      return nextNotes;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onSave={(newTitle, newContent) =>
              saveEditedNote(newTitle, newContent, index)
            }
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
