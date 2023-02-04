import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

function Home() {
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