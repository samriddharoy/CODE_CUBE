import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import FormError from '../components/FormError'
const Signin = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const login = (data) => {
    console.log(data);
    // TODO: add api calls using axios
  }

  return (
    <Layout>
      <Card>
        <Header
          heading="Sign in"
          subheading=""
        ></Header>
        <form className='space-y-4' onSubmit={handleSubmit(login)}>
          <InputBox 
            label="Email"
            id="email"
            type='email'
            placeholder="janedoe@xyz.com"
            {...register('email',{
              required: "Email required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email'
              } 
              }
            )}
          />
          {errors.email && (<FormError message={errors.email.message} />)}
          <InputBox 
            label="Password"
            id="password"
            type='password'
            placeholder="password"
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
            type="submit"
            text="Sign in"
          />
        </form>
        <p className="mt-4 text-sm text-center text-vanilla">
          Don't have an account?{' '}
          <Link to={'/signup'} className="text-accent hover:underline hover:text-highlight">
            Sign up
          </Link>
        </p>
      </Card>
    </Layout>
  )
}

export default Signin