import React from 'react'

const ToDo = ({ completed, text, onClick }) => {
  
  
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
      { text }
    </li>
  )
}

export default ToDo
