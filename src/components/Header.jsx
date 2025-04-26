import React from 'react'
// component with header and sub header together
// TODO: add tcss
const Header = ({heading, subheading}) => {
  return (
    <div>
      <h3>{heading}</h3>
      <h5>{subheading}</h5>
    </div>
  )
}

export default Header