import React from 'react'

function Button(props) {
  return (
    <div className='btn-field mt-2'>
      <button className='btn text-white' onClick={props.onClick} >{props.value}</button>
    </div>
  )
}

export default Button
