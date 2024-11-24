import React, { useState, useEffect } from 'react';
import NoteService from '../services/NoteService';
import NoteCard from '../components/NoteCard';

function NotesPage() {
    const [notes,setNotes]=useState([]);
    useEffect(()=>{
        const fetchNotes=async()=>{
            const data=await NoteService.getNotes();
            setNotes(data)

        }
        fetchNotes();
    },[])
  return (
    <div>
        <h2>Notlar</h2>
        {notes.map((note)=>(
            <NoteCard key={note._id} note={note} />
        ))}
    </div>
  )
}

export default NotesPage