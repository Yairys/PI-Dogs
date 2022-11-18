import React from 'react'
import './resetButton.css'

export default function ResetButton({reset}) {
  return (
    <button  className='rButton' onClick={(e) => {
        reset(e);
      }}>
       Reset Filters
    </button>

  )
}
