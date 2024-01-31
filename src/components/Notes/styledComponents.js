// Style your elements here
import styled from 'styled-components'

export const NotesContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: auto;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`

export const NotesHeading = styled.h1`
  font-family: "Bree Serif";
  font-size: 32px;
  color: #1e293b;
  margin-bottom: 16px;
`

export const NotesListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const InputTitle = styled.label`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: bold;
  color: #475569;
  margin-bottom: 8px;
`

export const InputElement = styled.input`
  height: 40px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 8px;
  font-family: "Roboto";
  font-size: 16px;
  color: #334155;
  outline: none;
`

export const AddButton = styled.button`
  height: 40px;
  width: 80px;
  border: none;
  border-radius: 8px;
  background-color: #4c63b6;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 16px;
`

export const EmptyNotesViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const EmptyNotesImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
`

export const EmptyNotesText = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  font-weight: bold;
  color: #475569;
`

export const EmptyNotesPara = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  font-weight: bold;
  color: #475569;
`
