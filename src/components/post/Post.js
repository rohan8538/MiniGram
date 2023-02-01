import React from 'react'
import Avatar from '../avatar/Avatar'
import './Post.scss'
import temporaryImage from '../../assets/pexels-frans-van-heerden.jpg'
import { AiOutlineHeart } from 'react-icons/ai';


function Post({post}) {
  return (
    <div className='post'>
        <div className='heading'>
            <div className='avatar-box'>
                <Avatar />
            </div>
            <h4>Rohan Bhalotia</h4>
        </div>
        <div className='content'>
            <img src={temporaryImage} alt='Temporary'></img>
        </div>
        <div className='footer'>
            <div className='like'>
                <AiOutlineHeart className='icon hover-link'/>
                <h4>6</h4>
            </div>
            <p className='caption'>
                This is aurora borealis
            </p>
            <p className='time-ago'>
                a minute ago
            </p>
        </div>
    </div>
  )
}

export default Post