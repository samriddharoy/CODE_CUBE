import React from 'react'
import { FaArrowDown } from "react-icons/fa"

function EditorNavbar() {
  return (
    <div className="relative flex items-center bg-primary text-vanilla px-6 py-3 shadow-md h-14">
      {/* Left-aligned code_cube */}
      <div className="flex items-center gap-2 ml-0">
        <span className="text-lg font-bold tracking-wider bg-highlight px-2 py-1 rounded-md text-primary">
          code_cube
        </span>
      </div>

      {/* Centered Paragraph */}
      <p className="absolute left-1/2 transform -translate-x-1/2 text-base font-medium text-vanilla opacity-90">
        file/my project
      </p>

      {/* Right-aligned download icon */}
      <div className="ml-auto flex items-center gap-2">
        <FaArrowDown
          className="text-lg cursor-pointer hover:text-highlight transition duration-200"
          title="Download"
        />
      </div>
    </div>
  )
}

export default EditorNavbar
