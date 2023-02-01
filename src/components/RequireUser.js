import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken, KEY_ACCESS_TOKEN } from '../utils/localStorageManager'

function RequireUser() {
    const user = getAccessToken(KEY_ACCESS_TOKEN);
  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
}

export default RequireUser