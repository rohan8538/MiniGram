import React from 'react'
import { KEY_ACCESS_TOKEN, getAccessToken } from '../utils/localStorageManager'
import { Navigate, Outlet } from 'react-router-dom';

function NotLogin() {
    const user = getAccessToken(KEY_ACCESS_TOKEN);
  return (
    user ? <Navigate to="/" /> : <Outlet />
  )
}

export default NotLogin;