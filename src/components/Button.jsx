import React from 'react'

const Button = ({text}) => {
  return (
    <div className="w-full text-center bg-highlight text-vanilla font-semibold py-2 rounded-md cursor-pointer hover:bg-highlight/80 active:scale-95 transition">
    {text}
  </div>
  )
}

export default Button