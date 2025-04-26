import React from 'react'
import InputBox from '../components/InputBox'
import Header from '../components/Header'

const Signup = () => {
  return (
    <div>
      <Header heading="Sign Up" subheading="Enter your details to create an account" />
      <InputBox id="email" type="email" placeholder="janedoe@codecube.org" label="email" />
    </div>
  )
}

export default Signup