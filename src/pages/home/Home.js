import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { myInfo } from '../../redux/slices/appConfig';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myInfo())
  }, [])
  return (
    <div>
      <Navbar />
      <div style={{marginTop: '60px'}} >
        <Outlet />
      </div>
    </div>
  )
}

export default Home