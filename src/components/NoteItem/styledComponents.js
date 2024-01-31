// Style your elements here
//import styled from 'styled-components'
import styled from 'styled-components'

export const NoteItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
`

export const NoteTitle = styled.h3`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 8px;
`

export const NoteText = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  color: #334155;
  margin-bottom: 8px;
`
