import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../avatar/Avatar'
import './Navbar.scss'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'

function Navbar() {

    const navigate = useNavigate();
    const myProfile = useSelector(state => state.appConfigReducer.myProfile)

    function handleLogOut() {

    }
  return (
    <div className='navbar'>
        <div className='container'>
            <h2 className='banner hover-link' onClick={() => navigate('/')}>MiniGram</h2>
            <div className='right-side'>
                <div className='hover-link' onClick={() => navigate('/profile/${myProfile?._id}')}>
                    <Avatar src={myProfile?.avatar?.url}/>
                </div>
                <div className='logout hover-link' onClick={handleLogOut}><RiLogoutCircleRLine /></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar