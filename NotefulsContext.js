import React from 'react'

const NotefulsContext = React.createContext({
  notes: window.navigator.notes,
  addNote: () => {},
  deleteNote: () => {},
})

export default NotefulsContext