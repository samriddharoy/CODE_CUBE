import React from 'react';
import Header from "../components/Header";
import InputBox from "../components/InputBox";

const Signup = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-t from-primary via-secondary to-primary text-vanilla">
      <div className="flex flex-col space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 rounded-2xl bg-primary/60 backdrop-blur-md shadow-lg border border-vanilla/40 p-6">
        
        <Header 
          heading="Create an account"
          subheading="Please fill in the details to sign up."
        />

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

        <div className="w-full text-center bg-highlight text-vanilla font-semibold py-2 rounded-md cursor-pointer hover:bg-highlight/80 active:scale-95 transition">
          Sign Up
        </div>

        <p className="mt-4 text-sm text-center text-vanilla">
          Already have an account?{' '}
          <a href="/signin" className="text-accent hover:underline hover:text-highlight">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
