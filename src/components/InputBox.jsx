import React from 'react'

const InputBox = ({ label, id, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  )
}

export default InputBox
