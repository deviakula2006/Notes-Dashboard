import { useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesDashboard = () => {

  const {
    notes,
    input,
    setInput,
    addNote,
    selectedNote,
    setSelectedNote,
    totalNotes
  } = useContext(NotesContext);

  const inputRef = useRef(null);

  // Focus input on load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>

      <h2>Notes Dashboard</h2>

      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a note"
      />

      <button onClick={addNote}>Add Note</button>

      <h3>Total Notes: {totalNotes}</h3>

      <ul>
        {notes.map((note, index) => (
          <li
            key={index}
            onClick={() => setSelectedNote(index)}
            style={{
              backgroundColor:
                selectedNote === index ? "lightyellow" : "transparent"
            }}
          >
            {note}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default NotesDashboard;