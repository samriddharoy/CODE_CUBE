import React from 'react'
import Header from "../components/Header";
import InputBox from "../components/InputBox";


const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <Header 
          heading="Create an account"
          subheading="Please fill in the details to sign up."
        />

        <form className="mt-6 space-y-4">
          <InputBox 
            label="Full Name"
            id="name"
            placeholder="Enter your full name"
          />
          <InputBox 
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
          <InputBox 
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  )
}

export default Signup
