import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../avatar/Avatar'
import './Navbar.scss'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useRef } from 'react'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

function Navbar() {

    const navigate = useNavigate();
    const loadingRef = useRef()

    const [loading, setLoading] = useState(false);

    function toggleLoadingBar() {
        if(loading) {
            setLoading(false);
            loadingRef.current.complete();
        } else {
            setLoading(true);
            loadingRef.current.continuousStart();
        }
    } 
  return (
    <div className='navbar'>
        <LoadingBar color='#5f9fff' ref={loadingRef} />
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