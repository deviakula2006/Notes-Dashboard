import { createContext, useState, useEffect, useMemo } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {

  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input]);
    setInput("");
  };

  // useMemo to compute total notes
  const totalNotes = useMemo(() => {
    return notes.length;
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        input,
        setInput,
        addNote,
        selectedNote,
        setSelectedNote,
        totalNotes
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};