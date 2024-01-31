// Write your code here
import React from 'react'

import {NoteItemContainer, NoteTitle, NoteText} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {id, title, note} = noteDetails

  return (
    <NoteItemContainer>
      <NoteTitle>{title}</NoteTitle>
      <NoteText>{note}</NoteText>
    </NoteItemContainer>
  )
}

export default NoteItem
