import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import { axiosClient } from '../../utils/axiosClient';
import { setAccessToken, KEY_ACCESS_TOKEN } from '../../utils/localStorageManager';

function Login() {

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(`email: ${email} password: ${password}`);
    try {
      const loginDetails = await axiosClient.post('/auth/login', {
        email,
        password,
      });
      setAccessToken(KEY_ACCESS_TOKEN, loginDetails.response.accessToken);
      //console.log(loginDetails);
      navigate('/');
    }catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="Login">
      <div className="main-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input type="email" className="email" placeholder='abc@xyz.com' id="email"/>
          <label htmlFor='password'>Password</label>
          <input type="password" placeholder='Abc123' className="password" id='password'/>
          <input type='submit' className='submit' value='Login'/>
        </form>
        <p className='createAccount'>Don't have an account? Create one <Link to="/signup">SignUp</Link></p>
      </div>
    </div>
  );
}

export default Login;