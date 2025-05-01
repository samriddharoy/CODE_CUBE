import React from 'react'

const FormError = ({message, ...props}) => {
  return (
    <div className='text-highlight' {...props}>{message}</div>
  )
}

export default FormError