import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-t from-primary via-secondary to-primary text-vanilla">
      {children}
    </div>
  )
}

export default Layout