// import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from "../components/Card";
import FormError from '../components/FormError';

const Signup = () => {

  const {register, handleSubmit, formState: { errors }} = useForm()

  const signup = (data) => {
    // TODO: add api call
    console.log(data);
    
  }


  return (
      <Layout>
        <Card>
        <Header 
          heading="Create an account"
          subheading="Please fill in the details to sign up."
        />
        <form onSubmit={handleSubmit(signup)} className='space-y-4'>
          <InputBox
            label="Full Name"
            id="name"
            placeholder="Enter your full name"
            {...register("name", {
              required: "Name is required"
            })}
          />
          {errors.name && (<FormError message={errors.name.message} />)}
        
          <InputBox 
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email'
              }
            })}
          />
          {errors.email && (<FormError message={errors.email.message} />)}
          <InputBox 
            label="Password"
            id="password"
            type="password" 
            placeholder="Enter your password"
            {...register("password", {
              required: "Password required",
              pattern:{
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one symbol'
              }
            })}
          />
          {errors.password && (<FormError message={errors.password.message} />)}

          <Button
            type='submit'
            text="Sign up"
          />
        </form>
        <p className="mt-4 text-sm text-center text-vanilla">
          Already have an account?{' '}
          <Link to={'/signin'} className="text-accent hover:underline hover:text-highlight">
            Sign in
          </Link>
        </p>
      </Card>
    </Layout>
  );
};

export default Signup;
