import React from 'react'
// TODO: add TCSS
const InputBox = ({label, id, placeholder, type = "text"}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} id={id} />
    </div>
  )
}

export default InputBox