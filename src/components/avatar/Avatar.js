import React from 'react'
import profile_pic from '../../assets/profile.gif'
import './Avatar.scss'

function Avatar({src}) {
  return (
    <div className='avatar'>
        <img src={src ? src : profile_pic} alt='Profile animated' />
    </div>
  )
}

export default Avatar