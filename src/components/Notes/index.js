// Write your code here
import {useState} from 'react'

import NoteItem from '../NoteItem'

import {
  EmptyNotesViewContainer,
  EmptyNotesImage,
  EmptyNotesText,
  EmptyNotesPara,
  NotesListContainer,
  NotesContainer,
  NotesHeading,
  AddButton,
  InputElement,
} from './styledComponents'

const Notes = () => {
  const [noteList, setNoteList] = useState([])

  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onClickAdd = () => {
    if (title !== '' && note !== '') {
      const newNote = {id: Date.now(), title, note}
      setNoteList([...noteList, newNote])
      setTitle('')
      setNote('')
    }
  }

  // console.log(noteList)

  const renderNotesList = () => {
    // if (noteList.length === 0) {
    //   return (
    //     <EmptyNotesViewContainer>
    //       <EmptyNotesImage
    //         src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
    //         alt="notes empty"
    //       />
    //       <EmptyNotesText>No Notes Yet</EmptyNotesText>
    //       <EmptyNotesPara>Notes you add will appear here</EmptyNotesPara>
    //     </EmptyNotesViewContainer>
    //   )
    // }
    return (
      <NotesListContainer>
        {noteList.map(eachNote => (
          <NoteItem key={eachNote.id} noteDetails={eachNote} />
        ))}
      </NotesListContainer>
    )
  }

  return (
    <NotesContainer>
      <NotesHeading>Notes</NotesHeading>
      <form onSubmit={onClickAdd}>
        <InputElement
          type="text"
          onChange={onChangeTitle}
          placeholder="Title"
          value={title}
        />
        <InputElement
          type="textarea"
          onChange={onChangeNote}
          placeholder="Take a Note..."
          value={note}
        />
        <AddButton>Add</AddButton>
      </form>
      {renderNotesList()}
    </NotesContainer>
  )
}

export default Notes
