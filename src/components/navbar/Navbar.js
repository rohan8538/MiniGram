import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../avatar/Avatar'
import './Navbar.scss'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/slices/appConfig'

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function toggleLoadingBar() {
        dispatch(setLoading(true));
    } 
  return (
    <div className='navbar'>
        <div className='container'>
            <h2 className='banner hover-link' onClick={() => navigate('/')}>MiniGram</h2>
            <div className='right-side'>
                <div className='hover-link' onClick={() => navigate('/profile/profile')}>
                    <Avatar />
                </div>
                <div className='logout hover-link' onClick={toggleLoadingBar}><RiLogoutCircleRLine /></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar