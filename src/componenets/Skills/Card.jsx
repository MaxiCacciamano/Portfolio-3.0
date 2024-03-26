import React from 'react'
import './card.css'

export const Card = (props) => {
  return (
    <div className='skill'>
        <div className='item item-3'>{props.logo}</div>
        <div className='content'>
        <div className='title item-4'><h1>{props.title}</h1></div>
        <div className='experience item-1'><p>{props.experience}</p></div>
        </div>
    </div>
  )
}
