import React from 'react'
import { axiosClient } from '../../utils/axiosClient';
import './Signup.scss'

function SignUp() {

  
  async function handleSubmit(e) {
    e.preventDefault();
    try{
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const signup = await axiosClient.post('auth/signup', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("SIGNUP", signup);
    }catch(e) {
      console.log(e);
    }
  }
  
  return (
    <div className='signup'>
      <div className='signup-box'>
        <h2 className='heading'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' placeholder='First' className='firstName' id='firstName'/>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' placeholder='Last' className='lastName' id='lastName' />
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='abc@xyz.com' className='email' id='email'/>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Abc123' className='password' id='password'/>
          <input type='submit' className='submit' />
        </form>

      </div>
    </div>
  )
}

export default SignUp