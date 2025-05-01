import React from 'react'

const Card = ({children}) => {
  return (
    <div className="flex flex-col space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg border border-vanilla/40 p-6">
      {children}
    </div>
  )
}

export default Card