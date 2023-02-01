import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../avatar/Avatar'
import './Navbar.scss'

function Navbar() {

    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className='container'>
            <h2 className='banner hover-link' onClick={() => navigate('/')}>MiniGram</h2>
            <div className='right-side'>
                <div className='profile hover-link' onClick={() => navigate('/')}>
                    <Avatar />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Navbar